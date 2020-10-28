import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Header from '../components/header.js'
import { SearchBar } from 'react-native-elements';
import db from '../config.js'
import { FlatList } from 'react-native-gesture-handler';
export default class ReadStory extends React.Component {
 constructor(){
   super()
  this.state = {
    search: '',
    allStories:[],
    filteredStories:[]
  };
}
componentDidMount(){
  
  this.retrieveStories();
}
componentDidUpdate(){
 // console.log("uppppppppppppppppp")
  this.retrieveStories();
}

retrieveStories=async()=>{
 // console.log("search",this.state.search,this.state.allStories)
if(this.state.search!=""){
  var item=[]
  const filteredStories = this.state.allStories.filter( (story) => {
//console.log(story.title,"story")
var text=story.title;
if((text.includes(this.state.search) ||story.author.includes(this.state.search)) && text !="" && text !=undefined){
//  console.log("minnu")
  item.push(story);
}
  });
  this.setState({allStories:item})
   // story.title.includes("Jeep"))
// this.setState({
//   filteredStories: filteredStories
// })
//console.log("filter",this.state.allStories)
}
else{
db
.collection("story")
.get()
.then((stories)=>{
  var storyArr=[]
  stories.docs.map((story)=>{
     storyArr.push(story.data())
  })
  this.setState({allStories:storyArr})
//console.log("st",storyArr)


})
}
//this.setState({"search":""})
  
}

 
  render() {
    const { search } = this.state;
   
    
    return (
      <View>
        <Header/>
       <SearchBar
        placeholder="Search Here 6..."
        onChangeText={(text)=>{
          console.log("mmmmmmmmmmmmmmmmmmmmmmmm",text)
          this.setState({search:text})
         // this.retrieveStories();

        }}
        onClear={(text)=>{
          this.setState({search:text})
          //this.retrieveStories();


        }}
        
        value={this.state.search}
        val={this.state.search}
      />
     
          <FlatList
          data={this.state.allStories}
          renderItem={({item})=>(
          <View style={styles.container}>
                    <Text>Title: {item.title}</Text>
                    <Text>Author : {item.author}</Text>
                    
          </View>
          )}
          keyExtractor={(item,index)=>index.toString()}>

          </FlatList>
      </View>
      
      
    );
          
  }
}
    
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
