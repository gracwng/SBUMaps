import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Buildings from './mapRecords';

export default function App() {
  // let indoorTileMap = Buildings.freyHall.freyFloor2;
  // let mappedTiles = indoorTileMap.map((tile, index))



  return (
    <View style={styles.container}>
      <Text>Welcome to SBUMaps</Text>
      {
        Buildings.map(floors => {
          return (
            // <View className = "floors" key = {floors.id}> 
              <Text>{floors.title}</Text>
            // </View>
          )
        })
      }
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
