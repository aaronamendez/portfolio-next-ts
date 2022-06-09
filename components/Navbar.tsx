import { Flex, Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import bitcoin from '../public/bitcoin.gif';

import React from 'react';

const Navbar = () => {
	return (
		<Box color="white" margin="1.5rem" justifyContent="center">
			<Flex justify="space-between">
				<Box>
					<Image
						src={bitcoin}
						width="80px"
						height="80px"
						alt="Bitcoin Gif"
					/>
				</Box>
				<Box fontSize="1.5rem" justifyItems="center">
					<Link href="/">Home</Link>
					<Link href="/">Projects</Link>
					<Link href="/">Socials</Link>
					<Link href="/">Contact</Link>
				</Box>
			</Flex>
		</Box>
	);
};

export default Navbar;
