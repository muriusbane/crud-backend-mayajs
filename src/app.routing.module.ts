import { TodosController } from "./controllers/todo/todos.controller";

export const routes = [
  {
    controllers: [TodosController],
    middlewares: [],
    path: "",
  },
];
