import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DashboardCard from '../src/components/DashboardCard';
import Navbar from '../src/components/Navbar';

const DashBoard = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#76BBFF'}}>
        <Navbar />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </View>
    </>
  );
};
export default DashBoard;
