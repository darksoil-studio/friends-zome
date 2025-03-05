export interface FieldConfig {
	name: string;
	label: string;
	required: boolean;
}

export interface FriendsConfig {
	additionalFields: FieldConfig[];
	minNicknameLength: number;
}

export const defaultConfig: FriendsConfig = {
	additionalFields: [],
	minNicknameLength: 3,
};
