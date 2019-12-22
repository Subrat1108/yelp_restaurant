import React from "react";
import {Text, View, StyleSheet,FlatList,TouchableOpacity} from "react-native"
import {withNavigation} from "react-navigation"

import RestaurantDetails from "./RestaurantDetails"

const RestaurantLists = ({title,filteredRestaurants,navigation})=>{
    if(!filteredRestaurants.length){
        return null;
    }
    return (
        <View style={styles.lists}>
            <Text style={{fontSize:18,fontWeight: 'bold', marginLeft:10, marginBottom:5}}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={filteredRestaurants}
                keyExtractor={(result)=>result.id}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('Restaurant',{
                            details:item
                        })}>
                            <RestaurantDetails data={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    lists:{
        marginBottom: 10
    }
});

export default withNavigation(RestaurantLists);
