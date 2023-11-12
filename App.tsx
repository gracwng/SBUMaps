import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {buildings} from './screens/indoorMap/mapRecords';
import Svg, {Path, Image } from 'react-native-svg';
import React, { useState } from 'react';
import { bfs, makeAdjLst, generatePath } from './screens/indoorMap/IndoorNavAlgorithm';

export default function App() {
  // let indoorTileMap = Buildings.freyHall.freyFloor2;
  // let mappedTiles = indoorTileMap.map((tile, index))
  const [path, setPath] = useState("");
  // const [start, setStart] = useState(304);
  // const[end, setEnd] = useState(420);
  const [start, setStart] = useState(348);
  const[end, setEnd] = useState(761);

  const makePath = () => {
    let freyFloor2 = buildings.freyHall.floor1
    let adjList = makeAdjLst(freyFloor2.array, freyFloor2.rows, freyFloor2.cols)
    // console.log(adjList)
    let bfsResult = bfs(adjList.adjLst, start, end, new Set<number>(), adjList.hallwayTileIndices)
    // console.log(bfsResult)
    //32 = size of tile
    const stringPath = generatePath(bfsResult, freyFloor2.cols, freyFloor2.tileSize);
    setPath(stringPath)
  }

  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <Text>Frey Hall Floor 2</Text>
      </View>
       {/* <View style = {{width: 2000, height: 500}}> */}
       <View style={{ transform: [{ scale: 0.3 }] }}>
       {/* <Svg height="576" width="1376"  */}
        <Svg height="992" width="1376" 
        style={{ backgroundColor: '#FFFAF0' }} 
         >
       <Image
          width="100%" 
          height="100%"
          // "xMidYMid meet": The element is scaled to fit within the container while maintaining its aspect ratio. It is centered both horizontally and vertically within the container.
          preserveAspectRatio="xMidYMid meet"
          // href={require('../SBUMapsTS/assets/indoorMaps/FreyHall/FreyFloor2.png')} />
          href={require('../SBUMapsTS/assets/indoorMaps/FreyHall/FreyFloor1.png')} />
      <Path
      d = {path}
      fill="none"
      stroke="blue"
      strokeWidth="5"
    />
  </Svg>
  <TouchableOpacity style = {styles.button} onPress = {makePath}>
    <Text style = {styles.buttonText}> Button</Text>
  </TouchableOpacity>
  
  {/* //put in input tag
  <TextInput> 
    
  </TextInput> */}
    </View>
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
    paddingTop: 100

  },
  image: {
    flex: 1, // Take up the available space within the View
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '100%', // Set the image width to 100% of the parent View
    height: '100%', // Set the image height to 100% of the parent View 
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
    fontSize: 50,
    textAlign: 'center'
  }
}
);
