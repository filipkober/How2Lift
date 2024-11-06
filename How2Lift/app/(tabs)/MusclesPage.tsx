import { Link } from 'expo-router'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MuscleDiagram from '@/components/MuscleDiagram'
import { SafeAreaView } from 'react-native-safe-area-context'

const MusclesPage = () => {
  return (
    <SafeAreaView>
      <Text>MusclesPage</Text>
      <View style={styles.diagramContainer}>
        <MuscleDiagram />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  diagramContainer: {
    width: '80%',
    height: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'visible',
  },
});


export default MusclesPage
