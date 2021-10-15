import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];
  async create({
    name,
    description,
    brand,
    daily_rate,
    fine_amount,
    license_plate,
    category_id,
    id,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      brand,
      daily_rate,
      fine_amount,
      license_plate,
      category_id,
      id,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((license) => license.license_plate === license_plate);
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const cars = this.cars.filter((car) => {
      if (
        car.available === true ||
        (brand && car.brand === brand) ||
        (category_id && car.category_id === category_id) ||
        (name && car.name === name)
      ) {
        return car;
      }
      return null;
    });
    return cars;
  }

  async findById(id: string): Promise<Car> {
    return this.cars.find((car) => car.id === id);
  }
}

export { CarsRepositoryInMemory };
