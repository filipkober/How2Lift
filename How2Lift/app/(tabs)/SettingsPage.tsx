import Checkbox from '@/components/default/Checkbox'
import Divider from '@/components/default/Divider'
import { useState } from 'react'
import { Platform, SafeAreaView, StatusBar, Text, View } from 'react-native'

const SettingsPage = () => {

  const [enableVibrations, setEnableVibrations] = useState(false)

  return (
    <SafeAreaView
    className="flex justify-center h-full flex-col bg-black w-full"
    style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
  >
    <View className="flex w-full h-full bg-background">
      <View className='flex-1'>
        <Text className='text-4xl text-text ml-4'>General</Text>
        <Divider />
        <View className='flex flex-row items-center ml-4'>
          <Checkbox checked={enableVibrations} setChecked={setEnableVibrations} />
          <Text className='text-text text-4xl m-4'>Enable Vibrations</Text>
        </View>
      </View>
    </View>
  </SafeAreaView>
  )
}

export default SettingsPage