import { useState } from "react"
import { getResultFlights } from "../api/getCitysApi";
import { FormType } from "../interface/TypeCitySuggestion"
import { TypeResultFlights } from "../interface/TypeResultsFlights";




export const useFromSubmittion = () => {
     const [result, setResult] = useState({});
    const [data, setData] = useState<FormType>({

        from:"Barcelona",
        to:"Madrid",
        dateFrom: new Date(),
        dateTo:new Date(),
    
    })    
     
    
    const { from,to,dateFrom,dateTo } = data;
    const departure = dateFrom?.toLocaleDateString();    
    const back    = dateTo?.toLocaleDateString();
    

    

    const handlerSubmit = () => {
        
        getResultFlights.get<TypeResultFlights>(`/flights?v=3&partner=skypicker&locale=en&flyFrom=${from}&to=${to}&dateFrom=${departure}&dateTo=${departure}&typeFlight=return&returnFrom=${back}&returnTo=${back}`)
        .then( resp =>{
            setResult(resp.data.data);
        })
        .catch(console.log); 
    }


    


  










    return {data,setData,handlerSubmit,result}


}
