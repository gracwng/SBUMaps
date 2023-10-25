import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {buildings} from './mapRecords';

export default function App() {
  // let indoorTileMap = Buildings.freyHall.freyFloor2;
  // let mappedTiles = indoorTileMap.map((tile, index))



  return (
    <View style={styles.container}>
      <Text>Welcome to SBUMaps</Text>
     
      <StatusBar style="auto" />
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
});
