import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from '../Themed'
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [selectedValue, setSelectedValue] = useState<string>('java');

  return (
    <View >
      <Text>Select a language:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="javascript" />
        <Picker.Item label="Python" value="python" />
      </Picker>
      <Text >You selected: {selectedValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    
});
