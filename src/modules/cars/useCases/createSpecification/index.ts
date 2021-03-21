import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "../../useCases/createSpecification/CreateSpecificationController";
import { CreateSpecificationUseCase } from "../../useCases/createSpecification/CreateSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export {createSpecificationController};