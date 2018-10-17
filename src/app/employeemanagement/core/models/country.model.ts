/**
 * 
 * Date: 16/10/2018	
 */
export class Country
{
	
	countryName: string;
	id: string;
	countryCode1: string;
	currencyName: string;
	
	constructor() { 
	}
	
	set setCountryName(value: string) {
		this.countryName = value;
	}
	get getCountryName() : string {
		return this.countryName;
	}
	set setId(value: string) {
		this.id = value;
	}
	get getId() : string {
		return this.id;
	}
	set setCountryCode1(value: string) {
		this.countryCode1 = value;
	}
	get getCountryCode1() : string {
		return this.countryCode1;
	}
	set setCurrencyName(value: string) {
		this.currencyName = value;
	}
	get getCurrencyName() : string {
		return this.currencyName;
	}
	
}
