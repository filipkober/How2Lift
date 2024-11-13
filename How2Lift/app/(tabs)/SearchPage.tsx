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
    { id: 0, name: "Treadmill", info: "Cardio, Legs", image: { uri: "https://images.unsplash.com/photo-1591940765155-0604537032a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlYWRtaWxsfGVufDB8fDB8fHww" }},
    { id: 1, name: "Leg Press Machine", info: "Quadriceps, Hamstrings, Glutes", image: { uri: "https://media.tenor.com/NDFafSQfq_kAAAAM/leg-press-machine.gif" }},
    { id: 2, name: "Lat Pulldown Machine", info: "Lats, Biceps, Shoulders", image: { uri: "https://media.tenor.com/VfwPJrw6tTEAAAAM/pulley-puxada-neutra.gif" }},
    { id: 3, name: "Cable Machine", info: "Chest, Shoulders, Triceps, Back", image: { uri: "https://media.tenor.com/HDD-1xSyxn4AAAAM/workout-time.gif" }},
    { id: 4, name: "Smith Machine", info: "Full Body, Squats, Presses", image: { uri: "https://media.tenor.com/eCXs6gZigQcAAAAM/incline-smith-bar-press.gif" }},
    { id: 5, name: "Seated Row Machine", info: "Upper Back, Lats, Biceps", image: { uri: "https://media.tenor.com/ft6FHrqty-8AAAAM/remada-pronada-maquina.gif" }},
    { id: 6, name: "Leg Curl Machine", info: "Hamstrings", image: { uri: "https://media1.tenor.com/m/veCnXWNXGI4AAAAd/femur-breaker-scp.gif" }},
    { id: 7, name: "Bench Press Machine", info: "Chest, Shoulders, Triceps", image: { uri: "https://media.tenor.com/vFJSvh8AvhAAAAAM/a1.gif" }},
    { id: 8, name: "Abdominal Crunch Machine Pro stuer ultra max", info: "Abs, Core", image: { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Trebuchet_Castelnaud.jpg/300px-Trebuchet_Castelnaud.jpg" }},
    { id: 9, name: "Pec Deck Machine", info: "Chest, Shoulders", image: { uri: "https://media.tenor.com/fUmzZiU_imsAAAAM/6reverse-machine-fly.gif" }},
    { id: 10, name: "Torture Rack", info: "", image: { uri: ""}}
  ])
  const [exercises, setExercises] = useState<Machine[]>([
    { id: 10, name: "test1", info: "testus", image: { uri: "https://legacy.reactjs.org/logo-og.png"}},
    { id: 11, name: "test2", info: "testus", image: { uri: "https://legacy.reactjs.org/logo-og.png"}},
    { id: 12, name: "", info: "", image: { uri: ""}}
  ])

  const [filteredData, setFiltredData] = useState<Machine[] | Exercise[]>(machines.sort((a, b) => a.name.localeCompare(b.name)))

  const Search = (query: string) => {
    console.log("search query: "+query)
    var data: Machine[] | Exercise[] = []
    if(selectedList == 0)
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

  const switchList = (index: number) => {
    console.log(index)
    setSelectedList(index)
    if(index==1)
      setFiltredData(exercises.sort((a, b) => a.name.localeCompare(b.name)))
    else
      setFiltredData(machines.sort((a, b) => a.name.localeCompare(b.name)))
    Animated.spring(animation, {
      toValue: index * screenWidth/2,
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
              (selectedList == 0)? (
                filteredData.map(m => (
                  <View className='py-1 w-full h-auto' key={m.id}>
                    <MachineListItem machineName={m.name} image={m.image} info={m.info}/>
                  </View>
                ))
              ) : (
                filteredData.map(m => (
                  <View className='py-1 w-full h-auto' key={m.id}>
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