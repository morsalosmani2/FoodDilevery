import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { Rating } from 'react-native-ratings';
import { useNavigation, useRoute } from '@react-navigation/native';
export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params
  const {image, name, price, detail, id} = data
      return (
        <ScrollView style={styles.container}>
          <Image style={styles.image} source={{ uri: image }}/>
          <View>
            <Text style={styles.txt}>{name}</Text>
            <Text style={styles.txt}>Price: {price}</Text>
            <Rating showRating imageSize={30}/>
            <View style={styles.content}>
              <Text style={styles.txt}>Introduction</Text>
              <Text>{detail}</Text>
            </View>
            <Button
              title="Added to favorite"
              color="#777777"
              onPress={() =>  {navigation.navigate("Favorite")}}/>
          </View>
      </ScrollView>
    ); 
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        height: 190,
    },
    txt: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 8
    },
    content: {
      margin: 8
    },
    button: {
      margin: 8
    }
  });