import ExerciseListItem from '@/components/SearchPage/ExerciseListItem'
import MachineListItem from '@/components/SearchPage/MachineListItem'
import SearchBar from '@/components/SearchPage/SearchBar'
import mockExercises from '@/mocks/exercises'
import mockMachines from '@/mocks/machines'
import { ExerciseService } from '@/services/exerciseService'
import { MachineService } from '@/services/machineService'
import { ExerciseSearchResult } from '@/types/exercise'
import { MachineSearchResult } from '@/types/machine'
import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Animated, Dimensions, Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SearchRouteProp } from '../navigation/navigationTypes'

type Machine = {
  id: number,
  name: string,
  info: string,
  image: {
    uri: string,
  }
}

//to chyba nieaktualne
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

  const route = useRoute<SearchRouteProp>();
  const screenWidth = Dimensions.get('window').width;
  const [animation] = useState(new Animated.Value(0));

  const [filteredMachineIds, setFilteredMachineIds] = useState<number[]>([]);

  const [query, setQuery] = useState('');

  const [selectedList, setSelectedList] = useState<ListType>(ListType.MACHINES); //0 - machines 1 - exercises
  const machineService = new MachineService()
  const exerciseService = new ExerciseService()
  const [machines, setMachines] = useState<MachineSearchResult[]>(mockMachines)
  const [exercises, setExercises] = useState<ExerciseSearchResult[]>(mockExercises)
  const [filteredMachines, setFilteredMachines] = useState<MachineSearchResult[]>(
    machines.sort((a, b) => a.name.localeCompare(b.name)))
  const [filteredExercises, setFilteredExercises] = useState<ExerciseSearchResult[]>(
    exercises.sort((a, b) => a.name.localeCompare(b.name)))

  const muscleForSearch = route?.params?.muscleName || null;

  const handleQueryChange = (text: string) => {
    setQuery(text);
  };

  const Search = () => {
    console.log("Searching for: ", query)
    //query distillation
    let refinedQuery = query
    let queryMuscles: string[] = []
    if(query.includes("|"))
    {
      const crudeQuery = query.trim().toLowerCase().split("|")
      queryMuscles = crudeQuery[0].split(",").map((m) => m.trim()).filter(m => m != null && m !== "");
      refinedQuery = crudeQuery[1].trim() || ""
    }
    console.log("Q: ", refinedQuery," M: ", queryMuscles)
    if(selectedList == ListType.MACHINES)
    {
      const data = machines.filter((item) =>
        item.name.toLowerCase().includes(refinedQuery.toLowerCase())
        && queryMuscles.every((m) =>
          item.muscleNames.some((muscle) => muscle.toLowerCase() === m))
      )
      data.sort((a, b) => a.name.localeCompare(b.name))
      setFilteredMachines(data);
    }
    else
    {
      console.log(exercises)
      const data = exercises.filter((item) =>
        item.name.toLowerCase().includes(refinedQuery.toLowerCase())
        && queryMuscles.every((m) =>
          item.muscleNames.some((muscle) => muscle.toLowerCase() === m))
      )
      data.sort((a, b) => a.name.localeCompare(b.name))
      setFilteredExercises(data);
    }
  }

  useEffect(() => {
    Search();
  }, [query]);
  useEffect(() => {
    Search();
  }, [exercises,machines]);

  useEffect(() => {
    console.log("Muscle for search: ", muscleForSearch)
    if(muscleForSearch == null || muscleForSearch == "")
    {
      setQuery("");
    }
    else
    {
      setQuery(muscleForSearch+"|");
    }
  },[muscleForSearch])

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
    setSelectedList(listType)
    if(listType == ListType.EXERCISES)
    {
      setExercises([...exercises].sort((a, b) => a.name.localeCompare(b.name)));
    }
    else
    {
      setMachines([...machines].sort((a, b) => a.name.localeCompare(b.name)));
    }
    Animated.spring(animation, {
      toValue: (listType == ListType.EXERCISES ? 1 : 0) * screenWidth / 2,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    setFilteredExercises(fe => fe.filter(e => filteredMachineIds.includes(e.machineId)));
  }, [filteredMachineIds])


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
            <SearchBar value={query} onSearch={Search} height={36} onChangeText={handleQueryChange}/>
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
                    <ExerciseListItem exerciseName={e.name} image={e.imageUrl} info={e.muscleNames.join(", ")} exerciseId={e.id} />
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