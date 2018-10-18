/**
 * 
 * Date: 16/10/2018	
 */
import { State } from './state.model';
export class Statebean
{
	
	success: boolean;
	message: string;
	response: State[]; 
	
	constructor() { 
		this.response = []; 
	}
	
	set setSuccess(value: boolean) {
		this.success = value;
	}
	get getSuccess() : boolean {
		return this.success;
	}
	set setMessage(value: string) {
		this.message = value;
	}
	get getMessage() : string {
		return this.message;
	}
	
}
