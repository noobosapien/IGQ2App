import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import Duck1 from '../assets/Duck1.png';
import Duck2 from '../assets/Duck2.png';
import Duck3 from '../assets/Duck3.png';
import AssetCard from './AssetCard';

const captains = [
  {
    title: 'Captain Mctavish',
    description: 'Killer machine',
    image: Duck1,
    value: 10,
  },
  {
    title: 'Captain Trosh',
    description: 'Killer machine',
    image: Duck2,
    value: 3,
  },
  {
    title: 'Captain Guiver',
    description: 'Killer machine',
    image: Duck3,
    value: 23,
  },
];

export default function Captains() {
  return (
    <>
      <h1>Captains you own:</h1>
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
