import { Request, Response } from "express";

import { CreateSpecifitacionUseCase } from "./CreateSpecifitacionUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecifitacionUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({
      name,
      description,
    });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
