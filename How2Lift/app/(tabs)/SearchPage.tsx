import ExerciseListItem from '@/components/SearchPage/ExerciseListItem'
import MachineListItem from '@/components/SearchPage/MachineListItem'
import SearchBar from '@/components/SearchPage/SearchBar'
import React, { useEffect, useState } from 'react'
import { Animated, Dimensions, Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import mockMachines from '@/mocks/machines'
import mockExercises from '@/mocks/exercises'
import { MachineSearchResult } from '@/types/machine'
import { MachineService } from '@/services/machineService'

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

enum ListType {
  MACHINES,
  EXERCISES
}

const SearchPage = () => {

  const screenWidth = Dimensions.get('window').width;
  const [animation] = useState(new Animated.Value(0));
  const [selectedList, setSelectedList] = useState<ListType>(ListType.MACHINES); //0 - machines 1 - exercises
  const [machines, setMachines] = useState<MachineSearchResult[]>(mockMachines)
  const [exercises, setExercises] = useState<Exercise[]>(mockExercises)
  const machineService = new MachineService()

  const [filteredData, setFiltredData] = useState<MachineSearchResult[] | Exercise[]>(machines.sort((a, b) => a.name.localeCompare(b.name)))

  const Search = (query: string) => {
    console.log("search query: "+query)
    var data: MachineSearchResult[] | Exercise[] = []
    if(selectedList == ListType.MACHINES)
    {
      data = machines.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      data.sort((a, b) => a.name.localeCompare(b.name))
    }
    else
    {
      data = exercises.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      data.sort((a, b) => a.name.localeCompare(b.name))
    }
    setFiltredData(data)
  }

  useEffect(() => {
    machineService.getAllMachines().then((machines) => {
      setMachines(machines)
      setFiltredData(machines.sort((a, b) => a.name.localeCompare(b.name)));
    }).catch(error => {
      console.error("Failed to fetch machines:", error);
    });
  }, [])

  const switchList = (listType: ListType) => {
    console.log(listType)
    setSelectedList(listType)
    if(listType==ListType.EXERCISES)
      setFiltredData(exercises.sort((a, b) => a.name.localeCompare(b.name)))
    else
      setFiltredData(machines.sort((a, b) => a.name.localeCompare(b.name)))
    Animated.spring(animation, {
      toValue: (listType == ListType.EXERCISES ? 1 : 0) * screenWidth / 2,
      useNativeDriver: false,
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
          <View className='w-full h-auto justify-start px-4 py-2 space-y-2 bg-secondary shadow-md'>
            <SearchBar onSearch={Search} height={36} onChangeText={Search}/>
          </View>
          {/* data container */}
          <ScrollView className='w-full h-full px-4 py-2 space-y-2' contentContainerStyle={{ backgroundColor: "#00000000" }}>
            {
              (selectedList == ListType.MACHINES)? (
                filteredData.map(m => {
                  const machine = m as MachineSearchResult
                  return(
                  <View className='py-1 w-full h-auto' key={machine.id}>
                    <MachineListItem machineName={machine.name} image={machine.imageUrl} info={machine.muscleNames.join(", ")}/>
                  </View>
                )})
                
              ) : (
                filteredData.map(m => {
                  const exercise = m as Exercise
                 return (
                  <View className='py-1 w-full h-auto' key={m.id}>
                    <ExerciseListItem exerciseName={exercise.name} image={exercise.image} info={exercise.info}/>
                  </View>
                )})
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