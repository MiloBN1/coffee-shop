import React, { useEffect, useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View, } from './Themed';
import * as Font from 'expo-font';
export default function EditScreenInfo({ path }: { path: string }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Sora-Regular': require('../assets/fonts/Sora-VariableFont_wght.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Показать загрузку или пустой экран
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Main-Page_Banner.png')} // путь к изображению
        style={{ height:500, marginTop:20}}
        resizeMode="cover"
      />
      <Text style={styles.text}>Fall in Love with {'\n'} Coffee in Blissful {'\n'} Delight!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // растянуть на весь экран
    justifyContent: 'flex-start', // центрировать по вертикали
    alignItems: 'center', // центрировать по горизонтали
    backgroundColor: '#000', // цвет фона
    width:'100%'
  },
  text: {
    fontFamily: 'Sora-Regular',
    fontSize: 32,
    fontWeight: '400',
    marginTop: 10,
    textAlign: 'center',
  },
});
