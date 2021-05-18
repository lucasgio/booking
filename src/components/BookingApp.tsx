import React, { useState } from 'react';
import { Container,Panel} from 'rsuite';

import FormApp from './FormApp';
import ResultApp from './ResultApp';


import '../css/style.css';

const BookingApp = () => {


  const [show, setShow] = useState(false);

  return (
    <>
      <Container className="show-container">
          <h2 className="title">Booking your preferred flight</h2>
          <Panel className="card" shaded>
              <FormApp/>
          </Panel>   
      </Container>

      <Container>
          {
            (!show)? <h6 className="info">No hay elementos :( </h6> : <ResultApp/>
          }
      </Container>
    </>
  )
};


export default BookingApp;