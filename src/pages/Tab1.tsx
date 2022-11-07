import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {
  createEntropy,
  get11Words,
  getSHA256OfEntropy,
} from '../components/bip39';

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
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
