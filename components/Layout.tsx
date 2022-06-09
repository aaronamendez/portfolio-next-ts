import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/layout';
import type { AppProps } from 'next/app';
import Navbar from './Navbar';

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<Box width="100vw" height="100vh">
			<Box>
				<Navbar />
			</Box>
			<Box>{children}</Box>
		</Box>
	);
};

export default Layout;
