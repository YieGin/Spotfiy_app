import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  View,
} from 'react-native';
import React from 'react';
import Search_Top from './Search_Top';
import {useSelector} from 'react-redux';

export default function Search({navigation}) {
  const {SearchData} = useSelector(state => state.user);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        width: '45%',
        marginBottom: 15,
        borderRadius: 3,
        marginLeft: 10,
        marginRight: 5,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: 'rgb(41 37 36)',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 5,
        height: 80,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            fontWeight: 900,
            color: '#fff',
            width: 100,
            marginTop: 10,
          }}>
          {item.name}
        </Text>
        <Image
          resizeMode="contain"
          source={item.img}
          style={{width: '30%', height: 80, marginLeft: 'auto'}}
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.9)',
        flex: 1,
        paddingBottom: 50,
      }}>
      <View style={{height: 150}}>
        <Search_Top />
      </View>
      <FlatList
        keyExtractor={(item, id) => id.toString()}
        data={SearchData}
        numColumns={2}
        renderItem={renderItem}
      />
    </View>
  );
}
