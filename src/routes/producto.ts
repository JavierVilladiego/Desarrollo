import { Request, Response, Application } from 'express';

import { ProductoController } from '../controllers/producto.controller';


export class ProductoRoutes {

    public productoControlles: ProductoController = new ProductoController();
    public rutas(app: Application) {
        app.route("/productos").get(this.productoControlles.index)

    }

}