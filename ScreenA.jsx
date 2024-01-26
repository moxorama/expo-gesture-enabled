import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenA = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen A</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenB')} style={{padding: 8, backgroundColor: '#ccc', marginTop: 8, borderRadius: 2}}>
        <Text>Go to Screen B</Text>
      </TouchableOpacity>
    </View>
  )
}

export { ScreenA };