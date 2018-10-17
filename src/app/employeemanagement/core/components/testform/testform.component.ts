/**
 * Created by: Ketan Gote
 * Date: 17/10/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StatisticsService } from '../../services/statistics.service';
import { Testform } from './../../models/testform.model'
@Component(
{
	selector: 'testform',
	templateUrl: 'testform.component.html'
})
export class TestformComponent implements OnInit
{
	testform: Testform;
	_rootpane:any;
	year_Data:any;
	gender_Data:any;
	genderData_Data:any;
	successMsgData:any[]=[];
	
	constructor(private statisticsService: StatisticsService, private router: Router)
	{
		this.testform = new Testform();
	    this.year_Data=[{"id":"2010"},{"id":"2011"},{"id":"2012"},{"id":"2013"}];
	    this.gender_Data=[{"genderId":"male","genderName":"Male"},{"genderId":"female","genderName":"Female"}];
		this.genderData_Data=[];
	}
	ngOnInit()
	{
		this.onLoad_rootpane();
	}
	
	onLoad_rootpane(){ 
	} 
	onClick_showData(eventData:any)
	{ 
		if(this.testform.gender ==  'male') {
			let response: any;
			this.statisticsService.male(this.testform.year).subscribe(
			(res: any) =>
			{
				response = res;
			},
			(error: any) => 
			{
			},
			() => 
			{
				this.showDataBindResponse_Xwn(response);
			});
		}else if(this.testform.gender ==  'female') {
			let response: any;
			this.statisticsService.female(this.testform.year).subscribe(
			(res: any) =>
			{
				response = res;
			},
			(error: any) => 
			{
			},
			() => 
			{
				this.showDataBindResponse_nfC(response);
			});
		}
		
	}
	private showDataBindResponse_Xwn(response: any)
	{
		this.genderData_Data=response.response;
	}
	private showDataBindResponse_nfC(response: any)
	{
		this.genderData_Data=response.response;
	} 
}

