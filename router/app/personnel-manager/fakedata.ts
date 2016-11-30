import { Person } from './model';

export const PERSONNEL: Person[] = [
    { 
        id: 151, 
        name: 'Alan B. Shepard, Jr.', 
        job: 'Astronaut', 
        year_joined: 1959,
        missions: ['MR-3', 'Apollo 14'],
        crewWith: [
            {
                id: 175,
                name: 'Stuart Roosa'
            },
            {
                id: 176,
                name: 'Edgar Mitchell'
            }
        ]
    },
    { 
        id: 152, 
        name: 'Virgil I. Grissom', 
        job: 'Astronaut', 
        year_joined: 1959,
        missions: ['MR-4', 'Apollo 1']
    },
    { 
        id: 153, 
        name: 'John H. Glenn, Jr.', 
        job: 'Astronaut', 
        year_joined: 1959,
        missions: ['MA-6','STS-95']
    },
    { 
        id: 154, 
        name: 'M. Scott Carpenter', 
        job: 'Astronaut', 
        year_joined: 1959,
        missions: ['MA-7']
    },
    { 
        id: 161, 
        name: 'James A. Lovell', 
        job: 'Astronaut', 
        year_joined: 1962,
        missions: ['Gemini 7', 'Gemini 12', 'Apollo 8', 'Apollo 13'], 
        manager: {
            id: 157,
            name: 'Deke Slayton'
        }
    }
];