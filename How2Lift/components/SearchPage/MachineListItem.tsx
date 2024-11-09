import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type SearchBarProps = {
  machineName? : string;
  info? : string;
  image? : { uri: string } | null;
};

const MachineListItem = ({ machineName, info, image=null }: SearchBarProps) => {

  //const placeholderImage = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  const placeholderImage = {uri: '../../assets/images/example1.jpg'};

  const OpenMachinePage = () => {
      console.log("opened machine page")
  }

  return (
    <View className="flex flex-row w-[100%] px-1 h-auto rounded-[10px] shadow-sm border-solid border-2 border-gray-700 bg-white justify-between items-center">
      <View className="w-[20vw] h-[20vw] p-1 translate-x-[-4px]">
        <Image
        source={image?.uri? image : placeholderImage}
        resizeMode="cover"
        className={` w-full h-full object-contain justify-center flex-row rounded-[8px]`}
        />
      </View>
      <View className="w-[calc(65vw-64px)] h-[20vw] py-2 translate-x-[-8px] flex flex-col items-start justify-between">
        <Text className="font-quicksand_bold  text-[5vw]">{machineName? machineName : "Torture rack"}</Text>
        <Text className="font-quicksand  text-[3.5vw]">{info? info : "Shoulders, Back, Somatosensory cortex"}</Text>
      </View>
      <TouchableOpacity
        onPress={OpenMachinePage}
        className="w-[15vw] h-[20vw] flex justify-center items-center translate-x-[4px]"
      >
        <Image
          source={{ uri: "../../assets/images/icons/ar_black.png"}}
          resizeMode="cover"
          className={`w-full h-full object-contain `}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MachineListItem;
