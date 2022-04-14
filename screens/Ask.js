import React, {useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { ListItem, Card } from '@rneui/themed';
import { Input } from '@rneui/base';

const url = "http://localhost:1337/api/questions";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const res = await fetch(url);
                const json = await res.json();

                setData(json.data);
                setLoading(false);
            }catch(error){
                setError(error);
                setLoading(false);
            }
        }

        fetchData()
    }, [url])

    return {loading, data, error};
}

export default function Ask(props){
    const [menuShown, setMenuShown] = useState(false)
    const menu = require("./../assets/menu.png");

    const menuWhite = require("./../assets/menu-white.png");
    //const {loading, data , error} = useFetch(url);
    const [searchRes, setSearchRes] = useState(null);
    var data = ["How to raise my team's morale", "How to train new recruit?", "What is the new recruit camp about?"]


    function filter (input) {
        var words = input.split(' ');
        words.forEach(word => {
            setSearchRes(data.filter(question => {
                var re = new RegExp(word, "g");
                return re.test(question);
            }));
        });
    }
    return(
        <View>
        <ScrollView>
            <Card>
                <Card.Title h3 style={{textAlign: 'left'}}>Ask your question.</Card.Title>
                <Input placeholder='Type here.' onChangeText={text => filter(text)}/>
                { searchRes?
                <>
                    <Text> Did you mean... </Text>
                    {
                    searchRes.map((question, i) => (
                        <ListItem key={i} bottomDivider>
                            <Text>{question}</Text>
                        </ListItem>
                    ))
                    }
                </>
                : null
                }
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
