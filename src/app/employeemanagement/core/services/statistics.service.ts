/**
 *
 * Date: 16/10/2018
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Stateradiobean } from '../models/stateradiobean.model';
import {HttpSubscriber} from './../../../shared/http.subsciber';
import { SERVICE_URL } from './service.constants';
@Injectable()
export class StatisticsService extends HttpSubscriber {

	constructor(private httpClient: HttpClient) {
    super();
	}

	public female(male: String, onSuccess: (data: Stateradiobean) => any, onFailure: (error: any) => any) {
    this.subscribeData(this.httpClient.get<Stateradiobean>(SERVICE_URL.STATE_WISE + 'female/' + male),
    onSuccess, onFailure);
  }



	public male(male: String): Observable<any> {
		return this.httpClient.get('https://uat.amexio.org:8991/rest-sample-app/api/statewise/male/'+male);
	}


}

