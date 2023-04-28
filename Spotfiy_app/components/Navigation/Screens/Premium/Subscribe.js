import {Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Subscribe = () => {
  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'rgb(39 39 42)',
            paddingTop: 30,
            paddingBottom: 30,
            marginTop: 20,
            width: '90%',
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 700,
              paddingLeft: 20,
              fontSize: 20,
            }}>
            Pourquoi s'abonner â Premium ?
          </Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: 'rgb(24 24 27)',
                width: '90%',
                height: 1,
                marginTop: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 15,
              marginTop: 10,
              marginLeft: 15,
            }}>
            <Ionicons name="checkmark" color={'rgb(22 163 74)'} size={26} />
            <Text style={{color: '#fff', fontWeight: 700, width: '85%'}}>
              Téléchargez vos titres pour les écouter en mode hors connexion,
              sans Wi-Fi
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 15,
              marginTop: 20,
              marginLeft: 15,
            }}>
            <Ionicons name="checkmark" color={'rgb(22 163 74)'} size={26} />
            <Text style={{color: '#fff', fontWeight: 700, width: '85%'}}>
              Votre musique sans pub
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 15,
              marginTop: 20,
              marginLeft: 15,
            }}>
            <Ionicons name="checkmark" color={'rgb(22 163 74)'} size={26} />
            <Text style={{color: '#fff', fontWeight: 700, width: '85%'}}>
              Profitez d'un son d'une qualité 2 fois supérieure â celle de notre
              abounnement Spotify Free
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 15,
              marginTop: 20,
              marginLeft: 15,
            }}>
            <Ionicons name="checkmark" color={'rgb(22 163 74)'} size={26} />
            <Text style={{color: '#fff', fontWeight: 700, width: '85%'}}>
              Ecoutez les titres dans I'ordre de votre choix et zappez â volontê
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 15,
              marginTop: 20,
              marginLeft: 15,
            }}>
            <Ionicons name="checkmark" color={'rgb(22 163 74)'} size={26} />
            <Text style={{color: '#fff', fontWeight: 700, width: '85%'}}>
              Annulez les abonnements mensuels en ligne â tout moment
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'rgb(39 39 42)',
            paddingTop: 20,
            paddingBottom: 20,
            marginTop: 20,
            paddingRight: 20,
            width: '90%',
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 15,
              marginLeft: 15,
            }}>
            <Text style={{color: '#fff', fontWeight: 900, fontSize: 18}}>
              Spotify Free
            </Text>
            <Text
              style={{
                color: 'rgb(161 161 170)',
                fontWeight: 700,
                marginLeft: 'auto',
                fontSize: 13,
              }}>
              ABONNEMENT ACTUEL
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: '#fff',
          paddingLeft: 20,
          paddingTop: 20,
          paddingBottom: 20,
        }}>
        Choisissez votre offre Premium
      </Text>
    </View>
  );
};

export default Subscribe;
