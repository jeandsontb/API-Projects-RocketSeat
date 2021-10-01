import { Category } from "../../entities/Category";
import { ICategoriesRepositories } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepositories) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
