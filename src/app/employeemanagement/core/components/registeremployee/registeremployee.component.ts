/**
 * Created by: Ketan Gote
 * Date: 17/10/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { StateService } from '../../services/state.service';
import { Employee } from './../../models/employee.model'
import {SERVICE_URL} from './../../services/service.constants';
@Component(
{
	selector: 'registeremployee',
	templateUrl: 'registeremployee.component.html'
})
export class RegisteremployeeComponent implements OnInit
{
	employee: Employee;
	genderId_Data:any;
	state_Data:any;
	errorMsgData:any[]=[];
	successMsgData:any[]=[];
	http=SERVICE_URL;
	constructor(private employeeService: EmployeeService, private stateService: StateService, private router: Router)
	{
		
		this.employee = new Employee();
	    this.genderId_Data=[{"id":"1","name":"Male"},{"id":"2","name":"Female"}];
		this.state_Data=[];
	}
	ngOnInit()
	{
	}
	
	onSingleSelect_country(eventData:any)
	{ 
		this.findbycountryid(eventData);
	}
	private findbycountryid(eventData:any){
		let response: any;
		this.stateService.findbycountryid(this.employee.countryId).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
		},
		() => 
		{
			this.findbycountryidBindResponse_yNk(response);
		});
		
	}
	private findbycountryidBindResponse_yNk(response: any)
	{
		this.state_Data=response.response;
	}
	 
	onClick_save(eventData:any)
	{ 
		this.saveEmployee(eventData);
	}
	private saveEmployee(eventData:any){
		let response: any;
		
		this.employeeService.saveEmployee(this.employee).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
		},
		() => 
		{
			this.saveEmployeeBindResponse_uZz(response);
		});
		
	}
	private saveEmployeeBindResponse_uZz(response: any)
	{
		if(response.success) {
			this.router.navigate(['employeemanagement/core/employee-list']);
		}else {
			this.errorMsgData.push(response.message);
			
		}
	}
	 
}

