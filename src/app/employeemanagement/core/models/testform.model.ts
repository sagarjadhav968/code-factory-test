/**
 * 
 * Date: 17/10/2018	
 */
export class Testform
{
	
	year: string;
	gender: string;
	
	constructor() { 
	}
	
	set setYear(value: string) {
		this.year = value;
	}
	get getYear() : string {
		return this.year;
	}
	set setGender(value: string) {
		this.gender = value;
	}
	get getGender() : string {
		return this.gender;
	}
	
}
