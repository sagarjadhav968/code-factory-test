/**
 * 
 * Date: 16/10/2018	
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employeebean } from '../models/employeebean.model';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
	
	constructor(private httpClient: HttpClient) { 
	}
	
	
	public saveEmployee(req: Employee): Observable<any> {
		return this.httpClient.post('https://uat.amexio.org:8991/rest-sample-app/api/emp/saveEmployee/', req);
	}
	public findAll(): Observable<any> {
		return this.httpClient.get('https://uat.amexio.org:8991/rest-sample-app/api/emp/findall/');
	}
	
	
}

