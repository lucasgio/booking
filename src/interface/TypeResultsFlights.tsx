export interface TypeResultFlights {
    data:                   Flights[];
}


export interface Flights {
    id:                            string;
    cityFrom:                      string;
    cityTo:                        string;
    countryFrom:                   string;
    countryTo:                     string;
    dTime:                         number;
    dTimeUTC:                      number;
    aTime:                         number;
    aTimeUTC:                      number;
    nightsInDest:                  number;
    quality:                       number;
    distance:                      number;
    fly_duration:                  string;
    return_duration:               string;
    price:                         number;
}

