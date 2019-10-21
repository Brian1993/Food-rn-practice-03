import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errMsg] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter(result => result.price === price)
  }

  return (
    <View>
      <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}
      <Text>We have found: {results.length} results</Text>
      <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultList results={filterResultsByPrice('$$$')} title="Big Spender" />
    </View>
  )
}

const styles = StyleSheet.create({

});

export default SearchScreen