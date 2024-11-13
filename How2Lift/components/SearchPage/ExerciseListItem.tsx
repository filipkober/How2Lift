import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type SearchBarProps = {
  exerciseName? : string;
  info? : string;
  image? : { uri: string } | null;
};

const ExerciseListItem = ({ exerciseName, info, image=null }: SearchBarProps) => {

  const placeholderImage = {uri: '../../assets/images/example2.jpg'};

  const OpenExercisePage = () => {
      console.log("opened exercise page")
  }

  return (

    <View className="overflow-hidden flex flex-row w-full h-auto rounded-[10px] shadow-sm border-2 border-gray-700 bg-white items-center">
    {/* Left Image - Fixed Width 20vw */}
    <View className="w-[20vw] h-[20vw] p-1 overflow-hidden">
      <Image
        source={image?.uri ? image : placeholderImage}
        resizeMode="cover"
        className="w-full h-full rounded-md overflow-hidden"
      />
    </View>

    {/* Middle Text - Flexible Width */}
    <View className="flex-1 h-[20vw] px-2 pb-2 flex flex-col justify-between items-start">
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        adjustsFontSizeToFit
        className="font-quicksand_bold text-[5vw]"
      >
        {exerciseName || "Flagellation"}
      </Text>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        adjustsFontSizeToFit
        className="font-quicksand text-[3.5vw] w-full"
      >
        {info || "Shoulders, Back, Somatosensory cortex"}
      </Text>
    </View>

    {/* Right Arrow - Fixed Width 15vw */}
    <TouchableOpacity
      onPress={OpenExercisePage}
      className="w-[15vw] h-[20vw] flex justify-center items-center"
    >
      <Image
        source={{ uri: "../../assets/images/icons/ar_black.png" }}
        resizeMode="cover"
        className="w-full h-full object-contain"
      />
    </TouchableOpacity>
  </View>
  );
};

export default ExerciseListItem;
