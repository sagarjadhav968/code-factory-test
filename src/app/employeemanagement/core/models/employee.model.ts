/**
 * 
 * Date: 16/10/2018	
 */
export class Employee
{
	
	id: string;
	firstName: string;
	lastName: string;
	genderId: string;
	age: number;
	phone: string;
	email: string;
	departmentId: string;
	countryId: string;
	stateId: string;
	countryName: string;
	stateName: string;
	gender: string;
	deptName: string;
	
	constructor() { 
	}
	
	set setId(value: string) {
		this.id = value;
	}
	get getId() : string {
		return this.id;
	}
	set setFirstName(value: string) {
		this.firstName = value;
	}
	get getFirstName() : string {
		return this.firstName;
	}
	set setLastName(value: string) {
		this.lastName = value;
	}
	get getLastName() : string {
		return this.lastName;
	}
	set setGenderId(value: string) {
		this.genderId = value;
	}
	get getGenderId() : string {
		return this.genderId;
	}
	set setAge(value: number) {
		this.age = value;
	}
	get getAge() : number {
		return this.age;
	}
	set setPhone(value: string) {
		this.phone = value;
	}
	get getPhone() : string {
		return this.phone;
	}
	set setEmail(value: string) {
		this.email = value;
	}
	get getEmail() : string {
		return this.email;
	}
	set setDepartmentId(value: string) {
		this.departmentId = value;
	}
	get getDepartmentId() : string {
		return this.departmentId;
	}
	set setCountryId(value: string) {
		this.countryId = value;
	}
	get getCountryId() : string {
		return this.countryId;
	}
	set setStateId(value: string) {
		this.stateId = value;
	}
	get getStateId() : string {
		return this.stateId;
	}
	set setCountryName(value: string) {
		this.countryName = value;
	}
	get getCountryName() : string {
		return this.countryName;
	}
	set setStateName(value: string) {
		this.stateName = value;
	}
	get getStateName() : string {
		return this.stateName;
	}
	set setGender(value: string) {
		this.gender = value;
	}
	get getGender() : string {
		return this.gender;
	}
	set setDeptName(value: string) {
		this.deptName = value;
	}
	get getDeptName() : string {
		return this.deptName;
	}
	
}
