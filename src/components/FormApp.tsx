import React, { useState } from "react";

import {
  Button,
  Container,
  DatePicker,
  FlexboxGrid,
  Form,
  FormControl,
  FormGroup,
  InputPicker,
} from "rsuite";
import { getResultFlights } from "../api/getCitysApi";
import { useFromSubmittion } from "../hooks/useFromSubmittion";
import { useGetSuggestion } from "../hooks/useGetSuggestion";
import { TypeResultFlights } from "../interface/TypeResultsFlights";
import ResultApp from "./ResultApp";
import {useFlightContext} from '../components/UseContext';

const FormApp = () => {
  const formRef = React.useRef();
  const [result, setResult] = useState({}); 
  const { fromCity, toCity, form, setForm } = useGetSuggestion();
  const {data,setData,from,to,departure,back} = useFromSubmittion();
  const {setFlight} = useFlightContext()
 



  const formSubmit = () => {
    getResultFlights.get<TypeResultFlights>(`/flights?v=3&partner=skypicker&locale=en&flyFrom=${from}&to=${to}&dateFrom=${departure}&dateTo=${departure}&typeFlight=return&returnFrom=${back}&returnTo=${back}`)
    .then( resp =>{
      setResult(resp.data.data);
      setFlight(result);
    })
    .catch(console.log); 
    
  }



  return (
    <>
      <Container style={{ marginTop: "2rem" }}>
        <FlexboxGrid justify="center">
          <Form
            ref={formRef}
            onChange={setData}
            onSubmit={formSubmit}
            layout="inline"
            formValue={data}
          >
            <FormGroup>
              <FormControl
                name="from"
                accepter={InputPicker}
                placeholder="From"
                labelKey="label"
                valueKey="id"
                data={fromCity}
                onSearch={(value: string) => setForm({ ...form, from: value })}
                style={{ width: 200 }}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                name="to"
                accepter={InputPicker}
                data={toCity}
                placeholder="To"
                labelKey="label"
                valueKey="id"
                onSearch={(value: string) => setForm({ ...form, to: value })}
                style={{ width: 200 }}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                name="dateFrom"
                accepter={DatePicker}
                format={"DD/MM/YYYY"}
                placeholder={"Departure"}
                style={{ width: 200 }}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                name="dateTo"
                accepter={DatePicker}
                format={"DD/MM/YYYY"}
                placeholder={"Return"}
                style={{ width: 200 }}
              />
            </FormGroup>
            <Button color={"green"} type="submit">
              Search
            </Button>
          </Form>
        </FlexboxGrid>
      </Container>

      <Container>
        <ResultApp/>
      </Container>

    </>
  );
};

export default FormApp;
