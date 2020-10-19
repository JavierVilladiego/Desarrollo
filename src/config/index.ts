import express, { Application } from 'express';
import morgan from 'morgan';
import { Routes } from '../routes/index';

export class App {
    app: Application;

    constructor(private port?: number | string,
        public routesPrv: Routes = new Routes()
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes()

    }
    private routes() {
        this.routesPrv.clienteRoutes.rutas(this.app);
        this.routesPrv.productoRoutes.rutas(this.app);
    }
    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json()); //valores tipo json   
        this.app.use(express.urlencoded({ extended: false })); //valores formulario


    }

    private settings() {
        this.app.set('port', this.port || 3000);
    }
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('server en el puerto: ', this.app.get('port'))
    }

}