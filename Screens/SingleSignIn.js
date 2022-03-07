import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import image from '../assets/hoot.png';

const SingleSignIn = ({navigation}) => {
  const [email, setEmail] = useState();

  const handleLogin = () => {
    if (!email) {
      Alert.alert('Please enter valid email');
    } else {
      navigation.navigate('Home');
    }
  };
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
            value={email}
            onChange={(text) => setEmail(text)}
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
            onPress={() => handleLogin()}
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
