import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecifitacionUseCase } from "./CreateSpecifitacionUseCase";

class CreateSpecificationController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createSpecificationUseCase = container.resolve(
      CreateSpecifitacionUseCase
    );

    createSpecificationUseCase.execute({
      name,
      description,
    });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
