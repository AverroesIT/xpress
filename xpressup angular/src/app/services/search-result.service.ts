import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import 'rxjs/add/operator/map';

import { Config } from '../commons/config';

@Injectable()
export class SearchResultService {

  constructor(private config: Config, private http: HttpClient) { }

  searchNResult(searchForm): Observable< any[] > {
			return this.http.post< any[]>(this.config._searchNResult, searchForm).map((result: any[]) => {
				return result;
	    	}, error => {
	      	console.log(error);
	      	alert('Search result view fetch wrong data');
	    	}).first();
		}

searchNTerms(word): Observable<any> {
		return this.http.get<any>(this.config._searchNTerms + word).map((result: any) => {
			return result;
		}, error => {
	      console.log(error);
	      alert('Search word terms result view fetch wrong data');
	    }).first();
	}

	propertyResult(searchForm): Observable< any[] > {
		return this.http.post< any[]>(this.config._propertyResult, searchForm).map((result: any[]) => {
			return result;
	    }, error => {
	      console.log(error);
	      alert('property search result view fetch wrong data');
	    }).first();
	}

}
