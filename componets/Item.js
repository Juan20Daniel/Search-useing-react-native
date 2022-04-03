import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const Item = ({ item, openDetails, controlOptions }) => {
    const [ openOptions, setOpenOptions ] = useState(false);
    return (
        <Pressable style={styles.content} onLongPress={() => openDetails(true)}>
            <View style={styles.new}>
                <Text>New</Text>
            </View>
            <View style={styles.position}>
                <View style={styles.boxIconUser}>
                    <Image 
                        source={require('../assets/iconUser.png')} 
                        style={styles.iconUser}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>Name: {item.name}</Text>
                    <Text style={styles.phone}>Phone: {item.phone}</Text>
                </View>
            </View>
            <Pressable style={styles.boxIconMenu} onPress={() => controlOptions(openOptions, setOpenOptions)}>
                <Image 
                    source={require('../assets/iconMenu.png')} 
                    style={styles.iconMenu} 
                    resizeMode="contain"   
                />
               {openOptions &&
                    <View style={styles.options}>
                        <Pressable style={styles.option}><Text>Edit</Text></Pressable>
                        <Pressable style={styles.option}><Text>Delete</Text></Pressable>
                    </View>
               }
            </Pressable>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    content: {
        position: 'relative',
        height: 50,
        borderRadius: 5,
        borderColor: 'gray',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor:'#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 9
    },
    new: {
        position: 'absolute',
        backgroundColor: '#5ED44A',
        paddingHorizontal: 5,
        borderRadius: 5,
        top: -5
    },
    position: {
        flexDirection: 'row',
    },
    boxIconUser: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconUser: {
        width: 35,
        height: 35
    },
    info: {
        justifyContent: "space-between",
        paddingVertical: 3,
    },
    phone: {
        fontSize: 12,
        color: 'gray'
    },
    boxIconMenu: {
        position:'relative',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconMenu: {
        width: 5,
        height: 15,
    },
    options: {
        position: 'absolute',
        left: -100,
        bottom: -20,
        width: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: .2,
        borderColor: '#E5E5E5',
        backgroundColor: '#fff',
    },
    option: {
        paddingVertical: 5
    }
});

export default Item;