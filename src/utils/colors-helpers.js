import { colors } from './colors';

export function getColorWithAlt({ color }) {
	return colors[`${color}-alt`] || colors[color] || colors['first-color'];
}

export function getColor({ color }) {
	return colors[color] || colors['first-color'];
}
