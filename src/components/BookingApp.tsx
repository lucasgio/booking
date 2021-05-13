import React from 'react';
import { Container,Panel} from 'rsuite';

import '../css/style.css';
import { FormApp } from './FormApp';
import { ResultApp } from './ResultApp';

export const BookingApp = () => {
  return (
    <>
      <Container className="show-container">
          <h2 className="title">Booking your preferred flight</h2>
          <Panel className="card" shaded>
              <FormApp/>
          </Panel>   
      </Container>

      <Container>
          <ResultApp/>
      </Container>
    </>
  )
};
