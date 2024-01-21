import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native'
import React from 'react'

const SearchFilterStart = ({ data, input, setInput }:
  { data: Map<string, number[]>, input: string, setInput: React.Dispatch<React.SetStateAction<string>> }) => {
  // gather all possible room numbers for a given floor/map
  const keysArray = Array.from(data.keys())

  // methods of rendering items
  // This is a method for rendering individual items in a FlatList. It takes an item (a room number) and returns a React element.
  const renderItem: ListRenderItem<string> = ({ item }: { item: string }) => {
    //if the input is empty, then display the current item in the array
    if (input === "") {
      return (
        <View style={styles.listItem}>
          <Text> {item} </Text>
        </View>
      )
    }
    // otherwise, if the input is contained in our current item in the array, then print it out
    if (item.toLowerCase().includes(input.toLowerCase())) {
      return (
        <View style={styles.listItem}>
          <Text> {item.trim()} </Text>
        </View>
      )
    }
    // Default return statement
    return null;
  }

  return (
    // the flatlist will go through every item in the array and try to render it based on the conditions in the renderItem function
    <View style={styles.container} >
      <FlatList data={keysArray}
        renderItem={renderItem}
        keyExtractor={(item) => item}

      />
    </View>
  )
}

export default SearchFilterStart

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    // position: 'absolute', // Set the position to absolute
    // zIndex: 1, // Set a higher zIndex to make it appear over other components
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8EBE2',
    padding: 9,
    borderRadius: 17,
    width: 250,
    marginVertical: 3,
    // position: 'absolute', // Set the position to absolute
    // zIndex: 1, // Set a higher zIndex to make it appear over other components
  }
})