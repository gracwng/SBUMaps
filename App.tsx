import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {buildings} from './screens/indoorMap/mapRecords';
import Svg, {Path} from 'react-native-svg';

export default function App() {
  // let indoorTileMap = Buildings.freyHall.freyFloor2;
  // let mappedTiles = indoorTileMap.map((tile, index))



  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <Text>Frey Hall Floor 2</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
      {/* <View> */}
      <Image source = {require('../SBUMapsTS/assets/indoorMaps/FreyHall/FreyFloor2.png')}
      style = {styles.image}
      />
      {/* </View> */}
      <View>
      <Svg height="100" width="100">
  <Path
    d="M25 10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25"
    fill="none"
    stroke="red"
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
