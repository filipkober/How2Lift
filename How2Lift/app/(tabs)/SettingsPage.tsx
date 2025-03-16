import Checkbox from '@/components/default/Checkbox'
import Divider from '@/components/default/Divider'
import NavigationButton from '@/components/default/NavigationButton'
import { useState } from 'react'
import { Platform, SafeAreaView, StatusBar, Text, View } from 'react-native'

const SettingsPage = () => {

  const [enableVibrations, setEnableVibrations] = useState(false)
  const [useLbs, setUseLbs] = useState(false)
  const [superSecretSettings, setSuperSecretSettings] = useState(false)

  return (
    <SafeAreaView
    className="flex justify-center h-full flex-col bg-black w-full"
    style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
  >
    <View className="flex w-full h-full bg-background">
      <View className='flex-1'>
        <Text className='text-4xl text-text ml-4 mb-2'>General</Text>
        <Divider />
        <View className='flex flex-row items-center ml-4'>
          <Checkbox checked={enableVibrations} setChecked={setEnableVibrations} />
          <Text className='text-text text-4xl m-4'>Enable Vibrations</Text>
        </View>
        <View className='flex flex-row items-center ml-4'>
          <Checkbox checked={useLbs} setChecked={setUseLbs} />
          <Text className='text-text text-4xl m-4'>Use Lbs</Text>
        </View>
        <View className='flex flex-row items-center ml-4'>
          <Checkbox checked={superSecretSettings} setChecked={setSuperSecretSettings} />
          <Text className='text-text text-4xl m-4'>Super secret settings</Text>
        </View>
        <Text className='text-4xl text-text ml-4 my-2'>Information</Text>
      <Divider />
      <Text className='text-3xl text-text ml-4'><span className='font-bold'>Contact email: </span> support@how2lift.com</Text>
      <Text className='text-3xl text-text ml-4 mt-4'><span className='font-bold'>Version: </span> 1.0.0</Text>
      <NavigationButton screenName='Muscles' text='Privacy Policy' textStyle='text-4xl text-text ml-4 mt-4' className='ml-4 mt-4' />
      <NavigationButton screenName='Muscles' text='Remove All My Data' textStyle='text-4xl text-text ml-4 mt-4 color-red-600' className='ml-4 mt-4' />
      </View>
    </View>
  </SafeAreaView>
  )
}

export default SettingsPage