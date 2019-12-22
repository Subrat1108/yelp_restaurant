import React, {useState} from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';

import {Feather} from "@expo/vector-icons";

function SearchBox({value,onTextChange,onTermSubmit}) {
    return(
        <View style={styles.container}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput
                placeholder='Search'
                value={value}
                style={styles.searchBoxStyle}
                onChangeText={newValue=>onTextChange(newValue)}
                autoCorrect={false}
                autoCapitalize='none'
                onEndEditing={()=>onTermSubmit()}
            />
        </View>
    )
};

let styles = StyleSheet.create({
    searchBoxStyle:{
        padding:5,
        flex:1,
        fontSize: 18
    },
    container:{
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:10,
        backgroundColor:'#f1eef0',
        borderRadius:5,
        height:50
    },
    iconStyle:{
        fontSize:30,
        alignSelf:'center'
    }
});

export default SearchBox;
