import React from 'react';
import { Modal, View, StyleSheet, Text, Pressable } from 'react-native';
import ItemDetail from './ItemDetail';

const Details = ({ visible, setVisible }) => {
    const controlClick = e => {
        e.stopPropagation();
    }
    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <Pressable style={styles.content} onPress={() => setVisible(!visible)}>
                <Pressable style={styles.contentDetails} onPress={controlClick}>
                    <ItemDetail icon={require('../assets/iconKey.png')} value="34465765"/>
                    <ItemDetail icon={require('../assets/iconUserDetail.png')} value="Juan Daniel"/>
                    <ItemDetail icon={require('../assets/iconPhone.png')} value="3141093880"/>
                    <ItemDetail icon={require('../assets/iconCalendar.png')} value="2022/04/02"/>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    content: {
        position: 'relative',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    contentDetails: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        height: 250,
        paddingVertical: 30,
        backgroundColor: '#fff'
    }
});

export default Details;