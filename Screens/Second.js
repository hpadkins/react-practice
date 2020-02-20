import React, { Component }from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class Second extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Second Screen</Text>
        <Button
          title="Go to Third Screen"
          onPress={() => this.props.navigation.navigate('Third')}
        />
        <CheckBox
          title="CLick Here"
          checked={this.props.checked}
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