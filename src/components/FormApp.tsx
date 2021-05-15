import { useState } from "react";
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
import { useGetSuggestion } from "../hooks/useGetSuggestion";
import { FormType } from "../interface/GetCityType";

const FormApp = () => {

  const [data, setData] = useState<FormType>({

    from:"",
    to:"",
    dateFrom:new Date(),
    dateTo:new Date()

  })  
  
  const {dateFrom,dateTo} = data;
  
  
  const { fromCity, toCity, form, setForm } = useGetSuggestion();
  
  const handleSubmite = (e:any) => {
    e.preventDefault();  
    console.log(dateFrom,dateTo)  
  };



  return (

      <Container style={{ marginTop: "2rem" }}>
        <FlexboxGrid justify="center">
          <Form 
            layout="inline"
          >
            <FormGroup>
              <FormControl
                name="from"
                accepter={InputPicker}
                data={fromCity}
                onSearch={(searchKeyword: string)=>setForm({...form,from:searchKeyword})}
                style={{ width: 200 }}
              />
            </FormGroup>
            <FormGroup>
            <FormControl
                name="to"
                accepter={InputPicker}
                data={toCity}
                onSearch={(searchKeyword: string)=>setForm({...form,to:searchKeyword})}
                style={{ width: 200 }}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                name="fromDate"
                accepter={DatePicker}
                format={'DD-MM-YYYY'}
                placeholder={'Departure'}
                style={{ width: 200 }}
                onChangeCalendarDate={(dateFrom:Date)=>setData({dateFrom:dateFrom})}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                name="toDate"
                accepter={DatePicker}
                format={'DD-MM-YYYY'}
                placeholder={'Return'}
                style={{ width: 200 }}
                onChangeCalendarDate={(dateTo:Date)=>setData({dateTo:dateTo})}
              />
            </FormGroup>
            <Button color={'green'} onClick={handleSubmite}>Search</Button>
          </Form>
        </FlexboxGrid>
      </Container>
  );
};

export default FormApp;
