import {View} from 'react-native';
import React from 'react';
import SubscribeList from './SubscribeList';

const Subscribe_Text = () => {
  const Premium_Personnel = [
    [
      'Premium Personnel',
      'Gratuit',
      'PENDANT 1 MOIS',
      'Votre musique sans pub. Téléchargement pour écouter hors connexion . Zapping ilimité . Musique â la demande . Annulation possible â tout moment',
      'PASSER A PREMIUM',
      "Seulement USD 4.99/mois ensuite. Réservé aux utilisateurs n'ayant jamais utilisé Premium. soumise a conditions.",
    ],
  ];
  const Premum_Duo = [
    [
      'Premium Duo',
      'Gratuit',
      'PENDANT 1 MOIS',
      '2 comptes Premium . Votre musique sans pub . Téléchargement pour écouter hors connexion . Zapping illimité . Votre musique a la demande . Annulation possible â tout moment',
      'OBTENIR 1 MOIS GRATUIT',
      "Seulement USD 6.49/mois ensuite. Réservé aux utilisateurs n'ayant jamais utilisé Premium. Pour deux personnes vivant a la méme adresse. Offre soumise a conditions.",
    ],
  ];
  const Premum_Famille = [
    [
      'Premium Famille',
      'Gratuit',
      'PENDANT 1 MOIS',
      'Jusqu"a 6 comptes Premium . Blocage des titres explicites . Votre musique sans pub . Téléchargement pour écouter hors connexion . Zapping illimité . Votre musique a la demande . Annulation possible a tout moment ',
      'OBTENIR 1 MOIS GRATUIT',
      "Seulement USD 7.99/mois par la suite. Réservé aux utilisateurs n'ayant jamais utilisé Spotify Premium. Pour un maximum de 6 members d'une famille vivant a la méme adresse. Offre soumise a conditions.",
    ],
  ];
  return (
    <View style={{paddingBottom: 50}}>
      <SubscribeList Card={Premium_Personnel} />
      <SubscribeList Card={Premum_Duo} />
      <SubscribeList Card={Premum_Famille} />
    </View>
  );
};

export default Subscribe_Text;
