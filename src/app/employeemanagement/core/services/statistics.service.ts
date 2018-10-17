/**
 * 
 * Date: 16/10/2018	
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Stateradiobean } from '../models/stateradiobean.model';

@Injectable()
export class StatisticsService {
	
	constructor(private httpClient: HttpClient) { 
	}
	
	public female(male: String): Observable<any> {
		return this.httpClient.get('https://uat.amexio.org:8991/rest-sample-app/api/statewise/female/'+male);
	}
	
	public male(male: String): Observable<any> {
		return this.httpClient.get('https://uat.amexio.org:8991/rest-sample-app/api/statewise/male/'+male);
	}
	
	
}

