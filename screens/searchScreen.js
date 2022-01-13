import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import yelp from "../api/yelp";
import ResultsList from "../Components/ResultsList";
import SearchBar from "../Components/searchBar";
import useResults from "../hooks/useResults";

const searchScreen=()=>{
    const [term,setTerm]=useState("")
   const [searchApi, results,error]=useResults();
    console.log(results);
   const filterResults=(price)=>{
       return results.filter(result=>{
           return result.price === price
       })

   }
   
   
   return(
        <View style={{flex:1}}>
        <SearchBar term={term}

        onTermSubmitted={
            ()=> searchApi(term)
        }
         onTermChange={
             (newterm)=> setTerm(newterm)
         }/>
      {error? <Text>{error}</Text>: null}
   
    <ScrollView>
    <ResultsList    results={filterResults('$')} title="Cost Effective"/>
       <ResultsList results={filterResults('$$')} title="Bit Pricier"/>
       <ResultsList results={filterResults('$$$')} title="Big Spender!"/>
    </ScrollView>
    
      { results? <Text style={styles.subtext}>We have found {results.length} results</Text>: null}

        </View>
    )
};

const styles= StyleSheet.create({
subtext:{
    marginLeft:15,
    fontSize:15
}
});

export default searchScreen;