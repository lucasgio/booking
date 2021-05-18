import React from "react";
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
import { useFromSubmittion } from "../hooks/useFromSubmittion";
import { useGetSuggestion } from "../hooks/useGetSuggestion";

const FormApp = () => {
  const formRef = React.useRef();
  const { fromCity, toCity, form, setForm } = useGetSuggestion();
  const { data,setData,handlerSubmit } = useFromSubmittion();


  return (

      <Container style={{ marginTop: "2rem" }}>
        <FlexboxGrid justify="center">
          <Form 
            ref={formRef}
            onChange={setData}
            layout="inline"
            formValue={data}
          >
            <FormGroup>
              <FormControl 
                name="from"
                accepter={InputPicker}
                placeholder ="From"
                labelKey="label"
                valueKey="id"
                data={fromCity}
                onSearch={(value:string)=>setForm({...form,from:value})}
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
                onSearch={(value: string)=>setForm({...form,to:value})}
                style={{ width: 200 }}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                name="dateFrom"
                accepter={DatePicker}
                format={'DD/MM/YYYY'}
                placeholder={'Departure'}
                style={{ width: 200 }}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                name="dateTo"
                accepter={DatePicker}
                format={'DD/MM/YYYY'}
                placeholder={'Return'}
                style={{ width: 200 }}
              />
            </FormGroup>
            <Button color={'green'} onClick={handlerSubmit}>Search</Button>
          </Form>
        </FlexboxGrid>
      </Container>
  );
};

export default FormApp;
