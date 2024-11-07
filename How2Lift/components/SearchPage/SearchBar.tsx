import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

type SearchBarProps = {
  onSearch: (query: string) => void;
  placeholder?: string;
  height?: number;
};

const SearchBar = ({ onSearch, placeholder = "Search...", height = 40 }: SearchBarProps) => {

  const [query, setQuery] = useState("");
  const handleSearch = () => {
    if (query.trim().length > 0)
    {
      onSearch(query);
    }
  };

  return (
    <View className="flex flex-row w-[100%] px-1 h-auto rounded-[10px] shadow-sm border-solid border-2 border-gray-700 bg-white justify-between items-center">
      <TextInput
        className={`flex outline-none w-full p-1`} //static
        style={{ fontSize: height / 2, height: height }} //dynamic
        placeholder={placeholder}
        placeholderTextColor="#B0B0B0"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity
        onPress={handleSearch}
        className="bg-transparent"
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
