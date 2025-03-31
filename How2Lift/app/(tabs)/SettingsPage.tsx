import Checkbox from '@/components/default/Checkbox'
import Divider from '@/components/default/Divider'
import NavigationButton from '@/components/default/NavigationButton'
import { dataService } from '@/services/dataService'
import { defaultSettings, SettingsType } from '@/types/settings'
import { useEffect, useState } from 'react'
import { Platform, SafeAreaView, StatusBar, Text, View } from 'react-native'

const SettingsPage = () => {

  const [settings, setSettings] = useState(defaultSettings)

  useEffect(() => {
    dataService.getSettings().then(setSettings);
  }, []);

  
  const handleSaveSettings = (newSettings: Partial<SettingsType>) => {
    dataService.updateSettings(newSettings);
    setSettings({ ...settings, ...newSettings });
  };

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
          <Checkbox checked={settings.vibrations} setChecked={(checked: boolean) => {
            handleSaveSettings({ vibrations: checked });
          }} />
          <Text className='text-text text-4xl m-4'>Enable Vibrations</Text>
        </View>
        <View className='flex flex-row items-center ml-4'>
          <Checkbox checked={settings.useLbs} setChecked={(checked: boolean) => {
            handleSaveSettings({ useLbs: checked });
          }} />
          <Text className='text-text text-4xl m-4'>Use Lbs</Text>
        </View>
        <View className='flex flex-row items-center ml-4'>
          <Checkbox checked={settings.superSecretSettings} setChecked={(checked: boolean) => {
            handleSaveSettings({ superSecretSettings: checked });
          }} />
          <Text className='text-text text-4xl m-4'>Super secret settings</Text>
        </View>
        <Text className='text-4xl text-text ml-4 my-2'>Information</Text>
      <Divider />
      <Text className='text-3xl text-text ml-4'><Text className='font-bold'>Contact email: </Text> support@how2lift.com</Text>
      <Text className='text-3xl text-text ml-4 mt-4'><Text className='font-bold'>Version: </Text> 1.0.0</Text>
      <NavigationButton screenName='PrivacyPolicy' text='Privacy Policy' textStyle='text-4xl text-text ml-4 mt-4' className='ml-4 mt-4 w-[90%]' />
      <NavigationButton screenName='ResetData' text='Remove All My Data' textStyle='text-4xl text-text ml-4 mt-4 color-red-600' className='ml-4 mt-4 w-[90%]' />
      </View>
    </View>
  </SafeAreaView>
  )
}

export default SettingsPage