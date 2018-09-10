import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/* import { UserDetails } from '../models/user-details'; */

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

	constructor() {}

  	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    	var authToken : string = this.getAuthToken();
    	if(authToken){
    		request = request.clone({
	      		setHeaders: {
		        	authToken : this.getAuthToken()
		      	}
		    });
    	}
    		
	    return next.handle(request);
	}

	public getAuthToken() : string {
	    /* let userDetails : UserDetails = JSON.parse(localStorage.getItem('userDetails'));
		return userDetails ? userDetails.authToken : null; */
		return null;
	}
}
