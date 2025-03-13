import ExerciseListItem from '@/components/SearchPage/ExerciseListItem'
import MachineListItem from '@/components/SearchPage/MachineListItem'
import SearchBar from '@/components/SearchPage/SearchBar'
import React, { useEffect, useState } from 'react'
import { Animated, Dimensions, Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import mockMachines from '@/mocks/machines'
import mockExercises from '@/mocks/exercises'
import { MachineSearchResult } from '@/types/machine'
import { MachineService } from '@/services/machineService'
import { ExerciseSearchResult } from '@/types/exercise'
import { ExerciseService } from '@/services/exerciseService'

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
  const [exercises, setExercises] = useState<ExerciseSearchResult[]>(mockExercises)
  const machineService = new MachineService()
  const exerciseService = new ExerciseService()

  const [filteredMachines, setFilteredMachines] = useState<MachineSearchResult[]>(machines.sort((a, b) => a.name.localeCompare(b.name)))
  const [filteredExercises, setFilteredExercises] = useState<ExerciseSearchResult[]>(exercises.sort((a, b) => a.name.localeCompare(b.name)))

  const Search = (query: string) => {
    if(selectedList == ListType.MACHINES)
    {
      const data = machines.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      data.sort((a, b) => a.name.localeCompare(b.name))
      
      setFilteredMachines(data);
    }
    else
    {
      const data = exercises.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      data.sort((a, b) => a.name.localeCompare(b.name))
      setExercises(data);
    }
  }

  useEffect(() => {
    machineService.getAllMachines().then((ms) => {
      setMachines(ms)
      setFilteredMachines(ms.sort((a, b) => a.name.localeCompare(b.name)));
    }).catch(error => {
      console.error("Failed to fetch machines:", error);
    });
    exerciseService.getAllExercises().then((es) => {
      setExercises(es)
      setFilteredExercises(es.sort((a, b) => a.name.localeCompare(b.name)));
    }).catch(error => {
      console.error("Failed to fetch exercises:", error);
    });
  }, [])

  const switchList = (listType: ListType) => {
    console.log(listType)
    setSelectedList(listType)
    if(listType == ListType.EXERCISES)
      setFilteredExercises(exercises.sort((a, b) => a.name.localeCompare(b.name)))
    else
      setFilteredMachines(machines.sort((a, b) => a.name.localeCompare(b.name))) // corrected to setFilteredMachines
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
                filteredMachines.map(m => (
                  <View className='py-1 w-full h-auto' key={m.id}>
                    <MachineListItem machineName={m.name} image={m.imageUrl} info={m.muscleNames.join(", ")}/>
                  </View>
                ))
              ) : (
                filteredExercises.map(e => (
                  <View className='py-1 w-full h-auto' key={e.id}>
                    <ExerciseListItem exerciseName={e.name} image={e.imageUrl} info={e.muscleNames.join(", ")}/>
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