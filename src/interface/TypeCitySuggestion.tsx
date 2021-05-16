export interface TypeCitySuggestion {
    locations:         City[];
}

export interface City {
    city:City;
}

export interface City {
    id:                   string;
    name:                 string;
}


export type ItemDataType = {
    id:string;
    label: string; 
};

export type FormType = {
    from?:string;
    to?:string;
    dateFrom?:Date;
    dateTo?:Date;
}; 


