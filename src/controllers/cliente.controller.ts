import { Request, Response } from 'express';

import { Cliente } from '../models/Cliente';

export class ClienteController {

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
        let clientes: any = [];
        try {
            clientes = await Cliente.findAll();
            res.json(clientes);
        } catch (error) {
            let err = error.message;
            res.status(500).json(err)
        }
    }


}
