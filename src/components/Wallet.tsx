import { IonButton, IonIcon, IonText } from '@ionic/react';
import React from 'react';
import Accounts from './Accounts';
import Balances from './Balances';
import Captains from './Captains';
import Ships from './Ships';
import { settings } from 'ionicons/icons';
import SettingsModal from './SettingsModal';

export default function Wallet() {
  return (
    <>
      <IonText>
        <h1>
          What is in your wallet{' '}
          <IonButton id="open-settings-modal" shape="round">
            <IonIcon icon={settings} style={{ color: 'white' }}></IonIcon>
          </IonButton>
        </h1>
      </IonText>
      <SettingsModal />
      {/* Select account */}
      <Accounts />
      {/* amount of tokens in account */}
      <Balances />
      {/* available captain NFTs */}
      <Captains />
      {/* available ship NFTs */}
      <Ships />
    </>
  );
}
