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