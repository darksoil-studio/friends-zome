import { 
  SignedActionHashed,
  CreateLink,
  Link,
  DeleteLink,
  Delete,
  AppClient, 
  Record, 
  ActionHash, 
  EntryHash, 
  AgentPubKey,
} from '@holochain/client';
import { EntryRecord, ZomeClient } from '@tnesh-stack/utils';

import { FriendsSignal } from './types.js';

export class FriendsClient extends ZomeClient<FriendsSignal> {

  constructor(public client: AppClient, public roleName: string, public zomeName = 'friends') {
    super(client, roleName, zomeName);
  }
}
