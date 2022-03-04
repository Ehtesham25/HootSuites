import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DashboardCard = () => {
  // let date = new Date.now();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.timeText}>20:20</Text>
          <Text style={styles.dateText}>Lorem</Text>
          <Text style={styles.dateText}>04-Mar, 2022</Text>
        </View>
        <View style={styles.drawLine}></View>
        <View style={styles.subContainer}>
          <Text style={styles.dateText}>Lorem ipsum Text </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Lorem</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DashboardCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#D2E3FD',
    borderRadius: 10,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: '2%',
    marginTop: '4%',
  },
  subContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  timeText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center'
  },
  dateText: {
    fontSize: 17,
    fontWeight: '400',
    textAlign:'center'
  },
  drawLine: {
    height: '65%',
    width: '1%',
    borderRadius: 20,
    backgroundColor: 'skyblue',
  },
  button: {
    textAlign: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 40,
    width: '60%',
    height: '19%',
    marginTop:'5%'
  },
  buttonText: {
    fontWeight: 'bold',
    letterSpacing: 4,
    textAlign:'center'
  },
});
