import { NextFunction, Request, Response } from "express";

import { UserRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UserRepository";
import { AppError } from "../../../errors/AppError";

const ensureAdmin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.user;

  const userRepository = new UserRepository();
  const user = await userRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppError("User does not is Administrator");
  }

  return next();
};

export { ensureAdmin };
