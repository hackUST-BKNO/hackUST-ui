import React from 'react';
import {View, Text} from 'react-native';
import Login from './screens/Login';
import Questions from './screens/Questions';

export default function App(){
  return(
    <View style={{backgroundColor: "white", justifyContent: "center", flex: 1}}>
      <Questions />
    </View>
  )
}