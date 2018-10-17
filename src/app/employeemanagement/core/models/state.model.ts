/**
 * 
 * Date: 16/10/2018	
 */
export class State
{
	
	stateName: string;
	stateId: string;
	
	constructor() { 
	}
	
	set setStateName(value: string) {
		this.stateName = value;
	}
	get getStateName() : string {
		return this.stateName;
	}
	set setStateId(value: string) {
		this.stateId = value;
	}
	get getStateId() : string {
		return this.stateId;
	}
	
}
