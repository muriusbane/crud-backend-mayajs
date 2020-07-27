import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";

@Injectable()
export class TodoServices {
  @Models("todo") model:any;
  constructor() {}
  
  async addTodo(body: any) {
    const todo = new this.model(body);
    await todo.save();
    return todo.toObject();
  }

  async allTodo() {
    return await this.model.find();
  }

  async todobyId(_id: string) {
    return await this.model.findOne({ _id });
  }

  async updateTodo(_id: string, body: any) {
    return await this.model.findOneAndUpdate({ _id }, body, {new: true});
  }
}