import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

function SettingsModal() {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {}

  return (
    <>
      <IonModal
        ref={modal}
        trigger="open-settings-modal"
        onWillDismiss={(ev) => onWillDismiss(ev)}
      >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>
                Cancel
              </IonButton>
            </IonButtons>
            <IonTitle>Wallet settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonButton>Export private key</IonButton>
          </IonItem>
          <IonItem>
            <IonButton>Import private key</IonButton>
          </IonItem>
          <IonItem>
            <IonButton>Show memonic</IonButton>
          </IonItem>
          <IonItem>
            <IonButton>Get wallet from memonic</IonButton>
          </IonItem>
        </IonContent>
      </IonModal>
    </>
  );
}

export default SettingsModal;
