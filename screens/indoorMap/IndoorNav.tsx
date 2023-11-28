import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {buildings} from './mapRecords';
import Svg, {Path, Image, G } from 'react-native-svg';
import React, { useState } from 'react';
import { bfs, makeAdjLst, generatePath } from './IndoorNavAlgorithm';
import { SearchBar } from '@rneui/base';

export const DissmissKeyboard = ({children}: {children: React.ReactNode}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)
export const IndoorNav = () => {
  const [path, setPath] = useState("");
  const [start, setStart] = useState(348);
  const[end, setEnd] = useState(761);

  const originalWidth = 1376;
  const originalHeight = 992;
  const aspectRatio = originalWidth / originalHeight;
  const windowWidth = Dimensions.get("window").width;

  const makePath = () => {
    let freyFloor2 = buildings.freyHall.floor1
    let adjList = makeAdjLst(freyFloor2.array, freyFloor2.rows, freyFloor2.cols)
    // console.log(adjList)
    let bfsResult = bfs(adjList.adjLst, start, end, new Set<number>(), adjList.hallwayTileIndices)
    // console.log(bfsResult)
    const stringPath = generatePath(bfsResult, freyFloor2.cols, freyFloor2.tileSize);
    setPath(stringPath)
  }

  //handle the case when the starting door doesn't start with a number like Physics B-109
//   const updateStart = (newStart: ) => {
//     setStart(newStart)
//   }
  

  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.screenTitle}> Frey Hall Floor 2 </Text>
      </View>
      <View>
        <Text></Text>
        <SearchBar
        placeholder = "Starting room..."
        // onChangeText={}
        lightTheme = {true}
        round = {true}
        containerStyle = {{backgroundColor: "beige" }}
        />
        {/* //put in input tag
    <TextInput> 
      
    </TextInput> */}
      </View>

    {/* map component: */}
      <View style={{ width: windowWidth, aspectRatio }}>
      <Svg height="100%" width="100%" 
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        style={styles.svg} >
       <Image
          width="100%" 
          height="100%"
          // "xMidYMid meet": The element is scaled to fit within the container while maintaining its aspect ratio. It is centered both horizontally and vertically within the container.
          preserveAspectRatio="xMidYMid slice"
          href={require('../../assets/indoorMaps/FreyHall/FreyFloor1.png')} 
        />
          
      <Path
      d = {path}
      fill="none"
      stroke="blue"
      strokeWidth="5"
      />
    </Svg>
    </View>
  {/* button component */}
  <TouchableOpacity style = {styles.button} onPress = {makePath}>
    <Text style = {styles.buttonText}>Create Path</Text>
  </TouchableOpacity>
    </View>
    
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