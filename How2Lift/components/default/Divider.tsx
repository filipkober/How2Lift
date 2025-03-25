import React from 'react'
import { View } from 'react-native'

interface Props {
  className?: string;
}
export default function Divider({ className }: Props) {
  return (
    <View className={`h-1 w-full bg-text ${className}`} />
  )
}
