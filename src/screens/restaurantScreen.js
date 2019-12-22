import React, {useEffect,useState} from "react"
import {Text, View, StyleSheet, Image, FlatList} from "react-native"
import {Feather} from "@expo/vector-icons";

import Yelp from "../api/yelp"

const RestaurantScreen = ({navigation})=>{
    const [restaurantDetails,setRestaurantDetails] = useState(null);

    const screenParamDetails = navigation.getParam('details');

    const getRestaurantDetails = async (id)=>{
        const details = await Yelp.get(`/${id}`);
        console.log('restaurant details ====>',details.data);
        setRestaurantDetails(details.data);
    }

    useEffect(()=>{
        getRestaurantDetails(screenParamDetails.id);
    },[])

    if(!restaurantDetails){
        return null;
    }
    return(
        <View>
            <View style={{height:200}}>
                <Image source={{uri:screenParamDetails.image_url}} style={styles.headerImage}/>
            </View>
            <View style={styles.info}>
                <View style={styles.jointInfo}>
                    <Text style={styles.title}>{restaurantDetails.name}</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={restaurantDetails.categories}
                        keyExtractor={(result)=>result.title}
                        renderItem={({item})=>{
                            return(
                                <Text style={{fontSize:15, marginRight: 5}}>{item.title}</Text>
                            )
                        }}
                    />
                    <Text style={{fontSize:12, marginTop:5}}>{restaurantDetails.location.address1}, {restaurantDetails.location.city}</Text>
                </View>
                <View style={styles.ratings}>
                    {restaurantDetails.rating>=3.5?<Text style={styles.rating}>{restaurantDetails.rating} <Text style={{fontSize:13}}>stars</Text></Text>:<Text style={styles.badRating}>{restaurantDetails.rating} <Text style={{fontSize:13}}>stars</Text></Text>}
                    <Text style={styles.review}>of {restaurantDetails.review_count} reviews</Text>
                </View>
            </View>
            <View style={styles.additionalInfo}>
                {restaurantDetails.is_closed?<Text style={{color:'red', fontWeight:'bold', fontSize:15}}>Closed Now</Text>:<Text style={{color:'green', fontWeight:'bold', fontSize:15}}>Open Now</Text>}
                <Text style={{fontWeight:'bold'}}>Cost index : {restaurantDetails.price}</Text>
                <View style={styles.phone}>
                    <Feather name='phone' style={styles.icon}/>
                    <Text style={{fontSize:16}}>{restaurantDetails.phone}</Text>
                </View>
            </View>
            <View style={styles.carousel}>
                <Text style={{fontSize:16, fontWeight:'bold', marginLeft:10, marginBottom:5}}>Gallery</Text>
                <FlatList
                    horizontal
                    showHorizontalScrollIndicator={false}
                    data={restaurantDetails.photos}
                    keyExtractor={(photo)=>photo}
                    renderItem={({item})=>{
                        return <Image source={{uri:item}} style={{width:350,height: 250,marginLeft:10, borderRadius: 4}}/>
                    }}
                />
            </View>
        </View>

    )
};

const styles=StyleSheet.create({
    headerImage:{
        flex:1,
        marginBottom:10
    },
    info:{
        flexDirection:'row',
        marginHorizontal:10,
        marginBottom: 10,
        paddingHorizontal:5
    },
    ratings:{
        flexDirection: 'column',
        flex:1,
        justifyContent:'space-between',
        shadowRadius:5,
        shadowColor:'black',
        shadowOffset:{width: 5,height:5}
    },
    jointInfo:{
        flexDirection: 'column',
        flex:6
    },
    rating:{
        flex:1,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor:'#6fc90e',
        color:'white',
        fontWeight: 'bold',
        fontSize:16,
        borderTopLeftRadius:4,
        borderTopRightRadius:4
    },
    badRating:{
        flex:1,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor:'#fc5826',
        color:'white',
        fontWeight: 'bold',
        fontSize:16,
        borderTopLeftRadius:4,
        borderTopRightRadius:4
    },
    review:{
        flex:1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 12,
        backgroundColor: '#f3f5f0',
        borderBottomLeftRadius:4,
        borderBottomRightRadius:4
    },
    title:{
        fontSize:18,
        fontWeight: 'bold'
    },
    icon:{
        fontSize:20,
        marginRight:5
    },
    additionalInfo:{
        backgroundColor:'#fff5cc',
        marginHorizontal: 10,
        borderRadius:4,
        padding:5
    },
    phone:{
        flexDirection:'row',
        marginTop: 5
    },
    carousel:{
        backgroundColor:'#f5f3eb',
        marginVertical:15,
        paddingVertical:10
    }
});

export default RestaurantScreen;
