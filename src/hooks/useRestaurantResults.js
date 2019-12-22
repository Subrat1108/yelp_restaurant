import {useState,useEffect} from 'react'
import Yelp from "../api/yelp";

export  default ()=>{

    const [restaurants,setRestaurants] = useState([]);
    const [errorMessage,setErrorMessage]= useState('');

    const searchApi = async (searchWord)=>{
        try{
            let result=await Yelp.get('/search',{
                params:{
                    limit:50,
                    term:searchWord,
                    location:'san jose'
                }
            });
            setRestaurants(result.data.businesses);
        }catch (e) {
            setErrorMessage('Something went wrong')
        }
    }
    useEffect(()=>{
        searchApi('pasta');
    },[]);

    return [searchApi,restaurants,errorMessage];
}
