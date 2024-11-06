import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, View } from 'react-native';
import ExercisesPage from './ExercisesPage';
import MusclesPage from './MusclesPage';
import ScanPage from './ScanPage';
import SearchPage from './SearchPage';
import SettingsPage from './SettingsPage';


SplashScreen.preventAutoHideAsync();
const Tabs = createBottomTabNavigator(); //<TabsParamList>

//stylizuj to olo, jeśli chcesz lepsze tło do navbara
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute" as const,
    bottom: 0,
    right: 0,
    left: 0,
    borderTopWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#000",
  } as const
};

interface ScreenDimensions {
  width: number;
  height: number;
}

export default function TabsLayout()
{
  //const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  //const rW = (screenWidth * 25) / 100;
  //zmień aqua na primary albo coś
  
  const [screenDimensions, setScreenDimensions] = useState<ScreenDimensions>({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = Dimensions.get('window');
      setScreenDimensions({ width, height });
    };
    const subscription = Dimensions.addEventListener('change', handleResize);
    
    return () => {
      subscription.remove();
    };
  }, []);


  return (
    <>
        <Tabs.Navigator
        screenOptions={screenOptions}
        initialRouteName="Scan"
        >
          <Tabs.Screen
            name='Exercises'
            component={ExercisesPage}
            options={{
            title: 'Exercises',
            tabBarIcon: ({focused})=>(
              <View className='items-center'>
                <Ionicons className='' size={focused? 42: 40} name={focused ? 'barbell' : 'barbell-outline'} color={focused? 'aqua' :'white'}/>
              </View>
            )
          }}/>

          <Tabs.Screen
            name='Muscles'
            component={MusclesPage}
            options={{
            title: 'Muscles',
            tabBarIcon: ({focused})=>(
              <View className='items-center'>
                {!focused?
                // eksperyment
                <Ionicons className='' size={36} name={'body'} color={"white"}/>
                :
                <MaterialCommunityIcons  className='' size={42} name={'weight-lifter'} color={"aqua"}/>
                }
                {/* <Text style={{ color: focused ? 'aqua' : 'white' }}>Muscles</Text> */}
              </View>
            )
          }}
          />

          <Tabs.Screen
            name="Scan"
            component={ScanPage}
            options={{
            title: "Scan",
            tabBarIcon: ({focused})=>(
              <View
              style={{ width: screenDimensions.width/9+35, height: screenDimensions.width/9+35 }} /*losowa funkcja liniowa bo czemu by nie */
              className={`items-center bg-gray-600 rounded-t-full content-center flex p-4 justify-center`}>
              {/* ${Platform.OS == "ios" ? 'w-[4.5rem] h-[4.5rem]' : 'w-[5rem] h-[5rem]'} */}
                <Image
                  source={focused?
                    require('../../assets/images/Tabs/camera.png')
                    :
                    require('../../assets/images/Tabs/camera-outline.png')
                  }
                  style={focused?
                  {
                    width: (screenDimensions.width/9+35)*0.6, // fragile (screenDimensions.width/9+35)*0.6
                    height: (screenDimensions.width/9+35)*0.6,
                    marginBottom: Math.max(0,(screenDimensions.width/40-10)), // fragile (screenDimensions.width/40-10)
                    tintColor: 'aqua'
                  }
                  :
                  {
                    width: (screenDimensions.width/9+35)*0.6-2,
                    height: (screenDimensions.width/9+35)*0.6-2,
                    marginBottom: Math.max(0,(screenDimensions.width/40-10)),
                    tintColor: 'white'
                  }}
                />
              </View>
            )
          }}/>
          <Tabs.Screen
            name='Search'
            component={SearchPage}
            options={{
            title: 'Search',
            tabBarIcon: ({focused})=>(
              <View className='items-center'>
                <Ionicons className='' size={focused? 40: 38} name={focused ? 'search-sharp' : 'search-sharp'} color={focused? 'aqua' :'white'}/>
              </View>
            )
          }}/>
                    <Tabs.Screen
            name='Settings'
            component={SettingsPage}
            options={{
            title: 'Settings',
            tabBarIcon: ({focused})=>(
              <View className='items-center'>
                <Ionicons className='' size={focused? 40: 38} name={focused ? 'options' : 'options-outline'} color={focused? 'aqua' :'white'}/>
              </View>
            )
          }}/>

        </Tabs.Navigator>
    </>
  );
}
