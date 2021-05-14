import React from "react";
import { FlexboxGrid, Form, InputPicker } from "rsuite";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
import { useForm } from "../hooks/useForm";



const FormApp = () => {
  const {from,fromCity,toCity,getValueFrom,getValueTo} = useForm();


  return (
      <Form>
        <FlexboxGrid>
          <FlexboxGridItem colspan={6}> 
              <InputPicker
                data={fromCity}
                valueKey={from}
                onSearch={(searchKeyword: string, event: React.SyntheticEvent<any, Event>)=>getValueFrom(event)}
              />
          </FlexboxGridItem>
          <FlexboxGridItem colspan={6}> 
              <InputPicker
                data={toCity}
                onSearch={(searchKeyword: string, event: React.SyntheticEvent<any, Event>)=>getValueTo(event)}
              />
          </FlexboxGridItem>
        </FlexboxGrid>
      </Form>
  );
};

export default FormApp;