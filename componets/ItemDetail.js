import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ItemDetail = ({ icon, value }) => {
    return (
        <View style={styles.content}>
            <View style={styles.itemDetail}>
                <View style={styles.icon}>
                    <Image 
                        source={icon}  
                        style={{ width: 30, height: 30 }}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    );  
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 30,
        marginBottom: 5
    },
    itemDetail: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    },
    icon: {
        height: 40,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    value: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: '600'
    }
});

export default ItemDetail;