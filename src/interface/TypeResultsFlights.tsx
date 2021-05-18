export interface TypeResultFlights {
    data:                   Flights[];              
}


export interface Flights {
    id:                            string;
    cityFrom:                      City;
    cityTo:                        City;
    dTime:                         number;
    dTimeUTC:                      number;
    aTime:                         number;
    aTimeUTC:                      number;
    nightsInDest:                  number;
    quality:                       number;
    distance:                      number;
    duration:                      Duration;
    fly_duration:                  string;
    return_duration:               string;
    price:                         number;
}

export enum Airline {
    A5 = "A5",
    AF = "AF",
    Aa = "AA",
    Ay = "AY",
    Cl = "CL",
    DL = "DL",
    Empty = "",
    F9 = "F9",
    Fr = "FR",
    I2 = "I2",
    Ib = "IB",
    Kl = "KL",
    Lh = "LH",
    Lx = "LX",
    NI = "NI",
    The2D = "2D",
    Tk = "TK",
    Tp = "TP",
    UX = "UX",
    Ua = "UA",
    Vh = "VH",
    Vs = "VS",
    Vy = "VY",
    Wa = "WA",
    Wi = "WI",
    Yw = "YW",
}



export enum City {
    Amsterdam = "Amsterdam",
    Atlanta = "Atlanta",
    Barcelona = "Barcelona",
    Cancún = "Cancún",
    Frankfurt = "Frankfurt",
    Ibiza = "Ibiza",
    Istanbul = "Istanbul",
    Lisbon = "Lisbon",
    Madrid = "Madrid",
    Medellín = "Medellín",
    Miami = "Miami",
    Munich = "Munich",
    NewYork = "New York",
    PalmaMajorca = "Palma, Majorca",
    Paris = "Paris",
    SANJuan = "San Juan",
    SantoDomingo = "Santo Domingo",
    Seville = "Seville",
    Valencia = "Valencia",
    Zürich = "Zürich",
}


export interface Duration {
    departure: number;
    return:    number;
    total:     number;
}

export interface Route {
    id:                        string;
    combination_id:            string;
    cityFrom:                  City;
    cityCodeFrom:              CityCode;
    cityTo:                    City;
    cityCodeTo:                CityCode;
    dTime:                     number;
    dTimeUTC:                  number;
    aTime:                     number;
    aTimeUTC:                  number;
    airline:                   Airline;
    flight_no:                 number;
    operating_carrier:         Airline;
    operating_flight_no:       string;
    fare_basis:                string;
    fare_category:             FareC;
    fare_classes:              FareC;
    fare_family:               string;
    return:                    number;
    latFrom:                   number;
    lngFrom:                   number;
    latTo:                     number;
    lngTo:                     number;
    bags_recheck_required:     boolean;
    guarantee:                 boolean;
    last_seen:                 number;
    refresh_timestamp:         number;
    equipment:                 null;

    original_return:           number;
    price:                     number;
    following_airport_change?: boolean;
}

export enum CityCode {
    Ams = "AMS",
    Atl = "ATL",
    Bcn = "BCN",
    Cun = "CUN",
    Fra = "FRA",
    Ibz = "IBZ",
    Ist = "IST",
    Lis = "LIS",
    Mad = "MAD",
    Mde = "MDE",
    Mia = "MIA",
    Muc = "MUC",
    Nyc = "NYC",
    Par = "PAR",
    Pmi = "PMI",
    Sdq = "SDQ",
    Sju = "SJU",
    Svq = "SVQ",
    Vlc = "VLC",
    Zrh = "ZRH",
}

export enum FareC {
    A = "A",
    B = "B",
    E = "E",
    Empty = "",
    G = "G",
    K = "K",
    L = "L",
    M = "M",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    R = "R",
    T = "T",
    U = "U",
    V = "V",
    W = "W",
    Z = "Z",
}


export interface Hashtag {
    count: number;
    name:  string;
}

export interface SearchParams {
    flyFrom_type: string;
    to_type:      string;
    seats:        Seats;
}

export interface Seats {
    passengers: number;
    adults:     number;
    children:   number;
    infants:    number;
}
