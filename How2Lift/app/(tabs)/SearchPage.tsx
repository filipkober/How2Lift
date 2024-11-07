import SearchBar from '@/components/SearchPage/SearchBar'
import React from 'react'
import { View } from 'react-native'

const SearchPage = () => {

  const Search = (test: string) => {
    console.log(test)
  }

  return (
    <View className='flex justify-center items-center bg-green-600 w-full h-full'>
      <View className='flex justify-center items-center bg-green-600 w-[60%] h-full'>
      <SearchBar onSearch={Search} height={50}></SearchBar>
      <SearchBar onSearch={Search}></SearchBar>
      <SearchBar onSearch={Search} height={30}></SearchBar>
      <SearchBar onSearch={Search} height={20}></SearchBar>

      </View>
    </View>
  )
}

export default SearchPage