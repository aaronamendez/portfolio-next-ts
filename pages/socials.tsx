import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import github from '../public/github.png';
import linkedin from '../public/linkedin.png';
import twitter from '../public/twitter.png';
import instagram from '../public/instagram.png';
import email from '../public/email.png';
import Head from 'next/head';

const socials = () => {
	return (
		<div>
			<Head>
				<title>Aaron Mendez: My Socials</title>
			</Head>
			<h1 className="m-10 mt-20 text-3xl text-center">My Socials</h1>
			<div className="flex flex-wrap justify-around mt-20">
				<Link href="https://github.com/aaronamendez">
					<a target="_blank">
						<Image
							src={github}
							alt="Github"
							width="100px"
							height="100px"
						/>
					</a>
				</Link>

				<Link href="https://www.linkedin.com/in/aaronamendeznyc/">
					<a target="_blank">
						<Image
							src={linkedin}
							alt="LinkedIn"
							width="100px"
							height="100px"
						/>
					</a>
				</Link>

				<Link href="https://twitter.com/AaronAMendez">
					<a target="_blank">
						<Image
							src={twitter}
							alt="Twitter"
							width="100px"
							height="100px"
						/>
					</a>
				</Link>

				<Link
					target="_blank"
					href="https://www.instagram.com/aaronalexandermendez/"
				>
					<a target="_blank">
						<Image
							src={instagram}
							alt="Instagram"
							width="100px"
							height="100px"
						/>
					</a>
				</Link>

				<Link href="mailto:aaronamendez1@gmail.com">
					<a target="_blank">
						<Image
							src={email}
							alt="Email"
							width="100px"
							height="100px"
						/>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default socials;
