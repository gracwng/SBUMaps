import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const SearchFilterStart = ({data, input, setInput}: {data: Map <string, number[]>, input: string, setInput:  React.Dispatch<React.SetStateAction<string>>}) => {

    const keysArray = Array.from(data.keys())

    const renderItem = ({item} : {item: string}) => (
      <Text> {item} </Text>
    )

  return (
    <View>
     <FlatList data = {keysArray} 
     renderItem = {renderItem}
     keyExtractor={(item) => item}
        
     />
    </View>
  )
}

export default SearchFilterStart

const styles = StyleSheet.create({})