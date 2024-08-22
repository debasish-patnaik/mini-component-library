import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: { fontSize: 14, iconSize: 16, borderThickness: 1, height: 24 },
	large: { fontSize: 18, iconSize: 24, borderThickness: 2, height: 36 },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
	const styles = SIZES[size];

	return (
		<Wrapper>
			<IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
				<Icon id={icon} size={styles.iconSize} />
			</IconWrapper>
			<VisuallyHidden>{label}</VisuallyHidden>
			<NativeInput
				{...delegated}
				style={{
					'--width': width + 'px',
					'--height': styles.height / 16 + 'rem',
					'--border-thickness': styles.borderThickness + 'px',
					'--font-size': styles.fontSize / 16 + 'rem',
				}}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.label`
	display: block;
	position: relative;
	color: ${COLORS.gray700};
	width: max-content;

	&:hover {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	height: var(--size);
`;

const NativeInput = styled.input`
	width: var(--width);
	height: var(--height);
	font-size: var(--font-size);
	border: none;
	border-bottom: var(--border-thickness) solid ${COLORS.black};
	padding-inline-start: var(--height);
	color: inherit;
	font-weight: 700;
	outline-offset: 2px;

	&::placeholder {
		font-weight: 400;
		color: ${COLORS.gray500};
	}
`;

export default IconInput;
