import {
  Get,
  Req,
  Body,
  Res,
  Controller,
  Param,
} from "routing-controllers";

import { getRepository } from "typeorm";
import { Response } from "express";
import { User } from "../entity/User.entity";

@Controller()
export class UserController {
  @Get("/get-user/:id")
  async getUser(
    @Res() response: Response,
    @Body() param: any,
    @Param("id") id: string
  ) {
    try {
      const userRepo = getRepository(User);

      const user = await userRepo.findOne({
        where: { id },
      });

      return response.json({
        status: "ok",
        code: 200,
        data: user,
      });
    } catch (error) {
      return response.json({ status: "Bad Request", error, param });
    }
  }

}
