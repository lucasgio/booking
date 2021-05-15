import React from "react";
import { Button, DatePicker, FlexboxGrid, Form, InputPicker } from "rsuite";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
// import { useFromSubmittion } from "../hooks/useFromSubmittion";
import { useGetSuggestion } from "../hooks/useGetSuggestion";




const FormApp = () => {
  

  const { fromCity,toCity,form,setForm } = useGetSuggestion();




  return (
      <Form >
        <FlexboxGrid justify={'center'}>
          <FlexboxGridItem className="selectStyle"> 
              <InputPicker
                data={fromCity}
                onSearch={(searchKeyword: string)=>setForm({...form,from:searchKeyword})}
               
              />
          </FlexboxGridItem>
          <FlexboxGridItem className="selectStyle"> 
              <InputPicker
                data      ={toCity}
                onSearch={(searchKeyword: string)=>setForm({...form,to:searchKeyword})}
           
              />
          </FlexboxGridItem>
          <FlexboxGridItem className="selectStyle">
              <DatePicker
                style={{ width: 280 }} 
                format={'DD-MM-YYYY'}
                placeholder={'Departure'}
                limitEndYear={1}
                showWeekNumbers={true}
         
              />
          </FlexboxGridItem>
          <FlexboxGridItem className="selectStyle">
              <DatePicker
                style={{ width: 280 }} 
                format={'DD-MM-YYYY'}
                placeholder={'Return'}
                limitEndYear={1}
              
              />
          </FlexboxGridItem>
          <Button
            color={'green'}

          >
            Search
          </Button>
        </FlexboxGrid>
      </Form>
  );
};

export default FormApp;