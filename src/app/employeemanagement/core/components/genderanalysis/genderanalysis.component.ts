/**
 * Created by: Ketan Gote
 * Date: 16/10/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StatisticsService } from '../../services/statistics.service';
import { Genderanalticsmodel } from './../../models/genderanalticsmodel.model'
@Component(
{
	selector: 'genderanalysis',
	templateUrl: 'genderanalysis.component.html'
})
export class GenderanalysisComponent implements OnInit
{
	genderanalticsmodel: Genderanalticsmodel;
	year_Data:any;
	gender_Data:any;
	analysisinfo_Data:any;
	successMsgData:any[]=[];
	
	constructor(private statisticsService: StatisticsService, private router: Router)
	{
		this.genderanalticsmodel = new Genderanalticsmodel();
	    this.year_Data=[{"id":"2011"},{"id":"2012"},{"id":"2013"},{"id":"2010"}];
	    this.gender_Data=[{"genderId":"male","genderName":"Male"},{"genderId":"female","genderName":"Female"}];
		this.analysisinfo_Data=[];
	}
	ngOnInit()
	{
	}
	
	onClick_getData(eventData:any)
	{ 
		if(this.genderanalticsmodel.gender ==  'male') {
			let response: any;
			this.statisticsService.male(this.genderanalticsmodel.year).subscribe(
			(res: any) =>
			{
				response = res;
			},
			(error: any) => 
			{
			},
			() => 
			{
				this.getDataBindResponse_Ylb(response);
			});
		}else {
			let response: any;
			this.statisticsService.female(this.genderanalticsmodel.year).subscribe(
			(res: any) =>
			{
				response = res;
			},
			(error: any) => 
			{
			},
			() => 
			{
				this.getDataBindResponse_pft(response);
			});
		}
		
	}
	private getDataBindResponse_Ylb(response: any)
	{
		this.analysisinfo_Data=response.response;
	}
	private getDataBindResponse_pft(response: any)
	{
		this.analysisinfo_Data=response.response;
	} 
}

