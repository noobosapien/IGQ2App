import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import Ship1 from '../assets/Ship1.png';
import Ship2 from '../assets/Ship2.png';
import Ship3 from '../assets/Ship3.png';
import Ship4 from '../assets/Ship4.png';
import Ship5 from '../assets/Ship5.png';
import AssetCard from './AssetCard';

const captains = [
  {
    title: 'Ship Jenshin',
    description: 'Killer machine',
    image: Ship1,
    value: 10,
  },
  {
    title: 'Ship Trix',
    description: 'Killer machine',
    image: Ship2,
    value: 3,
  },
  {
    title: 'Captain Trover',
    description: 'Killer machine',
    image: Ship3,
    value: 23,
  },
  {
    title: 'Ship Yuter',
    description: 'Killer machine',
    image: Ship4,
    value: 23,
  },
  {
    title: 'Ship Tremmor',
    description: 'Killer machine',
    image: Ship5,
    value: 23,
  },
];

export default function Ships() {
  return (
    <>
      <h1>Ships you own:</h1>
      <IonGrid>
        <IonRow>
          {captains.map((cap) => (
            <IonCol>
              <AssetCard
                title={cap.title}
                description={cap.description}
                image={cap.image}
                value={cap.value}
              />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </>
  );
}
