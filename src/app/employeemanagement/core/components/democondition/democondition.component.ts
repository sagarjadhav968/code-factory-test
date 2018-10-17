/**
 * Created by: Ketan Gote
 * Date: 17/10/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StatisticsService } from '../../services/statistics.service';
import { Demomodel } from './../../models/demomodel.model'
@Component(
{
	selector: 'democondition',
	templateUrl: 'democondition.component.html'
})
export class DemoconditionComponent implements OnInit
{
	demomodel: Demomodel;
	_rootpane:any;
	year_Data:any;
	gender_Data:any;
	gridData_Data:any;
	successMsgData:any[]=[];
	
	constructor(private statisticsService: StatisticsService, private router: Router)
	{
		this.demomodel = new Demomodel();
	    this.year_Data=[{"year":"2010"},{"year":"2011"},{"year":"2012"},{"year":"2013"}];
	    this.gender_Data=[{"genderId":"male","genderName":"Male"},{"genderId":"female","genderName":"Female"}];
		this.gridData_Data=[];
	}
	ngOnInit()
	{
		this.onLoad_rootpane();
	}
	
	onLoad_rootpane(){ 
	} 
	onClick_showData(eventData:any)
	{ 
		if(this.demomodel.gender ==  'male') {
			let response: any;
			this.statisticsService.male(this.demomodel.year).subscribe(
			(res: any) =>
			{
				response = res;
			},
			(error: any) => 
			{
			},
			() => 
			{
				this.showDataBindResponse_NkW(response);
			});
		}else if(this.demomodel.gender ==  'female') {
			let response: any;
			this.statisticsService.female(this.demomodel.year).subscribe(
			(res: any) =>
			{
				response = res;
			},
			(error: any) => 
			{
			},
			() => 
			{
				this.showDataBindResponse_zHK(response);
			});
		}
		
	}
	private showDataBindResponse_NkW(response: any)
	{
		this.gridData_Data=response.response;
	}
	private showDataBindResponse_zHK(response: any)
	{
		this.gridData_Data=response.response;
	} 
}

