import React, { Component }from 'react';
import {CheckBox} from 'react-native-elements';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';



export default class Main extends Component {
  construtor(props) {

  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Start Quiz!"
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