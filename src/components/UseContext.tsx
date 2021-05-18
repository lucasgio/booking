import { createContext, useContext } from "react";


export type FlightType = {
  flight: any
  setFlight:(f: any) => void
}
export const FlightsContext = createContext<FlightType>({
flight:"", // set a default value
setFlight: () => {},
})
export const useFlightContext = () => useContext(FlightsContext);