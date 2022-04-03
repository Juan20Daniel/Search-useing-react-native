import React from 'react';
import { View, StyleSheet } from 'react-native';
import Item from './Item';

const List = ({ data, openDetails, controlOptions }) => {
    return (
        <View style={styles.content}>
            {data.map((item, index)=> {
                return <Item key={index} item={item} openDetails={openDetails} controlOptions={controlOptions} />
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 16,
        marginTop: 20
    }
});

export default List;