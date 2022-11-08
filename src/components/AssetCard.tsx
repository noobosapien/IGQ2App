import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import React from 'react';

interface asset {
  image: any;
  title: string;
  description: string;
  value: number;
}

export default function AssetCard({ image, title, description, value }: asset) {
  return (
    <>
      <IonCard
        style={{
          width: '10rem',
          height: '22rem',
        }}
      >
        <img alt={title} src={image} />
        <IonCardHeader>
          <IonCardTitle>{title}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          {description}
          <h3>Percieved value: {value} IGQ</h3>

          <IonButton>List in MP</IonButton>
        </IonCardContent>
      </IonCard>
    </>
  );
}
