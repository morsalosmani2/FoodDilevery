import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FoodItem({image, name, price, detail, id}) {
    const navigation = useNavigation();
      return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.foodItem}               
                onPress={() => navigation.navigate("Detail", {image, name, price, detail, id})}>
                <Image
                    style={styles.image}
                    source={{uri: image}}
                />
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontWeight:"bold"}}>{name}</Text>
                    <Text>{price}</Text>
                </View>
            </TouchableOpacity> 
        </View>
      );
    
    }
    
    const styles = StyleSheet.create({
        foodItem: {
            marginLeft: 10, 
            marginBottom: 10
        },
        image: {
            height: 100, 
            width: 100, 
            borderTopLeftRadius: 15, 
            borderBottomRightRadius: 15
        }
    });
