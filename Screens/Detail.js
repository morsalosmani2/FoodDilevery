import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { Rating } from 'react-native-ratings'
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Detail() {
    const { name, image, price, detail } = useRoute().params
    return (
        <ScrollView style={styles.container}>

            <image
                style={{ height: 190 }}
                source={{ uri: image }}
            />
            <View>
                <Text style={styles.title} > {name} </Text>
            <Text style={styles.title}> Price: {price}</Text>
                <Rating showRating imageSize={30} />
            </View>
            <View style = {{margin: 8}}>
                <Text>Introduction</Text>
                <Text>{detail}</Text>
            </View>
            <Button
                title="Added to favorite"
                color="#777777"
            />

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 8,
    }
});