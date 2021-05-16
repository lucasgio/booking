import { useEffect, useState } from "react";
import { getCitysApi } from "../api/getCitysApi";
import {ItemDataType, FormType, TypeCitySuggestion } from "../interface/TypeCitySuggestion";



export const useGetSuggestion = () => {

    const [fromCity, setFromCity] = useState<ItemDataType[]>([]);
    const [toCity, setToCity] = useState<ItemDataType[]>([]);

    const [form, setForm] = useState<FormType>({
        from:"Madrid",
        to:"Barcelona",
    })
    const {from,to} = form;



    useEffect(() => {
        getCitysApi.get<TypeCitySuggestion>(`/locations?term=${from}&location_types=airport`)
                   .then( resp =>{
                    setFromCity([{
                          id:resp.data.locations[0].city.id,
                          label:resp.data.locations[0].city.name 
                      }]);
                   })
                   .catch(console.log); 
    }, [ from ]);

    useEffect(() => {
        getCitysApi.get<TypeCitySuggestion>(`/locations?term=${to}&location_types=airport`)
                   .then( resp =>{
                    setToCity([{
                          id:resp.data.locations[0].city.id,
                          label:resp.data.locations[0].city.name 
                      }]);
                   })
                   .catch(console.log); 
    }, [ to ]);
    

    return {
       fromCity,
       toCity,
       form, 
       setForm,
    };
}
