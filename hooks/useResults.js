import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import yelp from "../api/yelp";

export default ()=>{
    const [results,setResults]=useState([])
    const [error,setError]=useState("")
    const searchApi= async (searchterm)=>{
     try{  const response= await yelp.get("/search",{
           params:{
               limit: 50,
               term: searchterm,
               location: 'san jose'

           }
       })
       ;

       setResults(response.data.businesses);}
       catch(err){
setError(`${err}`)
       }

    };


useEffect(()=>{
searchApi('burger')
},[]);

return [searchApi,results,error];
};