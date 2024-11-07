import SearchBar from '@/components/SearchPage/SearchBar'
import React, { useState } from 'react'
import { Animated, Dimensions, Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'

const SearchPage = () => {

  const Search = (test: string) => {
    console.log(test)
  }
  const screenWidth = Dimensions.get('window').width;
  const [underlinePosition] = useState(new Animated.Value(0));

  const moveUnderline = (index: number) => {
    Animated.spring(underlinePosition, {
      toValue: index * screenWidth/2,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <SafeAreaView
        className="flex h-full flex-col bg-black w-full"
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
      >
        <View className="flex justify-start flex-col items-start bg-background w-full h-full">
          <View className='w-full h-[40px] bg-background flex flex-row'>
            <TouchableOpacity
              className='w-[50%] h-full p-2 items-center justify-center flex'
              onPress={() => moveUnderline(0)}
            >
              <Text className='text-[20px] font-quicksand_bold'>Machines</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='w-[50%] h-full p-2 items-center justify-center flex'
              onPress={() => moveUnderline(1)}
            >
              <Text className='text-[20px] font-quicksand_bold'>Exercises</Text>
            </TouchableOpacity>
            <Animated.View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  height: 3,
                  backgroundColor: 'blue',
                  width: "50%",
                  transform: [
                    {
                      translateX: underlinePosition,
                    },
                  ],
                }}
              />
          </View>
          <View className='w-full h-[50px]  justify-center px-4'>
            <SearchBar onSearch={Search} height={36} />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default SearchPage