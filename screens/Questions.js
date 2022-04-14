import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Card, Icon } from '@rneui/themed';
import { Input } from '@rneui/base';

export default function Questions(){
    return(
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
    )
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