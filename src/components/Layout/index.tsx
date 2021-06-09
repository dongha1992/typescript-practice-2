import React, { useEffect } from 'react';
import styled from 'styled-components';

export const Wrapper: React.FC = ({ children }) => {
	//set 1vh for all devices

	useEffect(() => {
		calcBrowserScreenSize();
		window.addEventListener('resize', calcBrowserScreenSize);
		return () => window.removeEventListener('resize', calcBrowserScreenSize);
	}, []);

	const calcBrowserScreenSize = () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	};
	return (
		<Container>
			<Center>{children}</Center>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const Center = styled.div`
	width: 100%;
	max-width: 500px;
	min-width: 375px;
	height: 100%;
	min-height: calc(var(--vh, 1vh) * 100);
	background-color: #fff;
	--ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;
