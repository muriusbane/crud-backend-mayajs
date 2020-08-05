import { Mongo } from "@mayajs/mongo";
import todos from "../controllers/todo/todos.model";

export = Mongo({
  name: "test",
  connectionString:
    "mongodb+srv://root:root@mayajs.6izmq.mongodb.net/test?authSource=admin&replicaSet=atlas-dbtreq-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
  schemas: [
    todos, // Add Mongoose Schema here
  ],
});
