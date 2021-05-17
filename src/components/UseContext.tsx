import { createContext, useContext } from "react"


export type FlightType = {
  flight: {}
  setFlight:(f: {}) => void
}
export const FlightsContext = createContext<FlightType>({
flight: 'Hello World', // set a default value
setFlight: () => {},
})
export const useFlightContext = () => useContext(FlightsContext)