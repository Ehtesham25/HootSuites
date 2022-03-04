import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { BoolifiedDeprecatedViewStylePropTypes } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { TextInput } from 'react-native-paper';
import DashboardCard from '../src/components/DashboardCard';
import Navbar from '../src/components/Navbar';

const SearchScreen = () => {
  return (
    <>
        <Navbar/>
      <TextInput placeholder="Search" style={styles.inputText} />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  inputText: {
    borderRadius: 10,
    borderColor: 'black',
    width:'80%',
    justifyContent:'center',
    borderWidth:1 ,
    overflow:'hidden',
    marginTop:10,
    marginLeft:'10%'
  },
});
