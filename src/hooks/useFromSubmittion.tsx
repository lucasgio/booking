import { useState } from "react";
import { getResultFlights } from "../api/getCitysApi";
import { useFlightContext } from "../components/UseContext";
import { FormType } from "../interface/TypeCitySuggestion";
import { TypeResultFlights } from "../interface/TypeResultsFlights";





export const useFromSubmittion = () => {
    const [data, setData] = useState<FormType>({

        from:"Barcelona",
        to:"Madrid",
        dateFrom: new Date(),
        dateTo:new Date(),
    
    })    
    const {setFlight} = useFlightContext();
    const { from,to,dateFrom,dateTo } = data;
    const departure = dateFrom?.toLocaleDateString();    
    const back    = dateTo?.toLocaleDateString();
    

    

    const handlerSubmit = () => {
        
        getResultFlights.get<TypeResultFlights  >(`/flights?v=3&partner=skypicker&locale=en&flyFrom=${from}&to=${to}&dateFrom=${departure}&dateTo=${departure}&typeFlight=return&returnFrom=${back}&returnTo=${back}&limit=5`)
        .then( resp =>{
            setFlight([...resp.data.data]);
        })
        .catch(console.log); 
    }


    
  

  










    return {data,setData,handlerSubmit}


}
