import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function About() {
  return (
    <View style={{rowGap: 20}}>
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Version
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          8.6.74.1176
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Third-party software
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          Sweet software that helped us
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Terms and Conditions
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          All the stuff you need to know.
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Privacy Policy
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          Important for both of us.
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Support
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          Get help from us and the community.
        </Text>
      </View>
      <Text
        style={{
          color: '#fff',
          fontWeight: 800,
          marginBottom: 10,
          marginTop: 10,
        }}>
        Other
      </Text>
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Log out
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          You are logged in as Mook
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
