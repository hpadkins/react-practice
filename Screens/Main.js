import React, { Component }from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
        <Button
          title="Go to Second Screen"
          onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});