import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from '../Themed'
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>('Shymkent');
  return (
    <View >
      <Text>Location</Text>
      <View style={{display:'flex'}}>
        <DropDownPicker
          open={open}
          value={value}
          items={[
            { label: 'Astana', value: 'Astana' },
            { label: 'Almaty', value: 'Almaty' },
            { label: 'Shymkent', value: 'Shymkent' },
          ]}
          setOpen={setOpen}
          setValue={setValue}
          placeholder="Select a location"
          style={styles.picker}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    width: '100%', // Ширина Pickera
    backgroundColor: 'transparent', 
    borderColor: 'transparent', // Цвет границы
    paddingLeft: 0, // Убираем отступ слева
    borderWidth:0,
    marginLeft:0
  },
});
