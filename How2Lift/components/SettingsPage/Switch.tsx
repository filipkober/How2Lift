import React, { useState } from "react";
import { Animated, Dimensions, TouchableOpacity, View } from "react-native";

type SwitchProps = {
  value? : boolean;
  OnChange? : (val?: boolean) =>{};
  defaulf? : number;
};

const ExerciseListItem = ({ value, OnChange, defaulf }: SwitchProps) => {
  const { width: screenWidth } = Dimensions.get("window");
  const switchWidth = screenWidth * 0.12; // 12vw equivalent in pixels
  const switchHeight = screenWidth * 0.06; // 6vw equivalent in pixels
  
  const [animation] = useState(new Animated.Value(-switchHeight/2));
  const [enabled, setEnabled] = useState<number>(0);
  
  const switchList = (index?: number) => {
    var newstate = (enabled+1)%2  
    setEnabled(index || newstate)
    console.log(newstate)
    Animated.spring(animation, {
      toValue: newstate * switchHeight + switchHeight/2,
      useNativeDriver: false,
    }).start();
  };

  return (

    <TouchableOpacity
      className="flex bg-yellow-400 flex-row w-[12vw] h-[6vw] items-center justify-center"
      onPress={() => switchList()}>
      <View className="h-[calc(100%-2vw)] w-[calc(100%-2vw)] bg-lime-400 rounded-full"></View>
      <Animated.View          
        style={{
          position: 'absolute',
          bottom: 0,
          height: "100%",
          backgroundColor: enabled ? "#00dcff" : "gray",
          width: "50%",
          borderRadius: 9999,
          transform: [
            {
              translateX: animation,
            },
          ],
        }}
      />
    </TouchableOpacity>
  );
};

export default ExerciseListItem;
