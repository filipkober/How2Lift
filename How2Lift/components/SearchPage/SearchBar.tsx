import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

type SearchBarProps = {
  value: string;
  onSearch: () => void;
  onChangeText: (text: string) => void;
  placeholder?: string;
  height?: number;
};

const SearchBar = ({ value, onSearch, onChangeText, placeholder = "Search...", height = 40 }: SearchBarProps) => {
  
  // const handleSearch = () => {
  //   if (value.trim().length > 0)
  //   {
  //     onSearch(value);
  //   }
  // };

  // const handleTextChange = (text: string) => {
  //   onChangeText(text);
  // };

  return (
    <View className="flex flex-row w-[100%] px-1 h-auto rounded-[10px] shadow-sm border-solid border-2 border-gray-700 bg-white justify-between items-center">
      <TextInput
        className={`flex outline-none p-1 w-[100%] min-w-0 min-h-0 font-quicksand`} //I got severe brain damage
        style={{ fontSize: height / 2, height: height, flex: 1 }} //dynamic
        placeholder={placeholder}
        placeholderTextColor="#B0B0B0"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSearch}
      />
      <TouchableOpacity
        onPress={onSearch}
        className="bg-transparent flex justify-center items-center"
        style={{ height: height, width: height }}
      >
        <Ionicons
          className=""
          size={height}
          name={"search-sharp"}
          color={"gray"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
