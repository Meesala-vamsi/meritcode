import { Resume, User } from "@prisma/client";
import {ParamsDictionary, Request} from "express-serve-static-core"

declare global {
  namespace Express {
    interface Request {
      user?: User;
      payload?: {
        resume: Resume;
      };
      body?: any;
      cookies?: Record<string, any>;
      params?: ParamsDictionary;
    }
  }
}

export {};
