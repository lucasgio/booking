import FormApp from "./FormApp";
import { useState } from "react";
import { Container, Panel } from "rsuite";
import { FlightsContext } from "./UseContext";
import { Route } from "../interface/TypeResultsFlights";
import { PanelApp } from "./PanelApp";
import "../css/style.css";




const BookingApp = () => {
  const [flight, setFlight] = useState<Route[]>();

  return (
    <>
      <FlightsContext.Provider value={{ flight, setFlight }}>
        <Container className="show-container">
          <h2 className="title">Booking your preferred flight</h2>
          <Panel className="card" shaded>
            <FormApp />
          </Panel>
        </Container>

        <Container>
          {flight?.map((result) => {
            return <PanelApp key={result.id} {...result}/>
          })}
        </Container>
      </FlightsContext.Provider>
    </>
  );
};

export default BookingApp;
