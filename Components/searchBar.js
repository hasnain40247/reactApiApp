import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {Feather} from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";

const SearchBar=({term, onTermChange,  onTermSubmitted})=>{
    return(
        <View style={styles.background}>
        <Feather name="search"
        style={styles.iconStyle}
        />
      <TextInput style={styles.inputStyle}
      value={term}
      onEndEditing={()=>  onTermSubmitted()}
      placeholder="Search"
      autoCapitalize="none"
      
        autoCorrect={false}
      onChangeText={newTerm=> onTermChange(newTerm)}
      />
        </View>
    )
};

const styles= StyleSheet.create({
background:{
    backgroundColor:'#ECECEC',
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:"row",
    marginBottom:10,
    marginTop:10



},
inputStyle:{
    fontSize:18,

    flex:1
},
iconStyle:{
    color:"#7d838e",
    fontSize:30,
    alignSelf:"center",
    marginHorizontal:15
}
});

export default SearchBar;