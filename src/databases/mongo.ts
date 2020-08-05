import { Mongo } from "@mayajs/mongo";
import todos from "../controllers/todo/todos.model";

export = Mongo({
  name: "test",
  connectionString:
    "db con string here",
  schemas: [
    todos, // Add Mongoose Schema here
  ],
});
