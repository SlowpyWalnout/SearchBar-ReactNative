// SearchBar.js
import {TextInput, StyleSheet} from 'react-native';
import React from 'react';

const SearchBar = ({value, onChangeText}) => {
    return(
        <TextInput
            placeholder="Search Products..."
            multiline={false}
            onChangeText={onChangeText}
            value={value}
            style={styles.searchBar}
        />
    )
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 50,
        paddingLeft: 20,
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
    },
});

export default SearchBar;