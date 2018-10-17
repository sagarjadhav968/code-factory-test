import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
 sideNavMenu: any; 	
constructor(private _router : Router) {    
 this.sideNavMenu = [{"text":"Management","expand":false,"id":null,"leaf":false,"icon":"fa fa-users","routerLink":null,"children":[{"text":"Employee List","expand":false,"id":"6a4570e7-78b0-4836-a741-4d94f44c81a7","leaf":true,"icon":"fa fa-users","routerLink":"employeemanagement/core/employee-list","children":null},{"text":"Register Employee","expand":false,"id":"71efa120-4c0a-4f13-997f-7a9155892fb2","leaf":true,"icon":"fa fa-user-plus","routerLink":"employeemanagement/core/register-employee","children":null}]},{"text":"Analytics","expand":false,"id":null,"leaf":false,"icon":"fa fa-image","routerLink":null,"children":[{"text":"Gender Analysis","expand":false,"id":"f5f7f316-0e14-4713-88f2-36da461bad43","leaf":true,"icon":"fa fa-male","routerLink":"employeemanagement/core/gender-analysis","children":null},{"text":"Test Form","expand":false,"id":"29252295-248f-4fd4-9592-91a885106e06","leaf":true,"icon":"fa fa-file-text-o","routerLink":"employeemanagement/core/test-form","children":null},{"text":"Condition Demo","expand":false,"id":"7c805992-65d0-4815-b094-01c447569e3d","leaf":true,"icon":"fa fa-spotify","routerLink":"employeemanagement/core/democondition","children":null}]}]; }
sideNavClick(data: any) {
   if( data.children==null && data.routerLink) {
     this._router.navigate([data.routerLink]);
    }
  }
}
