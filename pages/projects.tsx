import React from 'react';
import Image from 'next/image';
import twidah from '../public/twidah.png';
import underdogdev from '../public/underdogdev.png';
import Link from 'next/link';
import Head from 'next/head';

const projects = () => {
	return (
		<div className="">
			<Head>
				<title>Aaron Mendez: Projects</title>
			</Head>
			<h1 className="mt-20 text-3xl text-center">Projects</h1>
			<div className="flex flex-wrap justify-around mt-20 mb-40">
				<div className="">
					<h3 className="mt-10 text-2xl text-center smallScreen:mt-0">
						Twidah.com
					</h3>
					<Link href="https://www.twidah.com">
						<Image
							className="w-1/5 h-64 transition duration-500 transform bg-blue-400 rounded-md cursor-pointer hover:bg-blue-600 hover:scale-110"
							src={twidah}
							alt="Twidah Website"
							width="600px"
							height="400px"
						/>
					</Link>
				</div>
				<div className="mt-20 mb-10 smallScreen:mt-0">
					<h3 className="text-2xl text-center ">Underdogdevs.devs</h3>
					<Link href="https://www.underdogdevs.dev">
						<Image
							className="w-1/5 h-64 transition duration-500 transform bg-blue-400 rounded-md cursor-pointer hover:bg-blue-600 hover:scale-110"
							src={underdogdev}
							alt="Underdogdev Website"
							width="600px"
							height="400px"
						/>
					</Link>
					<p></p>
				</div>
			</div>
		</div>
	);
};

export default projects;
