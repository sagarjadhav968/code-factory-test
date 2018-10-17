/**
 * 
 * Date: 16/10/2018	
 */
import { Stateinfo } from './stateinfo.model';
export class Stateradiobean
{
	
	success: string;
	message: string;
	response: Stateinfo[]; 
	
	constructor() { 
		this.response = []; 
	}
	
	set setSuccess(value: string) {
		this.success = value;
	}
	get getSuccess() : string {
		return this.success;
	}
	set setMessage(value: string) {
		this.message = value;
	}
	get getMessage() : string {
		return this.message;
	}
	
}
