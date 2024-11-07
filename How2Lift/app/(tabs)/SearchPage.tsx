import SearchBar from '@/components/SearchPage/SearchBar'
import React from 'react'
import { View } from 'react-native'

const SearchPage = () => {

  const Search = (test: string) => {
    console.log(test)
  }

  return (
    <View className='flex-1 justify-center items-center'>
      <SearchBar onSearch={Search}></SearchBar>
    </View>
  )
}

export default SearchPage