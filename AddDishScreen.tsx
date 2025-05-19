import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default function AddDishScreen({ navigation }: any) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const addDish = () => {
    if (dishName && description && !isNaN(Number(price)) && Number(price) > 0 && course) {
      const newDish = {
        id: Date.now().toString(),
        name: dishName,
        description: description,
        course: course,
        price: Number(price),
      };
      navigation.navigate('Home', { newDish });
    } else {
      alert('Please fill all fields correctly');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://www.tripsavvy.com/thmb/kL5B8z7NsopyNdBt0VOE0hdi3QI=/3865x2576/filters:fill(auto,1)/close-up-of-chef-in-kitchen-adding-salad-garnish-to-a-plate-with-grilled-fish--737175405-5b0c0d0a119fa8003715aef7.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Add a New Dish</Text>

        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          value={dishName}
          onChangeText={setDishName}
        />

        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />

        <TextInput
          style={styles.input}
          placeholder="Course (e.g., starter, main, dessert)"
          value={course}
          onChangeText={setCourse}
        />

        <TextInput
          style={styles.input}
          placeholder="Price (R)"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <Button title="Add Dish" onPress={addDish} />
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
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});