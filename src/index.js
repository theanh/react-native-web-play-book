import React from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

const Card = ({ children }) => {
  return (
    <View style={styles.card}>{children}</View>
  );
}

const Title = ({ children }) => {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

const Photo = ({ uri }) => {
  return (
    <Image source={{ uri }} style={styles.image} />
  );
}

const App = () => (
  <Card>
    <Title>App Card</Title>
    <Photo uri="/some-photo.jpg" />
  </Card>
)

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  image: {
    height: 40,
    marginVertical: 10,
    width: 40
  }
})

AppRegistry.registerComponent('MyApp', () => App)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('react-root') })
