import { SplashScreen, Tabs } from "expo-router";

import { useFonts } from "expo-font";
import "../styles/global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout()
{
  
  const [fontsLoaded, fontsError] = useFonts({
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
  })
  return (
    <>
    {/* <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}}/>
    </Stack> */}
    <Tabs>
      <Tabs.Screen
        name="testus"
        options={{
          title: 'suffer',
          headerShown: false
        }}
      />
    </Tabs>
    </>
  );
}
