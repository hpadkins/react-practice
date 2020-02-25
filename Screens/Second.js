import React, { Component }from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';

export default class Second extends Component {



  constructor(props: Props) {
    super(props);
    this.state = {answers: {one: "", two: ""}};

  }
    
  render() {
    return (
      <View style={styles.container}>

  
        <Text style={{padding: 10}}> What is the Capital of Oregon?</Text>
        <TextInput 
          style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(answer) => this.setState({answers:{one:answer}})}
          value={this.state.answers.one}
        />
        
        {/* <Text style={{padding: 10}}>
          You entered: {this.state.answers.one}
        </Text> */}
        <TouchableOpacity style ={{
          backgroundColor: '#7a42f4',
          padding: 10,
          margin: 15,
          height: 40,
        }}>
          <Text> Submit </Text>
        </TouchableOpacity>
       {/* <CheckBox
        title = "test"
        checked={this.state.checked}
        /> */}
        <Button
          title="Finish!"
          onPress={() => this.props.navigation.navigate('Third')}
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