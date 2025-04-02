import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../styles/global.css";
import TabsLayout from './(tabs)/_layout';
import LoadingPage from './LoadingPage';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    
  const [fontsLoaded] = useFonts({
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack.Navigator initialRouteName="(tabs)">
      <Stack.Screen name="(tabs)" component={TabsLayout} options={{ headerShown: false }} />
      <Stack.Screen name="LoadingPage" component={LoadingPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
