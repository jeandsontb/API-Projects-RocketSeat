import { Category } from "../../entities/Category";
import {
  ICategoriesRepositories,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoryRepositoryInMemory implements ICategoriesRepositories {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((value) => value.name === name);

    return category;
  }

  async list(): Promise<Category[]> {
    const listCategory = this.categories;

    return listCategory;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }
}

export { CategoryRepositoryInMemory };
