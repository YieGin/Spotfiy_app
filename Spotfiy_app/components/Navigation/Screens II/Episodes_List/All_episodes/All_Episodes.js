import {TouchableOpacity, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../../Redux/CartSlice';
export default function All_Episodes({trip}) {
  const dispatch = useDispatch();
  const [play, setPlay] = useState(true);
  const [play1, setPlay1] = useState(true);
  const [play2, setPlay2] = useState(true);
  const [play3, setPlay3] = useState(true);
  const PlayMusic = () => {
    setPlay(!play);
    setPlay1(true);
    setPlay2(true);
    setPlay3(true);
    dispatch(addToCart(trip));
  };
  const PlayMusic_1 = () => {
    setPlay(true);
    setPlay1(!play1);
    setPlay2(true);
    setPlay3(true);
    dispatch(addToCart(trip));
  };
  const PlayMusic_2 = () => {
    setPlay(true);
    setPlay1(true);
    setPlay2(!play2);
    setPlay3(true);
    dispatch(addToCart(trip));
  };
  const PlayMusic_3 = () => {
    setPlay(true);
    setPlay1(true);
    setPlay2(true);
    setPlay3(!play3);
    dispatch(addToCart(trip));
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
          marginTop: 20,
        }}>
        <Image
          resizeMode="cover"
          source={trip.img1}
          style={{width: 60, height: 60, borderRadius: 5}}
        />
        <Text style={{color: '#fff', fontWeight: 700}}>{trip.Text1}</Text>
      </View>
      <Text
        numberOfLines={2}
        style={{
          color: 'rgb(161 161 170)',
          fontWeight: 700,
          paddingBottom: 10,
          paddingTop: 10,
        }}>
        {trip.textid}
      </Text>
      <Text
        style={{
          color: 'rgb(161 161 170)',
          fontWeight: 700,
          paddingBottom: 10,
        }}>
        {trip.date}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 25,
          paddingTop: 10,
          paddingBottom: 10,
          alignItems: 'center',
        }}>
        <Ionicons
          name="add-circle-outline"
          color={'rgb(161 161 170)'}
          size={26}
        />
        <AntDesign name="downcircleo" color={'rgb(161 161 170)'} size={20} />
        <AntDesign name="sharealt" color={'rgb(161 161 170)'} size={20} />
        <Entypo
          name="dots-three-vertical"
          color={'rgb(161 161 170)'}
          size={17}
        />
        <TouchableOpacity
          onPress={PlayMusic}
          style={{
            marginLeft: 'auto',
            backgroundColor: '#fff',
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name={play ? 'play' : 'pause'}
            color={'#000'}
            size={23}
            marginLeft={3}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{backgroundColor: 'rgb(39 39 42)', width: '100%', height: 1.5}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
          marginTop: 20,
        }}>
        <Image
          resizeMode="cover"
          source={trip.img2}
          style={{width: 60, height: 60, borderRadius: 5}}
        />
        <Text style={{color: '#fff', fontWeight: 700, width: 300}}>
          {trip.Text2}
        </Text>
      </View>
      <Text
        numberOfLines={2}
        style={{
          color: 'rgb(161 161 170)',
          fontWeight: 700,
          paddingBottom: 10,
          paddingTop: 10,
        }}>
        {trip.textid2}
      </Text>
      <Text
        style={{
          color: 'rgb(161 161 170)',
          fontWeight: 700,
          paddingBottom: 10,
        }}>
        {trip.date2}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 25,
          paddingTop: 10,
          paddingBottom: 10,
          alignItems: 'center',
        }}>
        <Ionicons
          name="add-circle-outline"
          color={'rgb(161 161 170)'}
          size={26}
        />
        <AntDesign name="downcircleo" color={'rgb(161 161 170)'} size={20} />
        <AntDesign name="sharealt" color={'rgb(161 161 170)'} size={20} />
        <Entypo
          name="dots-three-vertical"
          color={'rgb(161 161 170)'}
          size={17}
        />
        <TouchableOpacity
          onPress={PlayMusic_1}
          style={{
            marginLeft: 'auto',
            backgroundColor: '#fff',
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name={play1 ? 'play' : 'pause'}
            color={'#000'}
            size={23}
            marginLeft={3}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{backgroundColor: 'rgb(39 39 42)', width: '100%', height: 1.5}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
          marginTop: 20,
        }}>
        <Image
          resizeMode="cover"
          source={trip.img3}
          style={{width: 60, height: 60, borderRadius: 5}}
        />
        <Text style={{color: '#fff', fontWeight: 700, width: 300}}>
          {trip.Text3}
        </Text>
      </View>
      <Text
        numberOfLines={2}
        style={{
          color: 'rgb(161 161 170)',
          fontWeight: 700,
          paddingBottom: 10,
          paddingTop: 10,
        }}>
        {trip.textid3}
      </Text>
      <Text
        style={{
          color: 'rgb(161 161 170)',
          fontWeight: 700,
          paddingBottom: 10,
        }}>
        {trip.date3}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 25,
          paddingTop: 10,
          paddingBottom: 10,
          alignItems: 'center',
        }}>
        <Ionicons
          name="add-circle-outline"
          color={'rgb(161 161 170)'}
          size={26}
        />
        <AntDesign name="downcircleo" color={'rgb(161 161 170)'} size={20} />
        <AntDesign name="sharealt" color={'rgb(161 161 170)'} size={20} />
        <Entypo
          name="dots-three-vertical"
          color={'rgb(161 161 170)'}
          size={17}
        />
        <TouchableOpacity
          onPress={PlayMusic_2}
          style={{
            marginLeft: 'auto',
            backgroundColor: '#fff',
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name={play2 ? 'play' : 'pause'}
            color={'#000'}
            size={23}
            marginLeft={3}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{backgroundColor: 'rgb(39 39 42)', width: '100%', height: 1.5}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
          marginTop: 20,
        }}>
        <Image
          resizeMode="cover"
          source={trip.img4}
          style={{width: 60, height: 60, borderRadius: 5}}
        />
        <Text style={{color: '#fff', fontWeight: 700, width: 300}}>
          {trip.Text4}
        </Text>
      </View>
      <Text
        numberOfLines={2}
        style={{
          color: 'rgb(161 161 170)',
          fontWeight: 700,
          paddingBottom: 10,
          paddingTop: 10,
        }}>
        {trip.textid4}
      </Text>
      <Text
        style={{
          color: 'rgb(161 161 170)',
          fontWeight: 700,
          paddingBottom: 10,
        }}>
        {trip.date4}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          columnGap: 25,
          paddingTop: 10,
          paddingBottom: 10,
          alignItems: 'center',
        }}>
        <Ionicons
          name="add-circle-outline"
          color={'rgb(161 161 170)'}
          size={26}
        />
        <AntDesign name="downcircleo" color={'rgb(161 161 170)'} size={20} />
        <AntDesign name="sharealt" color={'rgb(161 161 170)'} size={20} />
        <Entypo
          name="dots-three-vertical"
          color={'rgb(161 161 170)'}
          size={17}
        />
        <TouchableOpacity
          onPress={PlayMusic_3}
          style={{
            marginLeft: 'auto',
            backgroundColor: '#fff',
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name={play3 ? 'play' : 'pause'}
            color={'#000'}
            size={23}
            marginLeft={3}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{backgroundColor: 'rgb(39 39 42)', width: '100%', height: 1.5}}
      />
    </View>
  );
}
