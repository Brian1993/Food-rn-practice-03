import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultDetail from './ResultDetail'

const ResultsList = ({ title, results, navigation }) => {
  const navigate = ({ id }) => {
    navigation.navigate('ResultsShow', { id })
  }


  if (results.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={result => result.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() =>  navigate(item)}>
                <ResultDetail result={item} />
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
  return null
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
})

export default withNavigation(ResultsList)
