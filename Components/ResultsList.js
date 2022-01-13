import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "./ResultsDetail";

const ResultsList=({title,navigation, results})=>{
    if(!results.length){
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title} >{title}</Text>
   
       <FlatList
    showsHorizontalScrollIndicator={false}
       horizontal
       data={results}
       keyExtractor={(result)=> result.id}
       renderItem={({item})=>{
           return(
<TouchableOpacity onPress={()=>{
    navigation.navigate("Results",{id:item.id})
}}>

<ResultDetail result={item}/>
</TouchableOpacity>

           ) 
       }}
       />
        </View>
    )
};
const styles=StyleSheet.create({
title:{
    fontSize:20,
    marginLeft:15,
    fontWeight: "bold",
    marginBottom:10
},
container:{
    marginBottom:10
}
});

export default withNavigation(ResultsList);