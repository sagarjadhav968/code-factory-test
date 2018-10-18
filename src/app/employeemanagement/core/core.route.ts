
import {Routes } from '@angular/router';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { TestComponent } from './components/test/test.component';
import { RegisteremployeeComponent } from './components/registeremployee/registeremployee.component';
import { GenderanalysisComponent } from './components/genderanalysis/genderanalysis.component';
import { TestformComponent } from './components/testform/testform.component';
import { DemoconditionComponent } from './components/democondition/democondition.component';
export const ROUTES: Routes = [
{
	    path: 'employee-list', component: EmployeelistComponent
},
{
	    path: 'test', component: TestComponent
},
{
	    path: 'register-employee', component: RegisteremployeeComponent
},
{
	    path: 'gender-analysis', component: GenderanalysisComponent
},
{
	    path: 'test-form', component: TestformComponent
},
{
	    path: 'democondition', component: DemoconditionComponent
},
];

