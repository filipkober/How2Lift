import { Link } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView, StatusBar, Text, View } from 'react-native';

const MusclesPage = () => {
  const [view, setView] = useState<'front' | 'rear'>('front');

  const handleMuscleClick = (muscleName: string) => {
    Alert.alert(`You clicked on ${muscleName}`);
  };
  
  return (
    <SafeAreaView
        className="flex justify-center h-full flex-col bg-black w-full"
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
      >
        <View className="flex w-full h-full bg-background">
          <View className='flex-1 justify-center items-center'>
            <Text>MusclesPage</Text>
            <Link href="/ScanPage" className="text-cyan-400">
              Use buttons instead of links
            </Link>
          </View>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  diagramContainer: {
    width: '80%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
});

export default MusclesPage;
