import React from "react";
import { Form } from "rsuite";
import Button from "rsuite/lib/Button";
import DatePicker from "rsuite/lib/DatePicker";
import Icon from "rsuite/lib/Icon";
import SelectPicker from "rsuite/lib/SelectPicker";

export const FormApp = () => {
  const data = [
    {
      label: "Eugenia",
      value: "Eugenia",
      role: "Master",
    },
    {
      label: "Kariane",
      value: "Kariane",
      role: "Master",
    },
  ];

  const formSubmit = () => {

    console.log('hola');

  }


  return (
    <React.Fragment>
    <Form className="form_booking" onSubmit={()=> formSubmit()}>
      <SelectPicker
        className="selectStyle"
        placeholder="From"
        data={data}
        defaultValue={"Origin City"}
        style={{ width: 224 }}
      />
      <SelectPicker
        className="selectStyle"
        placeholder="To"
        data={data}
        defaultValue={"Origin City"}
        style={{ width: 224 }}
      />
      <DatePicker
        className="selectStyle"
        placeholder="Departure"
        format="DD-MM-YYYY"
        oneTap
        style={{ width: 280 }}
      />
      <DatePicker
        className="selectStyle"
        placeholder="Return"
        format="DD-MM-YYYY"
        oneTap
        style={{ width: 280 }}
      />
      <Button color="green" onClick={()=>formSubmit()}>
      <Icon icon="search"  /> Search
      </Button>      
    </Form>  
    </React.Fragment>
  );
};
