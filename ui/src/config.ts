import { ProfilesConfig } from '@darksoil-studio/profiles-provider';

export interface FriendsConfig extends ProfilesConfig {}

export const defaultConfig: FriendsConfig = {
	avatarMode: 'avatar-required',
	additionalFields: [],
	minNicknameLength: 3,
};
