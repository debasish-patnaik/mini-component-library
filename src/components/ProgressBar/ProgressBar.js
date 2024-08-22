/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: {
		height: 8,
		borderRadius: 4,
		padding: 0,
	},
	medium: {
		height: 12,
		borderRadius: 4,
		padding: 0,
	},
	large: {
		height: 16,
		borderRadius: 8,
		padding: 4,
	},
};

const ProgressBar = ({ value, size }) => {
	const styles = SIZES[size];

	if (!styles) {
		throw new Error(`Invalid size: ${size}`);
	}

	return (
		<Wrapper
			role="progressbar"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={value}
			style={{
				'--radius': styles.borderRadius + 'px',
				'--padding': styles.padding + 'px',
			}}
		>
			<VisuallyHidden>{value}%</VisuallyHidden>
			<BarWrapper>
				<Bar
					style={{
						'--width': value + '%',
						'--height': styles.height + 'px',
					}}
				></Bar>
			</BarWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: ${COLORS.transparentGray15};
	box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
	padding: var(--padding);
	border-radius: var(--radius);
`;

const BarWrapper = styled.div`
	border-radius: 4px;
	/* Trim corners when progress bar is almost full */
	overflow: hidden;
`;

const Bar = styled.div`
	background-color: ${COLORS.primary};
	width: var(--width);
	height: var(--height);
	border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
