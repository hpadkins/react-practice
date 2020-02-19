import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Second({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Second Screen</Text>
        <Button
          title="Go to Third Screen"
          onPress={() => navigation.navigate('Third')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});