import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
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

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Fusca Modificado 02",
      description: "Fusca modificado estilo pickup",
      daily_rate: 100,
      license_plate: "AAA-2090",
      fine_amount: 60,
      brand: "car_brand_02",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_02",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Fusca Modificado 03",
      description: "Fusca modificado estilo pickup",
      daily_rate: 100,
      license_plate: "AAA-2091",
      fine_amount: 60,
      brand: "car_brand_02",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Fusca Modificado 03",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Fusca Modificado 03",
      description: "Fusca modificado estilo pickup",
      daily_rate: 100,
      license_plate: "AAA-2091",
      fine_amount: 60,
      brand: "car_brand_02",
      category_id: "12345",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
