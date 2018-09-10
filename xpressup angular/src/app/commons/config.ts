import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	
	public envProd : boolean = environment.production;
	public _apiPath : string = '/';
	public _serverAddress : string = environment._server + environment._rootContext + this._apiPath;

	public _searchNResult : string = this._serverAddress + 'search';
	public _searchNTerms : string = this._serverAddress + 'threeone/';
	public _propertyResult : string = this._serverAddress + 'fetch/property';
}
