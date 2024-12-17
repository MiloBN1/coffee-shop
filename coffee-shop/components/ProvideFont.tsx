import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Font from 'expo-font';

// Создаем контекст
const FontContext = createContext(false);

export function useFontLoaded() {
  return useContext(FontContext);
}

export function FontProvider({ children }: { children: React.ReactNode }) {
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

  if (!fontsLoaded) return null; // Пока шрифты не загрузились, ничего не отображаем.

  return <FontContext.Provider value={fontsLoaded}>{children}</FontContext.Provider>;
}
