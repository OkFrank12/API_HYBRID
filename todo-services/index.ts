import express, { Application, Request, Response } from "express";
import cors from "cors";
import todo from "./router/todoRouter";
import auth from "./router/authRouter";

const port: number = 2000;

const app: Application = express();

app
  .use(cors())
  .use(express.json())


  .use("/api/auth", auth)
  .use("/api/todo", todo)

  .get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "You have just hit the todo services endpoint",
      });
    } catch (error) {
      res.status(404).json({
        message: "Not Found",
        data: error,
      });
    }
  });

const server = app.listen(port, () => {
  console.log("Server is live");
});

process.on("uncaughtException", (err: any) => {
  console.log("Server is shutting down because of uncaught exception");
  console.log("uncaughtException: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("Server is shutting down because of unhandled rejection");
  console.log("unhandledRejection: ", reason);
  server.close(() => {
    process.exit(1);
  });
});
