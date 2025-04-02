import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import MusclesFrontSvg from '../assets/svg/musclesFront.svg';
import MusclesRearSvg from '../assets/svg/musclesRear.svg';
import { G } from 'react-native-svg';

const MuscleDiagram = () => {
  const [view, setView] = useState<'front' | 'rear'>('front');

  const handleMuscleClick = (muscleName: string) => {
    Alert.alert(`You clicked on ${muscleName}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Toggle View"
        onPress={() => setView(view === 'front' ? 'rear' : 'front')}
      />

      {view === 'front' ? (
        <MusclesFrontSvg
          width="100%"
          height="100%"
          viewBox="0 0 661 1207"
          onPressIn={() => handleMuscleClick('front-view')}
        >
          <G id="calves" onPressIn={() => handleMuscleClick('calves')} />
          <G id="quads" onPressIn={() => handleMuscleClick('quads')} />
        </MusclesFrontSvg>
      ) : (
        <MusclesRearSvg
          width="100%"
          height="100%"
          viewBox="0 0 661 1207"
          onPressIn={() => handleMuscleClick('rear-view')}
        >
          <G id="hamstrings" onPressIn={() => handleMuscleClick('hamstrings')} />
          <G id="traps" onPressIn={() => handleMuscleClick('traps')} />
        </MusclesRearSvg>
      )}
    </View>
  );
};

export default MuscleDiagram;