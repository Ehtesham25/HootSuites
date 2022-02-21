import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import image from '../assets/hoot.png';

const SingleSignIn = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              marginLeft: 18,
              marginTop: 13,
              width: 260,
              backgroundColor: '#ffffff',
              height: 100,
              borderRadius: 20,
            }}
            source={image}
          />
        </View>
        <View>
          <TextInput
            placeholder="email@example.com"
            style={{
              borderWidth: 0.5,
              paddingLeft: 20,
              marginHorizontal: 10,
              marginTop: 15,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              justifyContent: 'center',
              borderRadius: 9,
              alignItems: 'center',
              height: 40,
              marginHorizontal: 10,
              backgroundColor: 'orange',
            }}>
            <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignInScreen')}
            style={{
              justifyContent: 'center',
              marginTop: 15,
              borderRadius: 9,
              alignItems: 'center',
              height: 40,
              marginHorizontal: 10,
              backgroundColor: '#F2F2F2',
            }}>
            <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default SingleSignIn;
