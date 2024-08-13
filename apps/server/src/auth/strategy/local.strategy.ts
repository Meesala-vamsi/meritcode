import { BadRequestException, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ErrorMessage } from "@reactive-resume/utils";
import { IStrategyOptionsWithRequest, Strategy } from "passport-local";

import { AuthService } from "../auth.service";
import { Request } from "express";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, "local") {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: "identifier", passReqToCallback:true } as IStrategyOptionsWithRequest);
  }

  async validate(req:Request,identifier: string, password: string) {
    const recaptchaToken = req.body.recaptchaToken
    try {
      return await this.authService.authenticate({ identifier, password, recaptchaToken});
    } catch (error) {
      throw new BadRequestException(ErrorMessage.InvalidCredentials);
    }
  }
}
