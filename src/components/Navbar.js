import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ThreeDots from 'react-native-vector-icons/Entypo';
import {Avatar} from 'react-native-paper';

import image from '../../assets/sociallite.png';

const Navbar = () => {
  return (
    <>
      <View style={styles.container}>
        <Avatar.Image size={44} source={image} />
        <Text style={styles.text_style}>User Name</Text>
        <ThreeDots name="dots-three-horizontal" size={40} />
      </View>
      <Text style={styles?.sub_text}>Lorem ipsum text dolor sit amet</Text>
    </>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  text_style: {
    fontWeight: 'bold',
    paddingVertical: 5,
    letterSpacing: 4,
    fontSize: 15,
  },
  sub_text: {
    textAlign: 'center',
    fontSize: 14,
    paddingVertical: 10,
    letterSpacing: 3,
    fontWeight: 'bold',
  },
});
