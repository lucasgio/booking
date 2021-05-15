export interface GetCityAPIType {
    locations:         City[];
}

export interface City {
    city:City;
}

export interface City {
    id:                   string;
    name:                 string;
}


export type DataItemType = {
    id:string;
    label: string; 
};

export type FormType = {
    from?:string;
    to?:string;
    dateFrom?:Date;
    dateTo?:Date;
}; 


