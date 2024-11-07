import WhiteTextPanel from '@/components/ExercisesPage/WhiteTextPanel';
import { Link } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ExercisesPage = ({navigation}: any) => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center bg-gray-600' >
       <WhiteTextPanel></WhiteTextPanel>
    </SafeAreaView>
  )
}

export default ExercisesPage