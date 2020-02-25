import React, { Component }from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert} from 'react-native';

export default class Second extends Component {



  constructor(props) {
    super(props);
    this.state = {answers: {one: "", two: ""}};
  }

  reed = () => {
    //console.log(this.state.answers.one + " " +this.state.answers.two)
    if(this.state.answers.one == "Harriet" && this.state.answers.two == "Hummel")
    {

      alert(
        'Alert Title',
        'My Alert msg'
      )
    }
    else{
      alert("Wrong!!!!")
      this.setState({answers: {one: "", two: ""}});
    }
  }
    
  render() {
    return (
      <View style={styles.container}>

  
        <Text style={{padding: 10}}> What is the Capital of Oregon?</Text>
        <TextInput 
          style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(answer) => this.setState({answers:{one:answer, two:this.state.answers.two}})}
          value={this.state.answers.one}
        />
        
  {/*       <Text style={{padding: 10}}>
          You entered: {this.state.answers.one}
        </Text>  */}

        <Text style={{padding: 10}}> What is reed's last name?</Text>
        <TextInput 
          style={{ height: 40, width: 100, marginBottom: 25, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(answer) => this.setState({answers:{one:this.state.answers.one,two:answer}})}
          value={this.state.answers.two}
        />
        
 {/*        <Text style={{padding: 10}}>
          You entered: {this.state.answers.two}
        </Text> 
 */}

        <Button
          title = "Finish"
          style = {{padding: 10}}
          //onPress={() => this.props.navigation.navigate('Third')}
          onPress={() => this.reed()}
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