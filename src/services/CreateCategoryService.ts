import { ICategoriesRepositories } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepositories) {}

  execute({ name, description }: IRequest): void {
    const categoriesAlreadExists = this.categoriesRepository.findByName(name);

    if (categoriesAlreadExists) {
      throw new Error("Already category exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
