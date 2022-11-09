import React, { useContext, useEffect, useState } from 'react';
import {
  IonButton,
  IonChip,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/react';
import { checkmarkCircle, add, cog, copy } from 'ionicons/icons';
import { Store } from '../utils/store';
import * as web3 from '@solana/web3.js';

interface StoreInterface {
  state: any;
  dispatch: any;
}

export default function Accounts() {
  const { state, dispatch }: StoreInterface = useContext(Store);
  const [accounts, setAccounts]: any = useState([]);

  useEffect(() => {
    if (state?.madeAccounts?.accounts) {
      setAccounts([...state.madeAccounts.accounts]);
    } else {
      setAccounts([]);
    }
  }, [state]);

  const addAccount = async () => {
    //create an account from state.wallet.seed
    //if state.wallet.seed is empty create a new one
    if (state?.wallet?.seed === '') {
      console.log('Empty seed');
      //create a high entropy seed
      //create a new keypair from that seed
      //get the phrase and save it too
    }
    //dispatch new account
  };

  return (
    <>
      <IonList>
        {accounts.map((account: any) => (
          <IonItem>
            <IonLabel>
              Account 1 <IonChip>1DEF3...</IonChip>{' '}
              <IonIcon icon={copy}></IonIcon>
            </IonLabel>
            <IonIcon icon={checkmarkCircle} color="primary"></IonIcon>
            <IonIcon icon={cog} color="dark"></IonIcon>
          </IonItem>
        ))}
      </IonList>

      <IonButton
        onClick={addAccount}
        shape="round"
        fill="outline"
        color="success"
      >
        <IonIcon icon={add}></IonIcon>
        Add Account
      </IonButton>
    </>
  );
}
