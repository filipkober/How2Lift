import SearchBar from '@/components/SearchPage/SearchBar'
import React from 'react'
import { Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'

const SearchPage = () => {

  const Search = (test: string) => {
    console.log(test)
  }

  return (
    <>
      <SafeAreaView
        className="flex h-full flex-col bg-black w-full"
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
      >
        <View className="flex justify-start flex-col items-start bg-background w-full h-full">
          <View className='w-full h-[60px] bg-background flex flex-row'>
            <TouchableOpacity className='w-[50%] h-full p-2 items-center justify-center flex'>
              <Text className='text-[30px] font-quicksand_bold'>Machines</Text>
            </TouchableOpacity>
            <TouchableOpacity className='w-[50%] h-full p-2 items-center justify-center flex'>
              <Text className='text-[30px] font-quicksand_bold'>Exercises</Text>
            </TouchableOpacity>
          </View>
          <View className='w-full h-[50px]  justify-center px-2'>
            <SearchBar onSearch={Search} height={30} />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default SearchPage