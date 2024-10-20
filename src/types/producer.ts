export interface Producer {
    id: string;
    name: string;
    pretext: string;
    description: string;
}

export interface Producers {
    producers: Producer[]; 
}