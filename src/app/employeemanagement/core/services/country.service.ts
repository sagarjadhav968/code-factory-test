/**
 * 
 * Date: 16/10/2018	
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Country } from '../models/country.model';

@Injectable()
export class CountryService {
	
	constructor(private httpClient: HttpClient) { 
	}
	
	public findAll(): Observable<any> {
		return this.httpClient.get('https://uat.amexio.org:8991/rest-sample-app/api/country/findall/');
	}
	
	
}

