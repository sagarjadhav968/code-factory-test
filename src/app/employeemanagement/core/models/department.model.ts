/**
 * 
 * Date: 16/10/2018	
 */
export class Department
{
	
	id: string;
	name: string;
	
	constructor() { 
	}
	
	set setId(value: string) {
		this.id = value;
	}
	get getId() : string {
		return this.id;
	}
	set setName(value: string) {
		this.name = value;
	}
	get getName() : string {
		return this.name;
	}
	
}
