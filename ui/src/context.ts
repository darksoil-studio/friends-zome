import { createContext } from '@lit/context';

import { FriendsStore } from './friends-store.js';

export const friendsStoreContext = createContext<FriendsStore>('friends/store');

export interface DeepLinkApi {
	buildDeepLink: (code: string) => string;
	onDeepLinkClicked: (handler: (code: string) => unknown) => void;
}

export const deepLinkApi = createContext<DeepLinkApi>('deepLinkApi');
