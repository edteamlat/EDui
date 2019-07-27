import { css } from 'styled-components';

export const gridGap = (gap) => {
	if (!gap || typeof gap !== 'number' || gap < 0 || gap > 4) return '';
	const styles = `--gap: calc(var(--l-unit) * ${gap})`;
	return css`${styles}`;
};
