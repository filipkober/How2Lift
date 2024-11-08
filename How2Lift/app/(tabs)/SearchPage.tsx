import ExerciseListItem from '@/components/SearchPage/ExerciseListItem'
import MachineListItem from '@/components/SearchPage/MachineListItem'
import SearchBar from '@/components/SearchPage/SearchBar'
import React, { useState } from 'react'
import { Animated, Dimensions, Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'

type Machine = {
  id: number,
  name: string,
  info: string,
  image: {
    uri: string,
  }
}

type Exercise = {
  id: number,
  name: string,
  info: string,
  image: {
    uri: string,
  }
}


const SearchPage = () => {

  const screenWidth = Dimensions.get('window').width;
  const [animation] = useState(new Animated.Value(0));
  const [selectedList, setSelectedList] = useState<number>(0); //0 - machines 1 - exercises
  const [machines, setMachines] = useState<Machine[]>([
    { id: 0, name: "test", info: "testus", image: { uri: ""}},
    { id: 1, name: "test", info: "testus", image: { uri: ""}},
    { id: 2, name: "test", info: "testus", image: { uri: ""}},
    { id: 3, name: "test", info: "testus", image: { uri: ""}},
    { id: 4, name: "test", info: "testus", image: { uri: ""}},
    { id: 5, name: "test", info: "testus", image: { uri: ""}},
    { id: 6, name: "test", info: "testus", image: { uri: ""}},
    { id: 7, name: "test", info: "testus", image: { uri: ""}},
    { id: 8, name: "test", info: "testus", image: { uri: ""}},
    { id: 9, name: "", info: "", image: { uri: ""}}
  ])

  const [exercises, setExercises] = useState<Machine[]>([
    { id: 10, name: "test", info: "testus", image: { uri: "https://legacy.reactjs.org/logo-og.png"}},
    { id: 11, name: "test", info: "testus", image: { uri: "https://legacy.reactjs.org/logo-og.png"}},
    { id: 12, name: "", info: "", image: { uri: ""}}
  ])

  const Search = (test: string) => {
    console.log(test)
  }

  const switchList = (index: number) => {
    console.log(index)
    setSelectedList(index)
    Animated.spring(animation, {
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
          <View className='w-full h-[40px] bg-secondary flex flex-row '>
            <TouchableOpacity
              className='w-[50%] h-full p-2 items-center justify-center flex'
              onPress={() => switchList(0)}
            >
              <Text className='text-[20px] font-quicksand_bold'>Machines</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='w-[50%] h-full p-2 items-center justify-center flex'
              onPress={() => switchList(1)}
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
                      translateX: animation,
                    },
                  ],
                }}
              />
          </View>
          {/* scrollbar */}
          <View className='w-full h-auto justify-start px-4 py-2 space-y-2 bg-secondary'>
            <SearchBar onSearch={Search} height={36}/>
          </View>
          {/* data container */}
          <ScrollView className='w-full h-full px-4 py-2 space-y-2' contentContainerStyle={{ backgroundColor: "#00000000" }}>
            {
              (selectedList == 0)? (
                machines.map(m => (
                  <View className='py-1 w-full h-auto' key={m.id}>
                    <MachineListItem machineName={m.name} image={m.image} info={m.info}/>
                  </View>
                ))
              ) : (
                exercises.map(m => (
                  <View className='py-1 w-full h-auto'>
                    <ExerciseListItem exerciseName={m.name} image={m.image} info={m.info}/>
                  </View>
                ))
              )
            }
            <View className='w-full h-[60px] bg-transparent'></View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  )
}

export default SearchPage