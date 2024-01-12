import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native'
import React from 'react'

const SearchFilterStart = ({ data, input, setInput }: { data: Map<string, number[]>, input: string, setInput: React.Dispatch<React.SetStateAction<string>> }) => {

  const keysArray = Array.from(data.keys())

  const renderItem: ListRenderItem<string> = ({ item }: { item: string }) => {
    if (input === "") {
      return (
        <View style={styles.listItem}>
          <Text> {item} </Text>
        </View>
      )
    }
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