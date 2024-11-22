import Switch from '@/components/SettingsPage/Switch'
import React from 'react'
import { Image, Platform, SafeAreaView, StatusBar, Text, View } from 'react-native'

const SettingsPage = () => {
  return (
    <SafeAreaView
    className="flex justify-center h-full flex-col bg-black w-full"
    style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
  >
    <View className="flex justify-start flex-col items-start bg-background w-full h-full">
      <View className='w-full h-auto flex flex-row justify-between items-center p-2 bg-secondary shadow-bottom-md'>
        <View className='w-[0vw] h-[0vw] flex justify-center items-center bg-lime-300'>
          <Image
            source={{ uri: "../../assets/images/Icons/ar_black.png" }}
            resizeMode="cover"
            className="w-full h-full object-contain"
          />
        </View>
        <Text className="text-[7vw] font-quicksand_bold w-auto h-auto ">Settings</Text>
        <View className='w-[0vw] h-[0vw] flex justify-center items-center bg-lime-300'>
          <Image
            source={{ uri: "../../assets/images/Icons/ar_black.png" }}
            resizeMode="cover"
            className="w-full h-full object-contain"
          />
        </View>
      </View>
      <View className='w-full h-full flex p-2'>
        <View className='w-full h-auto flex flex-col p-3 bg-white rounded-[10px] items-start space-y-3 shadow-bottom-md'>
          <Text className="text-[5vw] font-quicksand_bold w-auto h-auto">General</Text>
          <View className='h-[1px] bg-gray-200 w-full'/>
          <View className='w-full flex flex-row justify-between'>
            <Text className="text-[100%] font-quicksand w-auto h-auto">Enable vibrations</Text>
            <Switch/>
          </View>
          <View className='w-full flex flex-row justify-between'>
            <Text className="text-[100%] font-quicksand w-auto h-auto">Super secret setting</Text>
            <Switch/>
          </View>
          <View className='w-full flex flex-row justify-between'>
            <Text className="text-[100%] font-quicksand w-auto h-auto">Example setting</Text>
            <Switch/>
          </View>
        </View>
      </View>
    </View>
  </SafeAreaView>
  )
}

export default SettingsPage