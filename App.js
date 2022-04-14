import React from 'react';
import {View, Text} from 'react-native';
import Login from './screens/Login';
import Tag from './screens/tags';
import Ask from './screens/Ask';
import Questions from './screens/Questions';

export default function App(){
  return(
    <View style={{backgroundColor: "white", flex: 1}}>
      <Tag />
    </View>
  )
}