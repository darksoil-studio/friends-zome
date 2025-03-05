import { createContext } from '@lit/context';
import { FriendsStore } from './friends-store.js';

export const friendsStoreContext = createContext<FriendsStore>(
  'friends/store'
);

