import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, } from './Themed';
export default function EditScreenInfo({ path }: { path: string }) {
  
  return (
      <View style={styles.container}>
        <Text>Adsasdasdasd</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // растянуть на весь экран
    justifyContent: 'flex-start', // центрировать по вертикали
    alignItems: 'center', // центрировать по горизонтали
    backgroundColor: '#fff', // цвет фона
    width:'100%',
  },
});
