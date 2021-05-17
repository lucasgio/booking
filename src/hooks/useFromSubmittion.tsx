import { useState } from "react";
import { FormType } from "../interface/TypeCitySuggestion";





export const useFromSubmittion = () => { 
    
    const [data, setData] = useState<FormType>({
        from:"",
        to:"",
        dateFrom:new Date(),
        dateTo:new Date(),
    })
    
    const { from,to,dateFrom,dateTo } = data;
    const departure = dateFrom?.toLocaleDateString();    
    const back    = dateTo?.toLocaleDateString();
    
    


    
    



    return {data,setData,from,to,departure,back}


}
