import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Your_Libray() {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.9)',
        flex: 1,
        paddingTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 10,
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(74 222 128)',
            width: 30,
            height: 30,
            borderRadius: 50,
          }}>
          <Text style={{fontSize: 20, color: '#000', fontWeight: 600}}>M</Text>
        </View>
        <Text style={{fontSize: 20, color: '#fff', fontWeight: 900}}>
          Your Library
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 'auto', columnGap: 20}}>
          <AntDesign name="search1" color={'#fff'} size={20} />
          <AntDesign name="plus" color={'#fff'} size={20} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 15,
          marginTop: 20,
          paddingLeft: 10,
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 20,
            paddingLeft: 10,
            paddingRight: 10,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 13, color: '#fff', fontWeight: 900}}>
            Playlists
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 20,
            paddingLeft: 10,
            paddingRight: 10,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 13, color: '#fff', fontWeight: 900}}>
            Artists
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#000',
          height: 3,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <Text style={{fontSize: 14, color: '#fff', fontWeight: 900}}>
          Recently played
        </Text>
        <View style={{marginLeft: 'auto'}}>
          <Ionicons name="list-sharp" color={'#fff'} size={26} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 10,
          paddingLeft: 10,
          paddingTop: 20,
        }}>
        <Image
          source={require('../../../../assets/Images/8.jpg')}
          style={{width: 50, height: 50}}
        />
        <View>
          <Text style={{color: '#fff', fontWeight: 700}}>Liked Songs</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="pin"
              color={'rgb(34 197 94)'}
              size={16}
            />
            <Text style={{color: 'rgb(229 229 229)', fontWeight: 700}}>
              Playlist . 7 songs
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 10,
          paddingLeft: 10,
          paddingTop: 20,
        }}>
        <Image
          source={require('../../../../assets/Images/9.jpg')}
          style={{width: 50, height: 50}}
        />
        <View>
          <Text style={{color: '#fff', fontWeight: 700}}>Lofi hip hop</Text>
          <Text style={{color: 'rgb(229 229 229)', fontWeight: 700}}>
            Playlist . 10 songs
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 10,
          paddingLeft: 10,
          paddingTop: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'rgb(38 38 38)',
            borderRadius: 100,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="plus" color={'rgb(229 229 229)'} size={24} />
        </View>
        <View>
          <Text style={{color: '#fff', fontWeight: 700}}>Add artists</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 10,
          paddingLeft: 10,
          paddingTop: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'rgb(38 38 38)',
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="plus" color={'rgb(229 229 229)'} size={24} />
        </View>
        <View>
          <Text style={{color: '#fff', fontWeight: 700}}>
            Add podcasts & shows
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
