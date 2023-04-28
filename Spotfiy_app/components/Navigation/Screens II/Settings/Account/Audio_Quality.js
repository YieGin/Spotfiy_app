import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Audio_Quality = () => {
  return (
    <View style={{rowGap: 20}}>
      <Text
        style={{
          color: '#fff',
          fontWeight: 700,
          marginBottom: 10,
          marginTop: 10,
        }}>
        Audio Quality
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          WiFi streaming
        </Text>
        <View
          style={{
            marginLeft: 'auto',
            borderWidth: 1,
            borderColor: 'rgb(68 64 60)',
            width: 110,
            alignItems: 'center',
            height: 30,
            justifyContent: 'center',
            borderRadius: 1,
          }}>
          <Text style={{color: '#fff', fontWeight: 700}}>Automatic</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Text
            style={{
              color: '#fff',
              fontWeight: 700,
            }}>
            Cellular streaming
          </Text>
          <Text
            style={{
              color: 'rgb(214 211 209)',
              fontWeight: 400,
              fontSize: 13,
              width: 210,
            }}>
            Streaming higher quality over a cellular connection uses more data.
          </Text>
        </View>
        <View
          style={{
            marginLeft: 'auto',
            borderWidth: 1,
            borderColor: 'rgb(68 64 60)',
            width: 110,
            alignItems: 'center',
            height: 30,
            justifyContent: 'center',
            borderRadius: 1,
          }}>
          <Text style={{color: '#fff', fontWeight: 700}}>Automatic</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Text
            style={{
              color: '#fff',
              fontWeight: 700,
            }}>
            Download
          </Text>
          <Text
            style={{
              color: 'rgb(214 211 209)',
              fontWeight: 400,
              fontSize: 13,
              width: 210,
            }}>
            Higher quality uses more disk space.
          </Text>
        </View>
        <View
          style={{
            marginLeft: 'auto',
            borderWidth: 1,
            borderColor: 'rgb(68 64 60)',
            width: 110,
            alignItems: 'center',
            height: 30,
            justifyContent: 'center',
            borderRadius: 1,
          }}>
          <Text style={{color: '#fff', fontWeight: 700}}>Normal</Text>
        </View>
      </View>
    </View>
  );
};

export default Audio_Quality;

const styles = StyleSheet.create({});
