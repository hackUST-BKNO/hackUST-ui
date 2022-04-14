import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Input } from '@rneui/base';

export default function Login(){
    const logo = require("./../assets/blue-circle-handbag-icon.png");
    return(
        <View style={{}}>
            <View style={{alignItems: 'center',}}>
                <Image
                    source={logo}
                    style={{
                        width: 200,
                        height: 200,
                        margin: 50
                    }}
                />
            </View>


            {/* <Text style={{
                margin:30,
                textAlign: 'center',
                fontSize: 50,
                color: "#40DFEF"
            }}>
                HackUST
            </Text> */}

            {/* <Text style={{
                color: "#85F4FF",
                fontWeight: "500",
                marginLeft: 40,
                fontSize: 30,
                marginVertical: 20
            }}>
                Login
            </Text> */}

            <View style={{marginHorizontal: 30}}>
                <Input placeholder='Name'/>
                <Input placeholder="Password" secureTextEntry={true} />
            </View>

            <View style={{marginHorizontal: 30}}>
                <LoginButton text="Login"/>
                <RegisterButton text="Don't have an account?"/>
            </View>
        </View>
    )
}

const LoginButton = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: "#85F4FF",
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 16,
            alignItems: 'center',
            //width: 100,
            margin: 5
        }}
    >
        <Text
            style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold"
            }}
        >
            {props.text}
        </Text>
    </TouchableOpacity>
)

const RegisterButton = (props) => (
    <TouchableOpacity
        style={{
            //backgroundColor: "#85F4FF",
            borderRadius: 10,
            paddingVertical: 6,
            paddingHorizontal: 16,
            alignItems: 'center',
            //width: 100,
            margin: 5
        }}
    >
        <Text
            style={{
                color: "grey",
                fontSize: 15,
                fontWeight: "bold"
            }}
        >
            {props.text}
        </Text>
    </TouchableOpacity>
)