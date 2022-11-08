import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
} from '@ionic/react';
import React from 'react';
import { repeatOutline, arrowUndo, arrowRedo, card } from 'ionicons/icons';

export default function Balances() {
  return (
    <>
      <IonCard color="primary">
        <IonCardHeader>
          <IonCardTitle>Available balances:</IonCardTitle>
          <IonCardSubtitle>IGQ Tokens:</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>SOL:</IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton color="dark">
                <IonIcon icon={repeatOutline}></IonIcon>
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton color="success">
                <IonIcon icon={arrowUndo}></IonIcon>
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton color="warning">
                <IonIcon icon={arrowRedo}></IonIcon>
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton color="success">
                <IonIcon icon={card}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    </>
  );
}
