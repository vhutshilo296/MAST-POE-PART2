import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation, route }: any) {
  const initialDishes = [
    { id: '1', name: 'Salad', price: 50, description: 'Fresh garden salad', course: 'starter' },
    { id: '2', name: 'Steak', price: 150, description: 'Grilled steak', course: 'main' },
    { id: '3', name: 'Pasta', price: 100, description: 'Creamy pasta', course: 'main' },
    { id: '4', name: 'Sushi', price: 120, description: 'Assorted sushi', course: 'starter' },
  ];

  const [dishes, setDishes] = useState(initialDishes);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  React.useEffect(() => {
    if (route.params?.newDish) {
      setDishes([...dishes, route.params.newDish]);
    }
  }, [route.params?.newDish]);

  const toggleItemSelection = (dish: any) => {
    if (selectedItems.includes(dish)) {
      setSelectedItems(selectedItems.filter(item => item.id !== dish.id));
    } else {
      setSelectedItems([...selectedItems, dish]);
    }
  };

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      Alert.alert('No items selected', 'Please select at least one item before proceeding.');
    } else {
      navigation.navigate('Checkout', { selectedItems });
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://th.bing.com/th/id/OIP.Mix9387rswrjOIh6G5mZDAHaFb?w=225&h=180&c=7&r=0&o=5&pid=1.7' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Menu</Text>

        {/* Display total number of menu items */}
        <Text style={styles.totalItems}>Total Menu Items: {dishes.length}</Text>

        <FlatList
          data={dishes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.item, selectedItems.includes(item) && styles.selectedItem]}
              onPress={() => toggleItemSelection(item)}
            >
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>({item.course})</Text>
              <Text>R {item.price.toFixed(2)}</Text>
            </TouchableOpacity>
          )}
        />

        <Button title="Add New Dish" onPress={() => navigation.navigate('AddDish')} />
        <Button
          title="Go to Checkout"
          onPress={handleCheckout}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  totalItems: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 5,
  },
  selectedItem: {
    backgroundColor: '#0eec5883',
  },
});