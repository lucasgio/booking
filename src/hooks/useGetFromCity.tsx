import { useEffect, useState } from "react";
import { getCitysApi } from "../api/getCitysApi";
import {GetCityAPIType } from "../interface/GetCityType";

export type DataItemType = {
    id:string;
    label: string; 
};


export const useGetFromCity = (props:any) => {
    const [city, setCity] = useState<DataItemType[]>([]);
 
    
    useEffect(() => {
        getCitysApi.get<GetCityAPIType>(`/locations?term=${props}&location_types=airport`)
                   .then( resp =>{
                      setCity([{
                          id:resp.data.locations[0].city.id,
                          label:resp.data.locations[0].city.name 
                      }]);
                   })
                   .catch(console.log); 
    }, [props]);
    

    return city;
}
