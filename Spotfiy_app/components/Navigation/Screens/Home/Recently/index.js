import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Recently({navigation}) {
  const {RecentlyData} = useSelector(state => state.user);
  return (
    <View>
      <Text
        style={{
          fontSize: 22,
          color: '#fff',
          fontWeight: 800,
          marginTop: 30,
          marginBottom: 10,
        }}>
        Recently played
      </Text>
      <FlatList
        horizontal
        keyExtractor={(item, id) => id.toString()}
        data={RecentlyData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', {trip: item});
            }}
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingBottom: 30,
              marginRight: 10,
            }}>
            <Image
              resizeMode="cover"
              source={item.img}
              style={{width: 150, height: 150}}
            />
            <Text
              numberOfLines={1}
              style={{color: 'white', fontWeight: 700, width: 140}}>
              {item.name}
            </Text>
            <Text
              numberOfLines={1}
              style={{color: 'rgb(209 213 219)', width: 100}}>
              {item.img2Details}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
