import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { router } from 'expo-router';

export default function FirstScreen() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
      useEffect(() => {
        async function loadFonts() {
          await Font.loadAsync({
            'Sora-Regular': require('../assets/fonts/Sora/Sora-Regular.ttf'),
            'Sora-SemiBold': require('../assets/fonts/Sora/Sora-SemiBold.ttf'),
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
              <ImageBackground
                style={styles.imageBackground}
                imageStyle = {styles.imageStyle}
                source={require('../assets/images/Main-Page_Banner.png')}
                >
                
                <View style={styles.blackBlock}>
                  <Text style={styles.text}>Fall in Love with {'\n'} Coffee in Blissful {'\n'} Delight!</Text>
                  <Text style={styles.subText}>Welcome to our cozy coffee corner, where {'\n'} every cup is a delightful for you.</Text>
                  <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/home')}>
                    <Text style={styles.btnText}>Get Started</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // растянуть на весь экран
    justifyContent: 'flex-start', // центрировать по вертикали
    alignItems: 'center', // центрировать по горизонтали
    backgroundColor: '#000', // цвет фона
    width:'100%',
  },
  text: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 32,
    marginTop: 10,
    color:'#fff',
    textAlign: 'center',
  },
  subText:{
    fontFamily: 'Sora-Regular',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    color:'#A2A2A2',
    textAlign: 'center',
  },
  imageBackground: {
    width: '100%', // Задаем ширину 100% экрана
    height: '100%', // Высота фона
    justifyContent: 'flex-end', // Центрируем контент по вертикали
    alignItems: 'center', // Центрируем контент по горизонтали
  },
  blackBlock: {
    width:'100%',
    height:360,
    backgroundColor: '#0004', // Черный фон
    alignItems:'center'
  },
  imageStyle: {
    marginTop:20,
    height:536
  },
  button:{
    borderRadius:16,
    paddingTop:16,
    paddingBottom:16,
    marginTop:32,
    backgroundColor:'#C67C4E',
    width:'80%',
    alignItems:'center'
  },
  btnText:{
    fontFamily: 'Sora-Regular',
    fontSize: 16,
    color:'#fff',
  }
});
