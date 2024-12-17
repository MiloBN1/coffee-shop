import LocationSelect from '@/components/HomeScreenTools/LocationSelect';
import { StyleSheet, View,Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{paddingHorizontal:24}}>
        <LocationSelect></LocationSelect>
    </View>
  );
}

const styles = StyleSheet.create({

});
