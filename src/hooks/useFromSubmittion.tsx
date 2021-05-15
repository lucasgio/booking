import { useState } from "react"
import { FormType } from "../interface/GetCityType"




export const useFromSubmittion = () => {

    const [data, setData] = useState<FormType>({

        from:"Barcelona",
        to:"Madrid",
        dateFrom: new Date(),
        dateTo:new Date(),
    
    })    
      
      
    const handlerSubmit = () => {
        console.log(data);
    }













    return {data,setData,handlerSubmit}


}
