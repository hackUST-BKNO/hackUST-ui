import React, {useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Button, Input, lightColors } from '@rneui/base';
import { BLACK, GRAY } from 'reinput/src/services/constants';
import { withTheme } from '@rneui/themed';


const url = "http://nothing:1337/api/tags";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try{
                const res = await fetch(url);
                const json = await res.json();
            
                setData(json);
                setLoading(false);
            }catch(error){

                setError(error);
                setLoading(false);
            }
        }

        fetchData()
    }, [url])

    return {loading, error, data};
}
export default function Tags(){
    const {loading, error, data } = useFetch(url)
    const logo = require("./../assets/blue-circle-handbag-icon.png");
    const upvote = require("./../assets/blue-upvote.png");
    if (loading){
        return(
            <View>
        <View style={{flexDirection: "row"}}>
                <Image
                    source={logo}
                    style={{
                        width: 50,
                        height: 50,
                        margin: 20
                    }}
                />
                <Text style={{margin:10, marginTop: 15, fontSize: 40}}>Tags</Text>
            </View>
        <Text style={{margin:10, marginTop: 15, fontSize: 40}}>loading...</Text>
        </View>
        )
    }
    if (error){
        return( <View>
            <View style={{flexDirection: "row"}}>
                    <Image
                        source={logo}
                        style={{
                            width: 50,
                            height: 50,
                            margin: 20
                        }}
                    />
                    <Text style={{margin:10, marginTop: 15, fontSize: 40}}>Tags</Text>
                </View>
            <Text style={{margin:10, marginTop: 15, fontSize: 40}}>ERROR...</Text>
            </View>)
    }
    
    return(
        <View style={{}}>
            <View style={{flexDirection: "row"}}>
                <Image
                    source={logo}
                    style={{
                        width: 50,
                        height: 50,
                        margin: 20
                    }}
                />
                <Text style={{margin:10, marginTop: 15, fontSize: 40}}>Tags</Text>
            </View>
            <ShowAllTag fetchedData = {data.data}/>
            <View>
                <ScrollView>
                    <PreviewPost logo={upvote}/>
                    <View style={{borderBottomColor: "#090909", borderBottomWidth: StyleSheet.hairlineWidth, margin: 10}}></View>
                    <PreviewPost logo={upvote}/>
                    <View style={{borderBottomColor: "#090909", borderBottomWidth: StyleSheet.hairlineWidth, margin: 10}}></View>
                    <PreviewPost logo={upvote}/>
                    <View style={{borderBottomColor: "#090909", borderBottomWidth: StyleSheet.hairlineWidth, margin: 10}}></View>
                    <PreviewPost logo={upvote}/>
                    <View style={{borderBottomColor: "#090909", borderBottomWidth: StyleSheet.hairlineWidth, margin: 10}}></View>
                    <PreviewPost logo={upvote}/>
                    <View style={{borderBottomColor: "#090909", borderBottomWidth: StyleSheet.hairlineWidth, margin: 10}}></View>
                    <PreviewPost logo={upvote}/>
                    <View style={{borderBottomColor: "#090909", borderBottomWidth: StyleSheet.hairlineWidth, margin: 10}}></View>
                    <PreviewPost logo={upvote}/>
                    <View style={{borderBottomColor: "#090909", borderBottomWidth: StyleSheet.hairlineWidth, margin: 10}}></View>
                    <PreviewPost logo={upvote}/>
                    <View style={{borderBottomColor: "#090909", borderBottomWidth: StyleSheet.hairlineWidth, margin: 10}}></View>
                </ScrollView>
            </View>
        </View>
    )
}


const PreviewPost = (props) => {
    return <TouchableOpacity onPress={() =>{}}>
    <View  style={{borderColor: "#AAAAAA", borderWidth: 1, margin: 5, padding: 6}}>
        <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 3}}>Question</Text>
        <View style={{backgroundColor: "#E1f5ff", flexWrap: 'wrap', flexDirection: "row"}} >
            <ShowTag text="tags"/>
        </View>
        <View>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam...</Text>
        </View>
        <View style={{borderBottomColor: "#090909", borderBottomWidth: StyleSheet.hairlineWidth, margin: 10}}></View>
        <View style={{flexDirection: "row"}}>
            <Image
                    source={props.logo}
                    style={{
                        width: 15,
                        height: 10,
                        marginTop: 5
                    }}
                />
                <Text style={{marginLeft: 5}}>100</Text>
                <Text style={{marginLeft: 30}}>Replies: </Text>
                <Text>20</Text>
        </View>
    </View>
    </TouchableOpacity>
}
const ShowAllTag = (props) => { 
    const [showalltags, setshowalltags] = useState(true);
    if (showalltags){ 
        return(
            <View>
            <ScrollView horizontal={true} style={{flexDirection: "row",padding: 5, backgroundColor: "#E1E1E1"} }>
                {props.fetchedData.map((tag) => <ShowTag text= {tag.attributes.name}/>)}
                    </ScrollView>
                    <Button onPress={() => {setshowalltags(!showalltags)}} title={'V'}titleStyle={{fontSize:9}} buttonStyle={{marginTop:5,padding: 5,paddingTop:3, maxHeight:20, backgroundColor: "#22a6e3"}}/>
                </View>
        )
    }
        
    else{
        return ( 
            <View>
                <View style={{padding: 5, backgroundColor: "#E1E1E1", flexWrap: 'wrap', flexDirection: "row"}} >
                {props.fetchedData.map((tag) => <ShowTag text= {tag.attributes.name}/>)}
                </View>
                    <Button onPress={() => {setshowalltags(!showalltags)}} title={'^'} buttonStyle={{marginTop:5,padding: 0,paddingTop:1, maxHeight:20, backgroundColor: "#22a6e3"}}/>
            </View>)
}}
const ShowTag = (props) =>(
    <TouchableOpacity onPress={() =>{}}>
    <Text  style={{
        fontWeight: "bold",
        backgroundColor: GRAY, 
        color: "white",
        borderRadius: 10, 
        paddingHorizontal: 10,
        marginHorizontal: 5, 
        marginVertical: 5
        }}>{props.text}</Text>
        </TouchableOpacity>
)