export interface FlyoutSettings {
	open?: boolean;
	id?: string;
	width?: string;
}

export type ButtonProps = {
	type: 'button' | 'submit' | 'reset';
	className: string;
}

export type CheckboxField = {
	value: string | null | undefined;
	checked: boolean;
}

export type LabelValue = {
	value: string | null | undefined;
	label: string;
}

export type Checked = LabelValue & { checked: boolean };

// TODO: verify all 'text' input types
export type textInputs = 'text' | 'username' | 'email' | 'password' | 'tel' | 'url';