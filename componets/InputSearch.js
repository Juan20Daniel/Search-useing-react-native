import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const InputSearch = ({ state, setState }) => {
    return (
        <View style={styles.content}>
            <Text style={styles.title}>Search</Text>
            <TextInput 
                onChangeText={setState}
                value={state}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        height: 150,
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        borderBottomWidth: 1
    },
    title: {
        fontSize: 20
    },
    input: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 5
    }
})

export default InputSearch;