import { Router, Request, Response } from "express";

export class UserController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private getUser(req: Request, res: Response) {
    //get a user
  }

  private getUserTodos(req: Request, res: Response) {
    //get user todos
  }

  private createTodo(req: Request, res: Response) {
    //create a todo
  }

  private createUser(req: Request, res: Response) {
    //create a user
  }

  private editTodo(req: Request, res: Response) {
    //edit a todo
  }

  private editUser(req: Request, res: Response) {
    //edit a user
  }

  private deleteTodo(req: Request, res: Response) {
    //delete a todo
  }

  private deleteUser(req: Request, res: Response) {
    //delete a user
  }

  private routes() {
    this.router.get("/:name", this.getUser);
    this.router.get("/todos/:name", this.getUserTodos);

    this.router.post("/todos/:name", this.createTodo);
    this.router.post("/", this.createUser);

    this.router.put("/todos/:name", this.editTodo);
    this.router.put("/:name", this.editUser);

    this.router.delete("/todos/:name/:todo", this.deleteTodo);
    this.router.delete("/:name", this.deleteUser);
  }
}
