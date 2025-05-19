import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://www.turijobs.com/blog/wp-content/uploads/2018/12/Chef-en-Australia.jpg' }} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Image
            source={{ uri: 'https://www.logolynx.com/images/logolynx/2e/2e57b0a99ef5cd43560157dc97d9f437.jpeg' }} 
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.subText}>to Chef Christoffel</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Menu')}
          >
            <Button title="Explore Menu" onPress={() => navigation.navigate('Home')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: '30%', 
  },
  logo: {
    width: 100, 
    height: 100, 
    marginBottom: 20, 
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 22,
    color: 'gray',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffffff00',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});