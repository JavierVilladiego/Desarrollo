import { Request, Response } from 'express';

import { Producto } from '../models/Productos';

export class ProductoController {

    //public index(req: Request, res: Response) {
    //    Cliente.findAll() //select * from cliente
    //        .then(
    //            (clientes: Array<any>) => res.json(clientes)
    //        )
    //        .catch(
    //            (err: Error) => res.status(500).json(err)
    //        );
    //}
    public async index(req: Request, res: Response) {
        let productos: any = [];
        try {
            productos = await Producto.findAll();
            res.json(productos);
        } catch (error) {
            let err = error.message;
            res.status(500).json(err)
        }
    }


}
