import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Fusca Modificado",
      description: "Fusca modificado estilo pickup",
      daily_rate: 100,
      license_plate: "AAA-2090",
      fine_amount: 60,
      brand: "car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Fusca Modificado 02",
      description: "Fusca modificado estilo pickup",
      daily_rate: 100,
      license_plate: "AAA-2090",
      fine_amount: 60,
      brand: "car_brand_02",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_brand_02",
    });

    console.log(cars);
    expect(cars).toEqual([car]);
  });
});
