import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, View } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const endPosition = screenHeight - 72;

const ScanIndicator = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateY, {
            toValue: endPosition, //endPosition
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    startAnimation();
  }, [translateY]);

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // zIndex: 20,
      }}
    >
      <Animated.View
        style={[
          {
            transform: [{ translateY }],
            position: 'absolute',
            width: "100%",
            height: 5,
            backgroundColor: 'aqua', //pozmieniasz olo wszystkie aqua na coś lepszego leniwy gejku
            top: 0,
            left: 0,
            // zIndex: 20,
          }
        ]}
      />
    </View>
  );
};

export default ScanIndicator;
