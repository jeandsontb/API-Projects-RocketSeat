import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UserRepository";
import { AppError } from "../../../errors/AppError";

interface IPayload {
  sub: string;
}

const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "7e84ec654d4faa95dcd739a25bb0ae1a"
    ) as IPayload;

    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError("invalid token", 401);
  }
};

export { ensureAuthenticated };
