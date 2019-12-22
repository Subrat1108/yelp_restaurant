import React, {useState} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import useRestaurantResults from '../hooks/useRestaurantResults';

import SearchBox from '../components/SearchBoxComponent';
import RestaurantLists from '../components/RestaurantLists';

function SearchScreen() {
    const [searchWord, setSearchWord] = useState('');
    const [searchApi,restaurants,errorMessage] = useRestaurantResults();

    const filterResultsByPrice = (price)=> {
        return restaurants.filter(result=>{
            return result.price===price
        })
    };

    return(
        <>
            <SearchBox
                value={searchWord}
                onTextChange={(newValue)=>setSearchWord(newValue)}
                onTermSubmit={()=>searchApi(searchWord)}
            />
            {restaurants.length!=undefined?<Text style={styles.searchCount}>{restaurants.length} results found in San Jose</Text>:null}
            {errorMessage?<Text>{errorMessage}</Text>:null}
            <ScrollView>
                <RestaurantLists title='Cost effective' filteredRestaurants={filterResultsByPrice('$')}/>
                <RestaurantLists title='Treats friendly' filteredRestaurants={filterResultsByPrice('$$')}/>
                <RestaurantLists title='Fine Dine' filteredRestaurants={filterResultsByPrice('$$$')}/>
            </ScrollView>
        </>
    )
};

let styles = StyleSheet.create({
    searchCount:{
        backgroundColor:'#f1eef0',
        padding:5,
        borderRadius:5,
        marginHorizontal:10,
        marginBottom:10
    }
});

export default SearchScreen;
