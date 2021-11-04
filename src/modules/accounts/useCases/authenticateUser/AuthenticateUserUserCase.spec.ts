import { DayJsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayJsDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokenRepositoryInMemory } from "../../repositories/in-memory/UsersTokenRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUserCase } from "./AuthenticateUserUserCase";

let authenticateUserUserCase: AuthenticateUserUserCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let userTokenRepositoryInMemory: UsersTokenRepositoryInMemory;
let dateProvider: DayJsDateProvider;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    userTokenRepositoryInMemory = new UsersTokenRepositoryInMemory();
    dateProvider = new DayJsDateProvider();
    authenticateUserUserCase = new AuthenticateUserUserCase(
      usersRepositoryInMemory,
      userTokenRepositoryInMemory,
      dateProvider
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      name: "Jeandson",
      password: "123456",
      email: "jeandsontb@gmail.com",
      driver_license: "101010",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUserCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an nonexistent user", async () => {
    await expect(
      authenticateUserUserCase.execute({
        email: "falhaemail@gmail.com",
        password: "12345",
      })
    ).rejects.toEqual(new AppError("Email or Password incorrect"));
  });

  it("should not be able to authenticate with incorrect password", async () => {
    const user: ICreateUserDTO = {
      name: "Jeandson Tenorio",
      password: "123456",
      email: "jeandsontb@gmail.com",
      driver_license: "101010",
    };

    await createUserUseCase.execute(user);

    await expect(
      authenticateUserUserCase.execute({
        email: "jeandsontb@gmail.com",
        password: "passwordIncorrect",
      })
    ).rejects.toEqual(new AppError("Email or Password incorrect"));
  });
});
