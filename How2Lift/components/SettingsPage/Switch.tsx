import React, { useState } from "react";
import { Animated, Dimensions, TouchableOpacity, View } from "react-native";

type SwitchProps = {
  value? : boolean;
  OnChange? : (val?: boolean) =>{};
  defaulf? : number;
  activePrimaryColor?: string;
  activeSecondaryColor?: string;
};

const ExerciseListItem = ({ value, OnChange, defaulf, activePrimaryColor = "#00dcff", activeSecondaryColor = "#abf4ff", }: SwitchProps) => {
  const { width: screenWidth } = Dimensions.get("window");
  const switchWidth = screenWidth * 0.12;
  
  const [animation] = useState(new Animated.Value(-switchWidth/4));
  const [enabled, setEnabled] = useState<number>(0);
  
  const switchList = (index?: number) => {
    var newstate = (enabled+1)%2  
    setEnabled(index || newstate)
    console.log(newstate)
    Animated.spring(animation, {
      toValue: newstate * switchWidth/2 - switchWidth/4,
      useNativeDriver: false,
    }).start();
  };

  return (

    <TouchableOpacity
      className="flex flex-row w-[12vw] h-[6vw] items-center justify-center"
      onPressIn={()=>{}}
      onPressOut={()=>{}}
      onPress={() => switchList()}>
      <View className="h-[calc(100%-2vw)] w-[calc(100%-2vw)] rounded-full" style={{backgroundColor: enabled? activeSecondaryColor: "#dedede"}}></View>
      <Animated.View          
        style={{
          position: 'absolute',
          bottom: 0,
          height: "100%",
          backgroundColor: enabled ? activePrimaryColor : "#bcbcbc",
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
