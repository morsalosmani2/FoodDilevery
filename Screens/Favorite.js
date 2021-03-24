import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import FavoriteItem from '../components/FavoriteItem'
export default function Favorite() {
    const foods = [
        {id: "1", image: require('../assets/steak.jpg'), name: "Steak", price: "20$"},

        {id: "2", image: require('../assets/rice.jpg'), name: "Rice", price: "30$"},

        {id: "3", image: require('../assets/pizza.jpg'), name: "Pizza", price: "20$"},
        
        {id: "4", image: require('../assets/eggs.jpg'), name: "Omlette", price: "20$"},

        {id: "5", image: require('../assets/bolani.jpg'), name: "Bolani", price: "30$"},

        {id: "6", image: require('../assets/sandwich.jpg'), name: "Sandwich", price: "20$"}
    ];

  return (
        <View style={{flex: 1}}>
            <FlatList 
                data={foods}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return <FavoriteItem image={item.image} name={item.name} price={item.price}/>
                }}
            />  
        </View>
    );
}
const styles = StyleSheet.create({

});