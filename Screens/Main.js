import React, { Component } from 'react';
import {CheckBox} from 'react-native-elements';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: false};
  }

  checking = () => {
    this.setState( {isChecked: !this.state.isChecked})
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Start Quiz!"
          onPress={() => this.props.navigation.navigate('Second')}
        />
        <CheckBox
          title = 'Check Here'
          value= {this.state.isChecked}
          onChange = { () => this.checking()}
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

export default Main;