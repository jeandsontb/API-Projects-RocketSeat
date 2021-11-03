import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import auth from "../../../../config/auth";
import { UserRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UserRepository";
import { UserTokenRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UserTokenRepository";
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

  const userTokensRepository = new UserTokenRepository();

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      auth.secret_refresh_token
    ) as IPayload;

    const user = await userTokensRepository.findByUserIdAndRefreshToken(
      user_id,
      token
    );

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
