export class Project { 
    id: number;
    name: string;
    cost?: number;
    total_cost?: number;
    first_flight?: string;
    launch?: string;
    status: string;
}
export class Person {
    id: number;
    name: string;
    year_joined: number;
    job: string;
    missions: string[];
    crewWith?: { 
        id: number,
        name: string
    }[];
    manager?: any;
}