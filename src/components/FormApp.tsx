import React from "react";
import { FlexboxGrid, Form, InputPicker } from "rsuite";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";
import { useGetSuggestion } from "../hooks/useGetSuggestion";




const FormApp = () => {
  

  const { fromCity,toCity,form,setForm } = useGetSuggestion();

  return (
      <Form>
        <FlexboxGrid>
          <FlexboxGridItem colspan={6}> 
              <InputPicker
                data={fromCity}
                onSearch={(searchKeyword: string)=>setForm({...form,from:searchKeyword})}
              />
          </FlexboxGridItem>
          <FlexboxGridItem colspan={6}> 
              <InputPicker
                data      ={toCity}
                onSearch={(searchKeyword: string)=>setForm({...form,to:searchKeyword})}
              />
          </FlexboxGridItem>
        </FlexboxGrid>
      </Form>
  );
};

export default FormApp;