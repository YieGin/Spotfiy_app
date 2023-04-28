import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Button,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Episodes from './Episodes';
import Recently from './Recently';

export default function Home({navigation}) {
  const {items} = useSelector(state => state.user);

  const renderHeader = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingBottom: 10,
      }}>
      <Text style={{fontSize: 22, color: '#fff', fontWeight: 800}}>
        Good evening
      </Text>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 15,
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Ionicons name="notifications-outline" color={'#fff'} size={22} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Recently_played')}>
          <MaterialCommunityIcons
            name="clock-outline"
            color={'#fff'}
            size={22}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" color={'#fff'} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {trip: item});
      }}
      style={{
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center',
        columnGap: 10,
        width: '50%',
        marginRight: 10,
        borderRadius: 4,
        marginBottom: 5,
      }}>
      <Image
        resizeMode="cover"
        source={item.img}
        style={{width: 60, height: 60}}
      />
      <Text style={{color: 'white', fontWeight: 700, width: '50%'}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderFooter = () => (
    <>
      <Episodes navigation={navigation} />
      <Recently navigation={navigation} />
    </>
  );

  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.9)',
        flex: 1,
        paddingBottom: 50,
        paddingLeft: 5,
        paddingRight: 5,
      }}>
      <FlatList
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        keyExtractor={(item, id) => id.toString()}
        data={items}
        numColumns={2}
        renderItem={renderItem}
      />
    </View>
  );
}
