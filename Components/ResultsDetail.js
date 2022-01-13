import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ResultDetail=({result})=>{
    return(
        <View style={styles.container}>
       <Image style={styles.image} source={{uri: result.image_url}} />
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.subtitle}>{result.rating} Stars, {result.review_count} Reviews</Text>

        </View>
    )
};
const styles=StyleSheet.create({
    container:{
      marginLeft:15  
    },
title:{
    fontSize:16,
    fontWeight:"bold"
},
subtitle:{
    fontSize:16,
  
},
image:{
    width:250,
    height:120,
    borderRadius:4,
    marginBottom:10
}
});

export default ResultDetail;