/**
 * Created by: Ketan Gote
 * Date: 16/10/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component(
{
	selector: 'test',
	templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit
{
	
	constructor( private router: Router)
	{
	}
	ngOnInit()
	{
	}
	
}

