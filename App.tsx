import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {buildings} from './screens/indoorMap/mapRecords';
import Svg, {Path, Image, G } from 'react-native-svg';
import React, { useState } from 'react';
import { bfs, makeAdjLst, generatePath } from './screens/indoorMap/IndoorNavAlgorithm';
import { IndoorNav } from './screens/indoorMap/IndoorNav';

export default function App() {
  

 return(
    <IndoorNav/>
 );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    // how can I change the padding of the heading without changing the posiiton of the image
    // paddingTop: 10,


  },
  svg: {
    flex: 1, // Take up the available space within the View
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '100%', // Set the image width to 100% of the parent View
    height: '100%', // Set the image height to 100% of the parent View 
    backgroundColor: '#FFFAF0',
    // viewBox: '0 0 412.8 297.6'

  },
  //can't really be used on the button component
  button: {
    backgroundColor: '#5F9EA0',
    color: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  screenTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Georgia'
  },
}
);
