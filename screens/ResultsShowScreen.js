import React, { useEffect, useState } from "react";
import {ActivityIndicator,Image, FlatList, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen=({navigation})=>{
    const [result,setResult]=useState(null)
    const id=navigation.getParam('id')
    const getResult=async (id)=>{
const response=await yelp.get(`/${id}`)
setResult(response.data);
    }

    useEffect(()=>{
getResult(id)
    },[])

    if(!result){
        return  <View style={{
            justifyContent:"center",
            flex:1
        }}>
            <ActivityIndicator size="large" color="black" />
    </View>
    }

    return (
        <View style={{flex:1}}>
            <Text style={styles.text}>{result.name}</Text>
            <FlatList
            keyExtractor={(image)=>image}
            data={result.photos}
            renderItem={({item})=>{
                return <Image style={styles.images} source={{uri: item}}/>
            }}
            />
        </View>
    )
};

const styles=StyleSheet.create({
images:{
    height: 300,
    flex:1,
    marginHorizontal:8,
    marginVertical:5,
    borderRadius:9
},
text:{
    marginTop:10,
    fontSize:26,
    fontWeight:"bold",
    alignSelf:"center",
    marginBottom:13
}
});
export default ResultsShowScreen;