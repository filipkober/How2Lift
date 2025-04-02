import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";


type SearchBarProps = {
  machineName? : string;
  info? : string;
  image? : string | null;
  setFilter: () => void;
};

const MachineListItem = ({ machineName, info, image=null, setFilter }: SearchBarProps) => {
  const placeholderImage = require('../../assets/images/example1.jpg');

  const OpenMachinePage = () => {
      setFilter();
  }
  return (
    <View className="overflow-hidden flex flex-row w-full h-auto rounded-[10px] shadow-sm border-2 border-gray-700 bg-white items-center">
      {/* Left Image - Fixed Width 20vw */}
      <View className="w-[20vw] h-[20vw] p-1 overflow-hidden">
        <Image
          source={image ? { uri: image } : placeholderImage}
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
          {machineName || "Torture rack"}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="font-quicksand text-[3.5vw] w-full"
        >
          {info || "Shoulders, Back, Somatosensory cortex"}
        </Text>
      </View>

      {/* Right Arrow - Fixed Width 15vw */}
      <TouchableOpacity
        onPress={OpenMachinePage}
        className="w-[15vw] h-[20vw] flex justify-center items-center"
      >
        <MaterialCommunityIcons name="arrow-right" size={48} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default MachineListItem;
