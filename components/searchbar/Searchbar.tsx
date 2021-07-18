import { SearchBar } from 'react-native-elements';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const Searchbar = () => {
    const [search, setSearch] = useState<string>('')

    const updateSearch = (input: string) => {
    setSearch(input);
  };

  return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    )
  
}