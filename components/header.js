import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
export default class Header extends React.Component {
  render(){
  return (
    <View style={styles.container}>
        <Text>Story Hub</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:0,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
    width:400,
    height:60
  },
});
