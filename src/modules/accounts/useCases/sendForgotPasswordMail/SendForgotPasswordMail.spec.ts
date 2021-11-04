import { DayJsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayJsDateProvider";
import { MailProviderInMemory } from "../../../../shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokenRepositoryInMemory } from "../../repositories/in-memory/UsersTokenRepositoryInMemory";
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayJsDateProvider;
let usersTokensRepositoryInMemory: UsersTokenRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send forgot e-mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayJsDateProvider();
    usersTokensRepositoryInMemory = new UsersTokenRepositoryInMemory();
    mailProvider = new MailProviderInMemory();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("Should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "664168",
      email: "asasas@gmail.com",
      name: "Assass",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("asasas@gmail.com");

    expect(sendMail).toHaveBeenCalled();
  });

  it("Should not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("ka@uj.gr")
    ).rejects.toEqual(new AppError("User dos not exists"));
  });

  it("Should be able to create a new users token", async () => {
    const generateTokenEmail = jest.spyOn(
      usersTokensRepositoryInMemory,
      "create"
    );

    await usersRepositoryInMemory.create({
      driver_license: "63248",
      email: "adada@gmail.com",
      name: "Aaddass",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("adada@gmail.com");

    expect(generateTokenEmail).toBeCalled();
  });
});
