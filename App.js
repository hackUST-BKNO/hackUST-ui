import React, {useState, useEffect } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Login from './screens/Login';
import Tag from './screens/tags';
import Ask from './screens/Ask';
import Questions from './screens/Questions';
import Register from './screens/Register';

export default function App(){
  const [whichPage, setWhichPage] = useState(0)

  
  switch(whichPage){
    case 0: return(
      <View style={{backgroundColor: "white", flex: 1}}>
        
        <Login  switchPage={(page) => {
        setWhichPage(page);
      }}/>
      </View>
    )
    case 1: return(
      <View style={{backgroundColor: "white", flex: 1}}>
        
        <Register  switchPage={(page) => {
        setWhichPage(page);
      }}/>
      </View>
    )
    case 2: return(
      <View style={{backgroundColor: "white", flex: 1}}>
        
        <Tag switchPage={(page) => {
        setWhichPage(page);
      }} />
      
      </View>
    )
    case 3: return(
      <View style={{backgroundColor: "white", flex: 1}}>
        
        <Questions switchPage={(page) => {
        setWhichPage(page);
      }} />
      </View>
    )
    case 4: return(
      <View style={{backgroundColor: "white", flex: 1}}>
        
        <Ask switchPage={(page) => {
        setWhichPage(page);
      }} />
      </View>
    )
  }
}