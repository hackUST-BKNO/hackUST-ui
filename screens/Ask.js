import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Card } from '@rneui/themed';
import { Input } from '@rneui/base';

export default function Ask(){
    return(
        <ScrollView>
            <Card>
                <Card.Title h3 style={{textAlign: 'left'}}>Ask your question.</Card.Title>
                <Input placeholder='Type here.'/>
            </Card>
        </ScrollView>
    )
}
