export interface TypeResultFlights {
    data:                   Flights[];
}

export interface AirlinesList {
    filterName: string;
}

export interface AirportsList {
    filterName: AllStopoverAirport;
    name:       string;
}

export enum AllStopoverAirport {
    Ams = "AMS",
    Atl = "ATL",
    Bcn = "BCN",
    Cdg = "CDG",
    Cun = "CUN",
    Ewr = "EWR",
    Fra = "FRA",
    Ibz = "IBZ",
    Ist = "IST",
    Jfk = "JFK",
    Lhr = "LHR",
    Lis = "LIS",
    Mad = "MAD",
    Mde = "MDE",
    Mia = "MIA",
    Muc = "MUC",
    Pmi = "PMI",
    Sdq = "SDQ",
    Sju = "SJU",
    Svq = "SVQ",
    Vlc = "VLC",
    Zrh = "ZRH",
}



export interface Flights {
    id:                            string;
    flyFrom:                       AllStopoverAirport;
    flyTo:                         AllStopoverAirport;
    cityFrom:                      City;
    cityCodeFrom:                  AllStopoverAirport;
    cityTo:                        City;
    cityCodeTo:                    AllStopoverAirport;
    countryFrom:                   Country;
    countryTo:                     Country;
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
    conversion:                    Conversion;
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

export interface Availability {
    seats: number | null;
}

export interface Baglimit {
    hand_height?:         number;
    hand_length?:         number;
    hand_weight?:         number;
    hand_width?:          number;
    hold_dimensions_sum?: number;
    hold_height?:         number;
    hold_length?:         number;
    hold_weight?:         number;
    hold_width?:          number;
}

export interface BagsPrice {
    hand?: number;
    "1"?:  number;
    "2"?:  number;
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

export interface Conversion {
    EUR: number;
}

export interface Country {
    code: Code;
    name: Name;
}

export enum Code {
    Es = "ES",
    Us = "US",
}

export enum Name {
    Spain = "Spain",
    UnitedStates = "United States",
}

export interface DiscountData {
    original_price: number;
}

export interface Duration {
    departure: number;
    return:    number;
    total:     number;
}

export interface ExcludedSegment {
    aTime:               number;
    aTimeUTC:            number;
    combination_id:      CombinationID;
    dTime:               number;
    dTimeUTC:            number;
    flyFrom:             AllStopoverAirport;
    flight_no:           number;
    id:                  ID;
    airline:             Airline;
    operating_carrier:   OperatingCarrier;
    operating_flight_no: string;
    reason:              Reason;
    flyTo:               FlyTo;
    vehicle_type:        VehicleType;
}

export enum CombinationID {
    The01Af0F6B49574970C9C79D2D = "01af0f6b49574970c9c79d2d",
    The076716D0495400001Fc7696F = "076716d0495400001fc7696f",
    The0E210F6B495649B076Bb3511 = "0e210f6b495649b076bb3511",
    The0F6B04884953000001560DAC = "0f6b04884953000001560dac",
    The0F6B0F3549530000080E7F57 = "0f6b0f3549530000080e7f57",
    The0F6B1527495300005222027D = "0f6b1527495300005222027d",
    The152701Af4956495F5069302F = "152701af4956495f5069302f",
    The152703Ab49560000Dd8Bdb81 = "152703ab49560000dd8bdb81",
    The15270F6B4956495F8Cfb9A4C = "15270f6b4956495f8cfb9a4c",
    The15271786495600004859Bc67 = "15271786495600004859bc67",
}

export enum FlyTo {
    Ams = "AMS",
    Ath = "ATH",
    Bcn = "BCN",
    Bna = "BNA",
    Bos = "BOS",
    Haj = "HAJ",
    Ibz = "IBZ",
    Lhr = "LHR",
    Mad = "MAD",
    Sdq = "SDQ",
    Vlc = "VLC",
}

export enum ID {
    The01Af0F6B49574970C9C79D2D1 = "01af0f6b49574970c9c79d2d_1",
    The076716D0495400001Fc7696F1 = "076716d0495400001fc7696f_1",
    The0E210F6B495649B076Bb35111 = "0e210f6b495649b076bb3511_1",
    The0F6B04884953000001560DAC1 = "0f6b04884953000001560dac_1",
    The0F6B0F3549530000080E7F572 = "0f6b0f3549530000080e7f57_2",
    The0F6B1527495300005222027D2 = "0f6b1527495300005222027d_2",
    The152701Af4956495F5069302F2 = "152701af4956495f5069302f_2",
    The152701Af4956495F5069302F3 = "152701af4956495f5069302f_3",
    The152703Ab49560000Dd8Bdb811 = "152703ab49560000dd8bdb81_1",
    The15270F6B4956495F8Cfb9A4C2 = "15270f6b4956495f8cfb9a4c_2",
    The15270F6B4956495F8Cfb9A4C3 = "15270f6b4956495f8cfb9a4c_3",
    The15270F6B4956495F8Cfb9A4C4 = "15270f6b4956495f8cfb9a4c_4",
    The15271786495600004859Bc671 = "15271786495600004859bc67_1",
}

export enum OperatingCarrier {
    Aa = "AA",
    Ba = "BA",
    Ib = "IB",
    Kl = "KL",
    The2D = "2D",
    Tk = "TK",
    Ua = "UA",
    Wa = "WA",
    Yw = "YW",
    Yx = "YX",
}

export enum Reason {
    HiddenCity = "hidden_city",
    ThrowAwayTicketing = "throw_away_ticketing",
}

export enum VehicleType {
    Aircraft = "aircraft",
}

export enum MapID {
    AmsterdamNl = "amsterdam_nl",
    AtlantaGaUs = "atlanta_ga_us",
    BarcelonaEs = "barcelona_es",
    CancunMX = "cancun_mx",
    FrankfurtDe = "frankfurt_de",
    IbizaEs = "ibiza_es",
    IstanbulTr = "istanbul_tr",
    LisbonPt = "lisbon_pt",
    MadridEs = "madrid_es",
    MedellinCo = "medellin_co",
    MiamiFLUs = "miami_fl_us",
    MunichDe = "munich_de",
    NewYorkCityNyUs = "new-york-city_ny_us",
    PalmaEs = "palma_es",
    ParisFr = "paris_fr",
    SANJuanPRPR = "san-juan_pr_pr",
    SantoDomingoDo = "santo-domingo_do",
    SevilleEs = "seville_es",
    ValenciaEs = "valencia_es",
    ZurichCh = "zurich_ch",
}

export interface Route {
    id:                        string;
    combination_id:            string;
    flyFrom:                   AllStopoverAirport;
    flyTo:                     AllStopoverAirport;
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
    mapIdfrom:                 MapID;
    mapIdto:                   MapID;
    bags_recheck_required:     boolean;
    guarantee:                 boolean;
    last_seen:                 number;
    refresh_timestamp:         number;
    equipment:                 null;
    vehicle_type:              VehicleType;
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
