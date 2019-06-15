import { configHelper } from './../../app/helpers/configHelper';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { categoriaModel } from '../../app/models/categoriaModel';
import { HttpProvider } from '../http/http';

@Injectable()
export class CategoriaProvider extends ProviderBase<categoriaModel>{

  urr: string = `${configHelper.url}categoria`;

  constructor(public http: HttpProvider) {
    super(`${configHelper.url}categoria`, http);
  }

}
