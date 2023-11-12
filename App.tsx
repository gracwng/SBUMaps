import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {buildings} from './screens/indoorMap/mapRecords';
import Svg, {Path, Image } from 'react-native-svg';
import { useState } from 'react';
import { bfs, makeAdjLst, generatePath } from './screens/indoorMap/IndoorNavAlgorithm';

export default function App() {
  // let indoorTileMap = Buildings.freyHall.freyFloor2;
  // let mappedTiles = indoorTileMap.map((tile, index))
  const [path, setPath] = useState("");
  const [start, setStart] = useState(304);
  const[end, setEnd] = useState(420);


  const makePath = () => {
    let freyFloor2 = buildings.freyHall.floor2
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

        <Svg height="576" width="1376" 
         style={{ backgroundColor: '#FDF5E6' }} // Set the background color to blue
         >
       <Image
          width="100%" // Makes the image larger than the parent SVG container
          height="100%"
          // "xMidYMid meet": The element is scaled to fit within the container while maintaining its aspect ratio. It is centered both horizontally and vertically within the container.
          preserveAspectRatio="xMidYMid meet"
          href={require('../SBUMapsTS/assets/indoorMaps/FreyHall/FreyFloor2.png')} />
      <Path
      // d = "M112 240 L112 272 L144 272 L176 272 L208 272 L240 272 L272 272 L304 272 L336 272 L368 272 L400 272 L432 272 L464 272 L496 272 L528 272 L560 272 L592 272 L624 272 L656 272 L688 272 L720 272 L752 272 L784 272 L816 272 L848 272 L880 272 L912 272 L944 272 L976 272 L1008 272 L1040 272 L1072 272 L1072 336"
      d = {path}
      fill="none"
      stroke="blue"
      strokeWidth="5"
    />
  </Svg>
  <Button title = "BUTton" 
  onPress={makePath}/>
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
  }
}
);
