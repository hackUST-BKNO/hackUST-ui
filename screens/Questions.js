import React, {useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Card, Icon } from '@rneui/themed';
import { Input } from '@rneui/base';

export default function Questions(props){
    const [menuShown, setMenuShown] = useState(false)
    const menu = require("./../assets/menu.png");

    const menuWhite = require("./../assets/menu-white.png");
    return(
        <View>
        <ScrollView>
            <Card containerStyle={{margin:'auto'}}>
                <View style={{flex: 0, flexDirection: 'row'}}>
                    <View style={{flexShrink: 1}}>
                        <Votes votes="20"/>
                    </View>
                    <View>
                        <Card.Title h3> How to Raise a Team's Morale </Card.Title>
                        <Text style={{marginLeft:10, textAlign: 'right'}}> created on 2020/12/3 </Text>
                    </View>
                </View>
                <Card.Divider />
                <Text style={{textAlign: 'justify'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
            </Card>
            <Card containerStyle={{width:360}}>
                <View style={{flex:0, flexDirection: 'row'}}>
                    <View style={{alignItems: 'center', marginRight:10}}>
                        <Votes votes='4'/>
                    </View>
                    <View style={{width:290}}>
                        <Text style={{textAlign: 'justify'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        <Text></Text>
                        <Text style={{textAlign: 'right'}}> created on 2020/12/5 </Text>
                    </View>
                </View>
            </Card>
            <Card containerStyle={{width:'94%', marginBottom:10}}>
                <Card.Title style={{textAlign: 'left'}}>Got your own answer?</Card.Title>
                <Input placeholder='Type here.'/>
            </Card>
        </ScrollView>
        <TouchableOpacity style={{position: 'absolute', alignSelf: 'flex-end'}} onPress={() => setMenuShown(!menuShown)}>
                <Image
                    source={(menuShown)?menuWhite: menu}
                    style={{
                        width: 30,
                        height: 50,
                        margin: 20,
                        zIndex: 10,
                    }}
                />
                <Menu shown={menuShown} switchPage ={(page) =>props.switchPage(page) } ></Menu>
                </TouchableOpacity>
        </View>
    )
}

const Menu = (props) => {
    if (props.shown){
        return <View style={{ position: 'absolute', backgroundColor: '#22a6e3', paddingTop:50 ,borderRadius:50}}>
            <TouchableOpacity onPress={() => {props.switchPage(2)}}>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 15, paddingVertical: 10, paddingTop:30,paddingHorizontal:2}}>T</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.switchPage(3)}}>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 15, paddingVertical: 10, paddingHorizontal:30}}>Q</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {props.switchPage(4)}}>
            <Text style={{color: "#ffffff", alignSelf:'center', fontSize: 15, paddingVertical: 10, paddingBottom:30,paddingHorizontal:30}}>A</Text>
            </TouchableOpacity>
        </View>
    } else{
        return <View></View>
    }
}

const Votes = (props) => (
    <View>
        <TouchableOpacity
            style={{
                borderRadius: 10,
                paddingVertical: 6,
                alignItems: 'center',
            }}
        >
            <Icon type='antdesign' name="caretup" color="#6AC3CC" />
        </TouchableOpacity>
        <Text h4 style={{textAlign:'center'}}> {props.votes} </Text>
        <TouchableOpacity
            style={{
                borderRadius: 10,
                paddingVertical: 6,
                alignItems: 'center',
            }}
        >
            <Icon type='antdesign' name="caretdown" color="#6AC3CC" />
        </TouchableOpacity>
    </View>
)