import { Container, Panel } from "rsuite";

import FormApp from "./FormApp";

import { FlightsContext } from "./UseContext";
import { useState } from "react";

import "../css/style.css";



const BookingApp = () => {

  const [flight,setFlight] = useState({});
  return (
    <>

      <FlightsContext.Provider value={{flight,setFlight}}>
      <Container className="show-container">
        <h2 className="title">Booking your preferred flight</h2>
        <Panel className="card" shaded>
          <FormApp />
        </Panel>
      </Container>

      </FlightsContext.Provider>
    </>
  );
};

export default BookingApp;
