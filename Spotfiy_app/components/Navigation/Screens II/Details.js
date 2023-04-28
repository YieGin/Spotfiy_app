import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Like from './You_Might_Like/Like';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../Redux/CartSlice';

const {width, height} = Dimensions.get('screen');
export default function Details({navigation, route}) {
  const dispatch = useDispatch();
  const [play, setPlay] = useState(true);
  const scrollY = useRef(new Animated.Value(0)).current;
  const {trip} = route.params;
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);
  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);
  const PlayMusic = () => {
    setPlay(!play);
    dispatch(addToCart(trip));
  };
  return (
    <>
      <AnimatedTouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          backgroundColor: 'rgb(24 24 27)',
          zIndex: 200,
          height: 50,
          justifyContent: 'center',
          top: 0,
          left: 0,
          right: 0,
          paddingLeft: 5,
          opacity: scrollY.interpolate({
            inputRange: [180, 200],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [10, 20],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="arrow-back" color={'#fff'} size={26} />
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              width: '85%',
              fontWeight: 900,
            }}>
            {trip.name}
          </Text>
        </View>
      </AnimatedTouchableOpacity>
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
        style={{
          flex: 1,
          backgroundColor: '#000',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            zIndex: 200,
            top: 20,
            left: 0,
            right: 0,
          }}>
          <Ionicons name="arrow-back" color={'#fff'} size={26} />
        </TouchableOpacity>
        <View>
          <AnimatedImageBackground
            resizeMode="repeat"
            source={trip.img}
            style={styles.banner(scrollY)}
          />
        </View>
        <View style={{backgroundColor: '#000'}}>
          <Text
            style={{
              color: 'white',
              fontWeight: 700,
              paddingTop: 10,
              paddingBottom: 10,
              fontSize: 20,
            }}>
            {trip.name}
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', columnGap: 10}}>
            <FontAwesome name="spotify" color={'#1db954'} size={26} />
            <Text style={{color: '#fff', fontWeight: 700}}>Spotify</Text>
          </View>
          <Text style={{color: '#fff', paddingTop: 5}}>{trip.likes}</Text>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 20,
              paddingTop: 15,
              alignItems: 'center',
            }}>
            <AntDesign name="hearto" color={'#fff'} size={20} />
            <Entypo name="dots-three-vertical" color={'#fff'} size={20} />
            <TouchableOpacity
              onPress={PlayMusic}
              style={{
                marginLeft: 'auto',
                backgroundColor: 'rgb(34 197 94)',
                borderRadius: 100,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                name={play ? 'play' : 'pause'}
                color={'#000'}
                size={20}
                marginLeft={2}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              paddingBottom: 20,
            }}>
            <View
              style={{
                borderWidth: 1,
                width: 100,
                paddingBottom: 5,
                paddingTop: 5,
                borderColor: 'rgb(120 113 108)',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Text style={{color: '#fff', fontWeight: 700, fontSize: 12}}>
                Preview
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontWeight: 500,
              color: '#fff',
              lineHeight: 25,
              paddingBottom: 20,
            }}>
            {trip.Preview}
          </Text>
          <Text style={{color: '#fff', fontWeight: 700}}>
            You might also like
          </Text>
          <Like trip={trip} />
        </View>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: scrollA => ({
    height: 200,
    width,
    transform: [
      {
        translateY: scrollA,
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-200, 0, 200, 200 + 1],
          outputRange: [2, 1.5, 0.75, 0.75],
        }),
      },
    ],
  }),
});
