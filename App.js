import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import SearchBar from "./Componets/SearchBar";
import ProductsList from "./Componets/ProductsList";
import products from "./data";

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredProducts(filtered);
  }

    return(
        <View style={styles.container}>
          <SearchBar value={search} onChangeText={handleSearch} />
            <ProductsList products={filteredProducts} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 50,
        padding: 5,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textDescription: {
        fontSize: 16,
    },
});

export default App;
