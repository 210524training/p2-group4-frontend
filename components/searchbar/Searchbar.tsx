import { Button, SearchBar } from 'react-native-elements';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Picker from './Picker'

const Searchbar = () => {
    const [search, setSearch] = useState<string>('')

    const updateSearch = (input: string) => {
    setSearch(input);
  };

    const handleSearch = async() => {
      //get request 
    }

  return (
    <>
      <Picker />
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <Button
        onPress={() => handleSearch()}
        title="Search"
        />
    </>
    )
  
}