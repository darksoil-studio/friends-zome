import { ProfilesConfig } from '@darksoil-studio/profiles-provider';

export type FriendsConfig = ProfilesConfig;

export const defaultConfig: FriendsConfig = {
	avatarMode: 'avatar-required',
	additionalFields: [],
	minNicknameLength: 3,
};
