import { createContext, useReducer } from 'react';
import { Storage } from '@ionic/storage';

const initialState = {};
export const Store: any = createContext(initialState);

async function setItem(name: string, value: any) {
  try {
    const _store = new Storage();
    await _store.create();

    await _store.set(name, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}

function reducer(state: any, action: any) {
  // ALWAYS ADD THE STUFF TO APP INITIALIZATION

  switch (action.type) {
    case 'ALL': {
      setItem('all', { ...action.payload });
      return { ...action.payload };
    }

    case 'CHANGE_WALLET': {
      setItem('wallet', { ...action.payload });
      return { ...state, wallet: { ...action.payload } };
    }

    case 'CHANGE_ACCOUNTS': {
      setItem('madeAccounts', { ...action.payload }); //getting accounts:[]
      return { ...state, madeAccounts: { ...action.payload } };
    }

    default: {
      return { ...state };
    }
  }
}

export function StoreProvider(props: any) {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  const value: any = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
