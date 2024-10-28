import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const index = () => {
  return (
    <View  className='flex-1 justify-center items-center'>
      <Link href="/ScanPage">Loading... (kliknij)</Link>
    </View>
  )
}

export default index