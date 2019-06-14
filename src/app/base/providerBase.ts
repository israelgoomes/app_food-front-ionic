import { HttpProvider } from '../../providers/http/http';
import { httpResultModel } from '../models/httpResultModel';
//o T é uma variável que irá receber o tipo do model que será passado quando implementarmos.
export abstract class ProviderBase<T>{
        constructor(public url: string,
            public http: HttpProvider){}

    get(): Promise<httpResultModel>{
        return this.http.get(this.url);
    }
    //passando o id por parametro, e colocando o id passado na url.
    //Quando é necessário ID é feito dessa forma o return
    getByUid(uid: string): Promise<httpResultModel>{
        return this.http.get(`${this.url}/${uid}`);
    }
    //ele é um model do tipo T que é o que é recebido lá em cima
    post(model: T): Promise<httpResultModel>{
        return this.http.post(this.url, model);
    }
    put(uid: string, model: T): Promise<httpResultModel>{
        return this.http.put(`${this.url}/${uid}`, model);
    }

    delete(uid: string): Promise<httpResultModel>{
        return this.http.delete(`${this.url}/${uid}`);
    }
}