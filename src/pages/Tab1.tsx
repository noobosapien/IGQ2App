import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useEffect } from 'react';
import './Tab1.css';
import {
  createEntropy,
  get11Words,
  getSHA256OfEntropy,
} from '../components/bip39';
import Wallet from '../components/Wallet';

declare global {
  interface Window {
    entropyToMnemonic: any;
  }
}

const Tab1: React.FC = () => {
  useEffect(() => {
    for (var i = 0; i < 16; i++) {
      const random = createEntropy();
      const entropy = getSHA256OfEntropy(random);
      const words = get11Words(entropy);
    }
    // console.log('words: ', words);
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wallet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Wallet</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Wallet />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
