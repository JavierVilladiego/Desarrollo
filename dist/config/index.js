var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import morgan from 'morgan';
export class App {
    constructor(port) {
        this.port = port;
        this.app = express();
        this.settings();
        this.middlewares();
    }
    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json()); //valores tipo json   
        this.app.use(express.urlencoded({ extended: false })); //valores formulario
    }
    settings() {
        this.app.set('port', this.port || 3000);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('server en el puerto: ', this.app.get('port'));
        });
    }
}
