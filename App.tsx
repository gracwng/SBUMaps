import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {buildings} from './screens/indoorMap/mapRecords';
import Svg, {Path, Image } from 'react-native-svg';


export default function App() {
  // let indoorTileMap = Buildings.freyHall.freyFloor2;
  // let mappedTiles = indoorTileMap.map((tile, index))



  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <Text>Frey Hall Floor 2</Text>
      </View>
       <Svg height="576" width="1376" 
         style={{ backgroundColor: 'blue' }} // Set the background color to blue
         >
       <Image
          width="100%" // Makes the image larger than the parent SVG container
          height="100%"
          // "xMidYMid meet": The element is scaled to fit within the container while maintaining its aspect ratio. It is centered both horizontally and vertically within the container.
          preserveAspectRatio="xMidYMid meet"
          href={require('../SBUMapsTS/assets/indoorMaps/FreyHall/FreyFloor2.png')} />
      <Path
      d = "M96 240 L96 272 L128 272 L160 272 L192 272 L224 272 L256 272 L288 272 L320 272 L352 272 L384 272 L416 272 L448 272 L480 272 L512 272 L544 272 L576 272 L608 272 L640 272 L672 272 L704 272 L736 272 L768 272 L800 272 L832 272 L864 272 L896 272 L928 272 L960 272 L992 272 L1024 272 L1056 272 L1056 336"
      fill="none"
      stroke="blue"
      strokeWidth="5"
    />
  </Svg>
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
