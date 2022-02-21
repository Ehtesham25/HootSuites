import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Avatar, Button} from 'react-native-paper';

import image from '../../assets/sociallite.png';

const HomeCard = () => {
  return (
    <>
      <View style={styles.container}>
        <Avatar.Image size={200} source={image} style={styles?.avatar_style} />
        <Button
          style={styles.button_style}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          <Text style={styles?.buton_text}>Lorem</Text>
        </Button>
        <Text style={styles?.sub_text}>
          Lorem ipsum dolor amet? Lorem Ipsum
        </Text>
      </View>
    </>
  );
};
export default HomeCard;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#99CDFF',
    paddingVertical: 50,
  },
  avatar_style: {
    display: 'flex',
    marginLeft: 90,
    elevation: 6,
  },
  button_style: {
    paddingTop: 20,
    width: '65%',
    marginLeft: 70,
    marginTop: 15,
    height: '15%',
    borderRadius: 40,
  },
  buton_text: {
    textAlign: 'center',
    fontWeight: '900',
    elevation: 6,
    fontSize: 19,
  },
  sub_text: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 19,
  },
});
