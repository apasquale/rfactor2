namespace app.domain {
	export interface ILapTime {
		session_id: number;
		lap_time: number;
		date_time: Date;
		split1: number;
		user_id: string;
		split2: number;
        fastest: boolean;
	}
	
	export class LapTime implements ILapTime {
		constructor ( 
			public session_id: number,
			public lap_time: number,
			public date_time: Date,
			public split1: number,
			public user_id: string,
			public split2: number,
            public fastest: boolean
            ) {			
		}
	}
}