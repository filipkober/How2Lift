import { Link } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const ScanPage = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>ScanPage</Text>
      <Link href="/" className="text-cyan-400"> Fuck go back</Link>
      <Text className="text-2xl text-indigo-600">Test &λΨᾛΎώὯϗΔ</Text>

      <Button title="Go to About" onPress={() => {}} />

      <Text className="text-cyan-600">
        Zażółć gęślą jaźń
      </Text>
      <Text className="text-cyan-600 font-quicksand">
        Zażółć gęślą jaźń
      </Text>
      <Text className="text-cyan-600 font-quicksand_bold">
        Zażółć gęślą jaźń
      </Text>
    </View>
  )
}

export default ScanPage