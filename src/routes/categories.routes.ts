import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoriesAlreadExists = categoriesRepository.findByName(name);

  if (categoriesAlreadExists) {
    return response.status(400).json({ error: "Category Already exists" });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const category = categoriesRepository.list();

  return response.json(category);
});

export { categoriesRoutes };
