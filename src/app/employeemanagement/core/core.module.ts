import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioMapModule} from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { TestComponent } from './components/test/test.component';
import { RegisteremployeeComponent } from './components/registeremployee/registeremployee.component';
import { GenderanalysisComponent } from './components/genderanalysis/genderanalysis.component';
import { TestformComponent } from './components/testform/testform.component';
import { DemoconditionComponent } from './components/democondition/democondition.component';
import { EmployeeService } from './services/employee.service';
import { DepartmentService } from './services/department.service';
import { CountryService } from './services/country.service';
import { StateService } from './services/state.service';
import { StatisticsService } from './services/statistics.service';
import { ROUTES } from './core.route';

@NgModule({
	  imports: [
	    CommonModule, FormsModule,
	    HttpClientModule,
	    RouterModule.forChild(ROUTES),
	    AmexioWidgetModule,
	    AmexioChartsModule,
	    AmexioDashBoardModule,
	    AmexioMapModule	
	  ],
	  exports: [RouterModule],
	  declarations: [
	    EmployeelistComponent,
	    TestComponent,
	    RegisteremployeeComponent,
	    GenderanalysisComponent,
	    TestformComponent,
	    DemoconditionComponent,
	  ],
	  providers: [
	    EmployeeService,
	    DepartmentService,
	    CountryService,
	    StateService,
	    StatisticsService,
	  ]
})
export class CoreModule {
}
