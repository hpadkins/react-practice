import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Main({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
        <Button
          title="Go to Second Screen"
          onPress={() => navigation.navigate('Second')}
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