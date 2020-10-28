import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput,KeyboardAvoidingView,ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../components/header.js'
import db from '../config.js'
export default class WriteStory extends React.Component {
constructor(){
  super();
  this.state={
    author:"",
    title:"",
    content:""
  }
}
  submitStory=async()=>{
    console.log("minnu",this.state)
    db.collection("story").add({
      author:this.state.author,
      title:this.state.title,
      content:this.state.content
    }).then(()=>{
      ToastAndroid.show("Updated story",ToastAndroid.LONG)
    })
  }
  render(){
  return (
    <KeyboardAvoidingView behavior="padding" enabled>
    <View style={styles.container}>
        <Header/>
        <View style={styles.titleView}> 
        <TextInput 
        placeholder="Story Title" 
        onChangeText={(text)=>{
          this.setState({title:text})
          }
        }></TextInput>
        </View>
        <View style={styles.authorView}> 
        <TextInput 
        placeholder="Author"
        onChangeText={(text)=>{
          this.setState({author:text})
          }
        }></TextInput>
        </View>
        <View style={styles.storyView}> 
        <TextInput 
        placeholder="Write your story"
        onChangeText={(text)=>{
          this.setState({content:text})
          }
        }></TextInput>
        </View>
        <TouchableOpacity style={styles.buttonView} onPress={this.submitStory}>
            <Text>SUBMIT</Text>
        </TouchableOpacity>
    
    </View>
    </KeyboardAvoidingView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView:{
     marginTop:10,
     borderColor:"black",
     borderWidth:1,
     borderRadius:5,
     width:350
  },
  authorView:{
    marginTop:10,
    borderColor:"black",
    borderWidth:1,
    borderRadius:5,
    width:350
 },
 storyView:{
    marginTop:10,
    borderColor:"black",
    borderWidth:1,
    borderRadius:5,
    width:350,
    height:200
 },
 buttonView:{
     backgroundColor:"red",
     marginTop:20,
     borderRadius:5,
     width:80,
     height:40,
     alignItems:"center",
     justifyContent:"center"
 }
});
