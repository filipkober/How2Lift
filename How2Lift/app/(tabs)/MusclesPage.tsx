import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FrontMuscles from '@/components/FrontMuscles';
import RearMuscles from '@/components/RearMuscles';

const MusclesPage = () => {
  const [view, setView] = useState<'front' | 'rear'>('front');

  const handleMuscleClick = (muscleName: string) => {
    Alert.alert(`You clicked on ${muscleName}`);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>MusclesPage</Text>
      <Button
          title="Toggle View"
          onPress={() => setView(view === 'front' ? 'rear' : 'front')}
        />
      <View style={styles.diagramContainer}>
        {view === 'front' ? (
          <FrontMuscles
            width={300}
            viewBox="0 0 661 1207"
            handleMuscleClick={handleMuscleClick} // Pass the function here
          />
        ) : (
          <RearMuscles
            width={300}
            viewBox="0 0 661 1207"
            handleMuscleClick={handleMuscleClick} // Add this in RearMuscles too
          />
        )}
      </View>
    </SafeAreaView>
  );
};

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
