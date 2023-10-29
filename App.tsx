import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {buildings} from './screens/indoorMap/mapRecords';

export default function App() {
  // let indoorTileMap = Buildings.freyHall.freyFloor2;
  // let mappedTiles = indoorTileMap.map((tile, index))



  return (
    <View style={styles.container}>
      <Text>Frey Hall Floor 2</Text>
      {/* <StatusBar style="auto" /> */}
      <Image source = {require('../SBUMapsTS/assets/indoorMaps/FreyHall/FreyFloor2.png')}
      style = {styles.image}
      />
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
  image: {
    flex: 1, // Take up the available space within the View
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '100%', // Set the image width to 100% of the parent View
    height: '100%', // Set the image height to 100% of the parent View 
  }
}
);
