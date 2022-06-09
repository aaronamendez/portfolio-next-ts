import React, { ReactNode } from 'react';
import type { AppProps } from 'next/app';
import Navbar from './Navbar';

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>{children}</div>
		</div>
	);
};

export default Layout;
