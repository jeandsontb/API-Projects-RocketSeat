import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICategoriesRepositories } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepositories
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoriesAlreadExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoriesAlreadExists) {
      throw new AppError("Already category exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
