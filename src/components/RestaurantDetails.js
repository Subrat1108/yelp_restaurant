import React from "react";
import {Text, View, StyleSheet, Image} from "react-native"

const RestaurantDetails = ({data})=>{
    return (
        <View style={styles.container}>
            <Image source={{uri: data.image_url}} style={styles.imageStyle}/>
            <Text style={{fontWeight:'bold'}}>{data.name}</Text>
            <Text>{data.rating} Stars, {data.review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    imageStyle:{
        width:250,
        height:120,
        borderRadius:4
    },
    container:{
        marginLeft:10,
        marginBottom:5
    }
});

export default RestaurantDetails;
