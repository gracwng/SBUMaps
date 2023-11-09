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
      d = "M112 240 L112 272 L144 272 L176 272 L208 272 L240 272 L272 272 L304 272 L336 272 L368 272 L400 272 L432 272 L464 272 L496 272 L528 272 L560 272 L592 272 L624 272 L656 272 L688 272 L720 272 L752 272 L784 272 L816 272 L848 272 L880 272 L912 272 L944 272 L976 272 L1008 272 L1040 272 L1072 272 L1072 336"
      fill="none"
      stroke="blue"
      strokeWidth="5"
    />
  </Svg>
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
