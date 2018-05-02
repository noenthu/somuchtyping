import { Controller } from "./controllers";
import { HttpServer } from "../server/httpServer";
import { Request, Response } from "restify";

export class CustomerController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('customers', this.list.bind(this));        
        httpServer.get('customer/:id', this.getById.bind(this));
        httpServer.post('customer', this.create.bind(this));
    }

    private async list(req: Request, res: Response): Promise<void> {

    }

    private async getById(req: Request, res: Response): Promise<void> {

    }

    private async create(req: Request, res: Response): Promise<void> {

    }
}