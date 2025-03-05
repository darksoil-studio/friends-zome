import {
  AgentPubKeyMap,
  decodeEntry,
  fakeEntry,
  fakeCreateAction,
  fakeUpdateEntry,
  fakeDeleteEntry,
  fakeRecord,
  pickBy,
  ZomeMock,
  HoloHashMap,
  HashType,
  hash
} from "@tnesh-stack/utils";
import {
  decodeHashFromBase64,
  NewEntryAction,
  AgentPubKey,
  ActionHash,
  EntryHash,
  Delete,
  AppClient,
  fakeAgentPubKey,
  fakeDnaHash,
  Link,
  fakeActionHash,
  SignedActionHashed,
  fakeEntryHash,
  Record,
} from "@holochain/client";
import { FriendsClient } from './friends-client.js'

export class FriendsZomeMock extends ZomeMock implements AppClient {
  constructor(
    myPubKey?: AgentPubKey
  ) {
    super("friends_test", "friends", "friends_test_app", myPubKey);
  }
  
}
