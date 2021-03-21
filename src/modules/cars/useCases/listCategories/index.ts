import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "../../useCases/listCategories/ListCategoriesController";
import { ListCategoriesUseCase } from "../../useCases/listCategories/ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoryController = new ListCategoriesController(listCategoryUseCase);

export {listCategoryController};  