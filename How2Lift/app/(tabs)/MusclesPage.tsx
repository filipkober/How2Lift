import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const MusclesPage = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>MusclesPage</Text>
      <Link href="/" className="text-cyan-400">
        Enter the eternal void of the shadow realm
      </Link>
    </View>
  )
}

export default MusclesPage