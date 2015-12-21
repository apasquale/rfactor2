namespace app.domain {
	export interface ISession {
		Id: number;
		car: string;
		track: string;
        laptimes: ILapTime[];
	}
	
	export class Session implements ISession {
		constructor ( 
			public Id: number,
			public car: string,
			public track: string,
            public laptimes: ILapTime[]) {			
		}
	}
}