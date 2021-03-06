import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Request, Response, NextFunction } from "express";
import { Controller } from "@mayajs/core";
import { TodoServices } from "./todos.service";


@Controller({
  model: "./todos.model",
  route: "/todos",
})
export class TodosController {
  constructor(private services: TodoServices)  {}

  @Post({ path: "/" })
  async addbyId(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json(await this.services.addTodo(req.body));
  }

  @Get({ path: "/" })
  async getAllTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json(await this.services.allTodo());
  }

  @Get({ path: "/:id" })
  async getTodoById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.todoById(id));
  }

  @Patch({ path: "/:id" })
  async updateTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.updateTodo(id, req.body));
  }

  @Delete({ path: "/:id" })
  async deleteTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    res.json(await this.services.deleteTodo(id));
  }
  
}