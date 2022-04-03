import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text, Pressable } from 'react-native';
import InputSearch from './componets/InputSearch';
import { data } from './data';
import List from './componets/List';
import Details from './componets/Details';
import Item from './componets/Item';
export default function App() {
  const [ search, setSearch ] = useState('');
  const [ dataFilters, setDataFilters ] = useState([]);
  const [ visible, setVisible ] = useState(false);
  const [ users, setUsers ] = useState([]);
  const [ control, setControl ] = useState(false);

  useEffect(() => {
    setUsers(data);
  },[]);
  useEffect(() => {
    if(search !== "") {
      filter(data);
    } else {
      setControl(false);
    }
  },[search]);
  const filter = (data) => {
    var array = []
    data.map(item => {
      if(item.name.toUpperCase().includes(search.toUpperCase().trim().replace(/\s/g, "")) && 
        item.name.toUpperCase().startsWith(search.toUpperCase())) {
          array.push(item)
      }
    });
    setDataFilters(array);
    setControl(true);
  }

  const controlOptions = (openOptions, setOpenOptions) => {
    setOpenOptions(!openOptions);
  }

  return (
    <View style={styles.container}>
      <InputSearch state={search} setState={setSearch} />
      <ScrollView>
      <View style={{flex: 1}}>
        {control &&
          <View style={{marginHorizontal: 16}}>
            <Text style={{ fontSize: 20, marginBottom: 15 }}>Search Results</Text>
            {dataFilters.length !== 0 ? 
              dataFilters.map(item => {
                return <Item key={item.id} item={item} openDetails={setVisible} controlOptions={controlOptions} />
              })
              :
              <View style={
                { 
                  height: 50, 
                  borderWidth: .4, 
                  borderColor: '#E5E5E5', 
                  borderRadius: 5, 
                  justifyContent:'center', 
                  alignItems:'center', 
                  marginBottom:15
                }
              }>
                <Text>No hay ningúno con ese nombre</Text>
              </View>
            }
            <View style={styles.space}></View>
          </View>
        }
        <List 
          data={users} 
          openDetails={setVisible}
          controlOptions={controlOptions}
        />
      </View>
      </ScrollView>
      <Details visible={visible} setVisible={setVisible}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  space: {
    height: 1,
    backgroundColor: 'gray'
  }
});
