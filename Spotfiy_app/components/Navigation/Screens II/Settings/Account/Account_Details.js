import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Switch from './Switch';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import Audio_Quality from './Audio_Quality';
import Storage from './Storage';
import About from './About';
export default function Account_Details() {
  const LandingCard = [
    [
      'Audio Quality',
      'Sets your audio quality to low(equivalent to 24kbit/s) and disables artist canvases.',
    ],
  ];
  const LandingCard2 = [
    ['Download audio only', 'Save video podcasts as audio only.'],
  ];
  const LandingCard3 = [
    [
      'Stream audio only',
      'Play video podcasts as audio only when not on WiFi.',
    ],
  ];
  const LandingCard4 = [['Gapless', 'Allows gapless playback']];
  const LandingCard5 = [
    ['Automix', 'Allow smooth trasitions between songs in a playlist.'],
  ];
  const LandingCard6 = [
    [
      'Allow Explicit Content',
      'Turn on to play explicit content Explicit content is labeled with E tag',
    ],
  ];
  const LandingCard7 = [
    ['Show unplayble songs', 'Show songs that are unplayable.'],
  ];
  const LandingCard8 = [
    ['Normalize volume', 'Set the same volume level for all tracks'],
  ];
  const LandingCard9 = [
    ['Mono Audio', 'Makes the left and right speakers play the same audio.'],
  ];
  const LandingCard10 = [
    [
      'Device Broadcast Status',
      'Allow other apps on your device to see what you are listening to.',
    ],
  ];
  const LandingCard11 = [
    ['Autoplay', 'Keep on listening to smiliar tracks when your music ends.'],
  ];
  const LandingCard12 = [
    [
      'Show local devices only',
      'Only show devices on your local WiFi or ethernet in the devices menu.',
    ],
  ];
  const LandingCard13 = [
    [
      'Spotify Connect in background',
      'Allow Spotify Connect to keep Spotify running when the app is in background',
    ],
  ];
  const LandingCard14 = [
    ['Private session', 'Start a private session to listen anonymously.'],
  ];
  const LandingCard15 = [
    [
      'Listening activity',
      'Share what I listen to with my followers on Spotify.',
    ],
  ];
  const LandingCard16 = [['Download', 'Higher quality uses more disk space.']];
  return (
    <View
      style={{
        paddingLeft: 10,
        rowGap: 20,
        paddingRight: 20,
        paddingBottom: 20,
      }}>
      <Text style={{color: '#fff', fontWeight: 700}}>Account</Text>
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Email
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          spotify@gmail.com
        </Text>
      </View>
      <Text
        style={{
          color: '#fff',
          fontWeight: 700,
        }}>
        Data Saver
      </Text>
      <Switch Card={LandingCard} />
      <Text
        style={{
          color: '#fff',
          fontWeight: 700,
        }}>
        Video Podcasts
      </Text>
      <Switch Card={LandingCard2} />
      <Switch Card={LandingCard3} />
      <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 10}}>
        <MaterialIcons
          name="error-outline"
          color={'rgb(214 211 209)'}
          size={15}
        />
        <Text
          style={{color: 'rgb(214 211 209)', fontWeight: 400, fontSize: 13}}>
          Note: video is not streamed when the Spotify app is backgrounded.
        </Text>
      </View>
      <Text
        style={{
          color: '#fff',
          fontWeight: 700,
        }}>
        Playback
      </Text>
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Crossfade
        </Text>
        <Text
          style={{color: 'rgb(214 211 209)', fontWeight: 400, fontSize: 13}}>
          Allows gapless playback
        </Text>
      </View>
      <Switch Card={LandingCard4} />
      <Switch Card={LandingCard5} />
      <Switch Card={LandingCard6} />
      <Switch Card={LandingCard7} />
      <Switch Card={LandingCard8} />
      <Switch Card={LandingCard9} />
      <Switch Card={LandingCard10} />
      <Switch Card={LandingCard11} />
      <Text
        style={{
          color: '#fff',
          fontWeight: 700,
          marginBottom: 10,
          marginTop: 10,
        }}>
        Devices
      </Text>
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Connect to a device
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          Listen to and control Spotify on your devices.
        </Text>
      </View>
      <Switch Card={LandingCard12} />
      <Switch Card={LandingCard13} />
      <Text
        style={{
          color: '#fff',
          fontWeight: 700,
          marginBottom: 10,
          marginTop: 10,
        }}>
        Connect to Apps
      </Text>
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Navigation & Other Apps
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          Connect with navigation and other apps to enhance your listening
          experience.
        </Text>
      </View>
      <Text
        style={{
          color: '#fff',
          fontWeight: 700,
          marginBottom: 10,
          marginTop: 10,
        }}>
        Social
      </Text>
      <Switch Card={LandingCard14} />
      <Switch Card={LandingCard15} />
      <Audio_Quality />
      <Switch Card={LandingCard16} />
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Equalizer
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          Open the equalizer control panel.
        </Text>
      </View>
      <Storage />
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Delete cache
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          You can free up storage by deleting your cache. Your Download won't be
          deleted.
        </Text>
      </View>
      <Text
        style={{
          color: '#fff',
          fontWeight: 700,
          marginBottom: 10,
          marginTop: 10,
        }}>
        Notifications
      </Text>
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Notifications
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          Choose which notifications to receive.
        </Text>
      </View>
      <Text
        style={{
          color: '#fff',
          fontWeight: 800,
          marginBottom: 10,
          marginTop: 10,
        }}>
        Advertisements
      </Text>
      <View>
        <Text
          style={{
            color: '#fff',
            fontWeight: 700,
          }}>
          Spotify Ad Partner Preferences
        </Text>
        <Text style={{color: 'rgb(214 211 209)', fontWeight: 400}}>
          Control how ads are targeted to me based on information gathered from
          advertising partners.
        </Text>
      </View>
      <About />
    </View>
  );
}

const styles = StyleSheet.create({});
