import React, { useState } from 'react';
import { View } from 'react-native';

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
    <View className="flex flex-row w-[100%] h-auto rounded-3xl bg-white p-8 justify-between m-8 shadow-sm border-solid border-2 border-gray-600">
      {/* <TextInput
        className="flex text-gray-700 w-16"
        placeholder={placeholder}
        placeholderTextColor="#B0B0B0"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={handleSearch} className="ml-2 w-2">
        <Ionicons className='' size={40} name={'search-sharp'} color={'gray'}/>
      </TouchableOpacity> */}
    </View>
  );
};

export default SearchBar;
