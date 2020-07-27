import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Request, Response, NextFunction } from "express";
import { Controller } from "@mayajs/core";
import { TodoServices } from "./todo.service";


@Controller({
  model: "./todo.model",
  route: "/todo",
})
export class SampleController {
  constructor(private services: TodoServices)  {}

  @Post({ path: "/" })
  async addbyId(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json(await this.services.addTodo(req.body));
  }

  @Get({ path: "/" })
  async getallTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json(await this.services.allTodo());
  }

  @Get({ path: "/:id" })
  async getTodobyId(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.todobyId(id));
  }

  @Patch({ path: "/:id" })
  async updateTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.updateTodo(id, req.body));
  }
  
}