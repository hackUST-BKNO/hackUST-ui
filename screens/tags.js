import React, {useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Button, Input, lightColors } from '@rneui/base';
import { BLACK, GRAY } from 'reinput/src/services/constants';
import { withTheme } from '@rneui/themed';
import { styles } from 'reinput/src/Input';

const url = "http://none:1337/api/tags";
const appendurl = "?populate=questions";
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
    const [changePost, setchangePost] = useState(-1)
    const logo = require("./../assets/blue-circle-handbag-icon.png");
    
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
            <ShowAllTag fetchedData = {data.data} tagSelected= {(id) => {
                setchangePost(id);
            }}/>
            <View style={{margin: 3}}></View>
            <View>
                
                    <AllPreviewPost id={changePost} />
                    {/*
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
        */}
                
            </View>
            <View>
                <Text style={{alignSelf: "center"}}>Copyright 2022 BKNO LIMITED</Text>
                </View>
            
        </View>
    )
}

const AllPreviewPost = (props) => {
    if (props.id == -1) return (<View></View>)
    const {loading, error, data } = useFetch(url + "/" + props.id + appendurl);
    if (!data) return(<View></View>)
    return (
        <ScrollView style={{height: 480}}>
            {data.data.attributes.questions.data.map((post) => <View>
        <PreviewPost title={post.attributes.questiontitle} body={post.attributes.question} upvote={post.attributes.upvote}/>
        <View style={{borderBottomColor: "#090909", borderBottomWidth: StyleSheet.hairlineWidth, margin: 10}}></View>
        </View>)}
        </ScrollView>)
}
const PreviewPost = (props) => {
    const upvoteIcon = require("./../assets/blue-upvote.png");
    return <View  style={{borderColor: "#AAAAAA", borderWidth: 1, margin: 5, padding: 6}}>
        <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 3}}>{props.title}</Text>
        <View style={{backgroundColor: "#E1f5ff", flexWrap: 'wrap', flexDirection: "row"}} >
            <ShowTag text="tags"/>
        </View>
        <View>
            <Text>{props.body.substring(0,200)}...</Text>
        </View>
        <View style={{borderBottomColor: "#090909", borderBottomWidth: StyleSheet.hairlineWidth, margin: 10}}></View>
        <View style={{flexDirection: "row"}}>
            <Image
                    source={upvoteIcon}
                    style={{
                        width: 15,
                        height: 10,
                        marginTop: 5
                    }}
                />
                <Text style={{marginLeft: 5}}>{props.upvote}</Text>
                <Text style={{marginLeft: 30}}>Replies: </Text>
                <Text>20</Text>
        </View>
    </View>
}
const ShowAllTag = (props) => { 
    const [showalltags, setshowalltags] = useState(true);
    if (showalltags){ 
        return(
            <View>
            <ScrollView horizontal={true} style={{flexDirection: "row",padding: 5, backgroundColor: "#E1E1E1"} }>
                {props.fetchedData.map((tag) => <TouchableOpacity onPress={() =>{props.tagSelected(tag.id)}} key={tag.attributes.id} className="tags-cad">
                    <ShowTag text= {tag.attributes.name}/>
                    </TouchableOpacity>)}
                    </ScrollView>
                    <Button onPress={() => {setshowalltags(!showalltags)}} title={'V'}titleStyle={{fontSize:9}} buttonStyle={{marginTop:5,padding: 5,paddingTop:3, maxHeight:20, backgroundColor: "#22a6e3"}}/>
                </View>
        )
    }
        
    else{
        return ( 
            <View>
                <View style={{padding: 5, backgroundColor: "#E1E1E1", flexWrap: 'wrap', flexDirection: "row"}} >
                {props.fetchedData.map((tag) => <TouchableOpacity onPress={() =>{props.tagSelected(tag.id)}} key={tag.attributes.id} className="tags-cad">
                    <ShowTag text= {tag.attributes.name}/>
                    </TouchableOpacity>)}
                </View>
                    <Button onPress={() => {setshowalltags(!showalltags)}} title={'^'} buttonStyle={{marginTop:5,padding: 0,paddingTop:1, maxHeight:20, backgroundColor: "#22a6e3"}}/>
            </View>)
}}
const ShowTag = (props) =>(
    
    <Text  style={{
        fontWeight: "bold",
        backgroundColor: GRAY, 
        color: "white",
        borderRadius: 10, 
        paddingHorizontal: 10,
        marginHorizontal: 5, 
        marginVertical: 5
        }}>{props.text}</Text>
)