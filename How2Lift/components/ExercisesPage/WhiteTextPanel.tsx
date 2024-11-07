import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WhiteRectangleWithText: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.text}>This is inside a white rectangle</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 250,           // Width of the rectangle
    height: 150,          // Height of the rectangle
    backgroundColor: 'white', // White background
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    borderWidth: 1,       // Optional: adds border around the rectangle
    borderColor: 'black', // Optional: border color
    borderRadius: 10,     // Optional: rounded corners
    padding: 10,          // Optional: padding inside the rectangle
  },
  text: {
    fontSize: 18,         // Font size of the text
    color: 'black',       // Text color
  }
});

export default WhiteRectangleWithText;
