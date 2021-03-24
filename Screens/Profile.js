import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import ProfileItem from '../components/ProfileItem'
export default function Profile() {
      return (
      <View style={styles.container}>
       <View>
          <Image
              style={styles.image}
              source={{ uri: require('../assets/profile.jpg') }}
          />
          
       </View>
        <ProfileItem name="Username" value="Sodabeh Sherzad"/>
        <ProfileItem name="Gmail" value="sodabeh@gmail.com"/>
        <ProfileItem name="Gender" value="Female"/>
        <ProfileItem name="Mobile" value="+93 777 888 999"/>
        <ProfileItem name="Address" value="Herat/Afghanistan"/>
      </View>
    );
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },

    image: {
        height: 200,
        backgroundColor: '#fff'
    },
  });