import Link from 'next/link';
import Image from 'next/image';
import bitcoin from '../public/bitcoin.gif';

const Navbar = () => {
	return (
		<div className="flex justify-between m-4 text-white">
			<div className="flex items-center">
				<Image
					src={bitcoin}
					width="50px"
					height="50px"
					alt="Bitcoin Gif"
				/>
			</div>
			<div className="flex items-center text-xs smallScreen:text-2xl">
				<Link href="/">Home</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/socials">Socials</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</div>
	);
};

export default Navbar;
