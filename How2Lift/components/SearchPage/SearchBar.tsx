import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

type SearchBarProps = {
  onSearch: (query: string) => void;
  placeholder?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = 'Search...' }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim().length > 0)
    {
      onSearch(query);
    }
  };

  return (
    <View className="flex-row flex w-full items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
      <TextInput
        className="flex text-gray-700 px-2 mx-4 w-8"
        placeholder={placeholder}
        placeholderTextColor="#B0B0B0"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={handleSearch} className="ml-2">
        <Ionicons className='' size={40} name={'search-sharp'} color={'gray'}/>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
