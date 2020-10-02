import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View, Button} from '../components/Themed';
// @ts-ignore
import Placeholder from '../assets/images/plczyr.png'

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Image source={Placeholder}/>
            <Text style={styles.title}>Ortografia</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <View style={styles.btncontainer}>
                <TouchableOpacity
                    style={styles.btn}>
                    <Text style={styles.btntxt}>Wybierz lekcję</Text>
                </TouchableOpacity>
              <TouchableOpacity
                    style={styles.btn}>
                    <Text style={styles.btntxt}>Wybierz test</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btncontainer: {
        flex: 1,
    },
    btnwrap: {
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    btn: {
        height: 40,
        width: 240,
        marginTop:20,
        backgroundColor: "skyblue",
        color: "white",
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntxt:{
      color:"white",
      fontSize:20,
    }
});
