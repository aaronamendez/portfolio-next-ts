import { Flex, Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import bitcoin from '../public/bitcoin.gif';

const Navbar = () => {
	return (
		<div>
			<div>
				<Image
					src={bitcoin}
					width="80px"
					height="80px"
					alt="Bitcoin Gif"
				/>
			</div>
			<div>
				<Link href="/">
					<a className="text-white">Home</a>
				</Link>
				<Link href="/">Projects</Link>
				<Link href="/">Socials</Link>
				<Link href="/">Contact</Link>
			</div>
		</div>
	);
};

export default Navbar;
