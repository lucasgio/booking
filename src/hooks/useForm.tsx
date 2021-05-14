import { useState } from "react";
import { useGetFromCity } from "./useGetFromCity";
import { useGetToCity } from "./useGetToCity";



export type FormType = {
    from?:string;
    to?:string;
    dateFrom?:string;
    dateTo?:string;
  } 


export const useForm = () => {

  const [form, setForm] = useState<FormType>({
    from:"Cuba",
    to:"Barcelona",
  })

  const {from,to} = form;


  const getValueFrom = ({target}:any)=>{

    setForm({
      ...form,
      from:target.value,
    })
      
  }

  const getValueTo = ({target}:any)=>{

    setForm({
      ...form,
      to:target.value,
    })
      
  }
  
  const fromCity = useGetFromCity(from); 
  const toCity   = useGetToCity(to);
 

  return {
    from,
    to,
    fromCity,
    toCity,
    getValueFrom,
    getValueTo
  }
    
}
