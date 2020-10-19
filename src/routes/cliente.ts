import { Request, Response, Application } from 'express';

import { ClienteController } from '../controllers/cliente.controller';


export class ClienteRoutes {

    public clienteControlles: ClienteController = new ClienteController();
    public rutas(app: Application) {
        app.route("/clientes").get(this.clienteControlles.index)

    }

}