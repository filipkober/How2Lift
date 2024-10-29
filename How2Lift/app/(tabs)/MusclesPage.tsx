import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const MusclesPage = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>MusclesPage</Text>
      <Link href="/ScanPage" className="text-cyan-400">
        Use buttons instead of links
      </Link>
    </View>
  )
}

export default MusclesPage