import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { LARGE_BREAKPOINT } from '../../utils/constants';

export const Banner = styled.div`
	--color: var(--first-color);
	--color-alt: var(--accent-color);
	--padding: 2rem;
	background: var(--color);
	color: #fff;

	${props => props.diagonal && css`
		clip-path : polygon(0 0, 100% 0, 100% 100%, 0 94%);
	`}
	/* Content space */
	padding-top    : var(--padding);
  padding-bottom : calc(var(--padding) * 1.25);
	@media (min-width: ${LARGE_BREAKPOINT}) {
		--padding: 4rem;
	}

	& .main-banner__img {
  	opacity : .1;
	}
	& .main-banner__data {
  	position : relative;
	}
	/* Images */
	${props => props.imageContainer && css`
		& img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		}
	`}
`;

Banner.propTypes = {
	diagonal: PropTypes.bool,
	imageContainer: PropTypes.bool
};

Banner.defaultProps = {
	diagonal: false,
	imageContainer: false
};
