import { Mongo } from "@mayajs/mongo";
import test from "../controllers/todo/todo.model";

export = Mongo({
  name: "test",
  connectionString: "mongodb+srv://muriusbane:root@cluster0.7ispv.mongodb.net/test?retryWrites=true&w=majority",
  schemas: [
    test, // Add Mongoose Schema here
  ],
});