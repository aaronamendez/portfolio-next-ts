import type { NextPage } from 'next';
import Image from 'next/image';
import aaron from '../public/aaron.png';
import bitcoin from '../public/bitcoin.gif';
import nfts from '../public/nfts.jpeg';
import investing from '../public/investing.png';
import gaming from '../public/gaming.jpeg';
import streaming from '../public/streaming.jpeg';
import fishing from '../public/fishing.jpeg';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Aaron Mendez: Home</title>
			</Head>
			{/* Hello World */}
			<div className="flex-wrap items-center m-10 mt-20 place-content-center smallScreen:flex">
				<div className="w-72">
					<h1 className="mb-3 text-3xl">
						Hello <span className="wave">👋</span>
					</h1>
					<p className="text-lg">
						I’m Aaron, a Software Engineer based in New York City. I
						absolutely love building web applications and learning
						about exciting new technologies coming out that make
						building even more fun and engaging. I’m also a big
						believer in Web3 and the future of crypto.
					</p>
				</div>
				<div>
					<Image
						className="rounded-full"
						alt="Aaron Mendez"
						src={aaron}
						width="350px"
						height="350px"
					/>
				</div>
			</div>
			{/* Storyline */}
			<div className="flex items-center content-center justify-center m-10 mt-20 ">
				<div className="w-64 smallScreen:w-1/2">
					<h2 className="text-2xl text-center">My Storyline</h2>
					<p className="mt-10">
						Throughout my experience I’ve always worked in
						management about as long as I can remember. I loved
						working with people and engaging in different sets of
						tasks. I never shy’d away from a challenge, and love
						researching technologies and tools to make things like
						our workflows exponentially more efficient. Nothing gave
						me more joy than helping others and making sure we were
						all happy and having fun while working.
					</p>
					<br />
					<p>
						However, I found myself time and time again going back
						home and just using YouTube and Google to learn to code
						with the few hours I had left in my day after coming
						home from work. I'll never forget my first 'Hello World'
						displayed by none other than myself and rendering it on
						the terminal. I decided last year 2021, that I wouldn’t
						wait on this feeling any longer and so I made a leap and
						decided to pursue software development whole heartedly
						through a coding bootcamp called Bloomtech also known as
						Lambda School where I would spend the next 6 months
						vigorously studying and training on modern technologies
						to build fully scalable and capable web applications.
					</p>
					<br />
					<p>
						It was an absolute experience to put it quite frankly
						and I am ever grateful for the wonderful people and
						relationships I’ve developed along the way. As of May
						2022, I am a certified Full-Stack Web Developer and
						graduate of Bloomtech Institute of Technology. For the
						first time in my life, I feel like I’m in the room I’ve
						always been meant to be in, having the conversations I
						was always meant to have. I’ve never been more inlove in
						doing what I am doing every single day and can truly say
						with absolute certainty I found my passion. That's when
						I knew...
					</p>
					<br />
					<p className="text-end">
						...my journey starts here, but it ends never.
					</p>
				</div>
			</div>
			{/* My Interests */}
			<div className="mt-20">
				<h2 className="text-2xl text-center">My Interests</h2>
				<div className="flex flex-wrap m-10 place-self-center ">
					<div className="flex justify-center m-3 text-center flex-1/3">
						<Image
							src={bitcoin}
							alt="Bitcoin"
							width="310px"
							height="260px"
						/>
					</div>
					<div className="flex justify-center m-3 flex-1/3">
						<Image
							className="rounded-md"
							src={nfts}
							alt="NFT's"
							width="310px"
							height="260px"
						/>
					</div>
					<div className="flex justify-center m-3 flex-1/3">
						<Image
							className="rounded-md"
							src={investing}
							alt="Investing"
							width="310px"
							height="260px"
						/>
					</div>
					<div className="flex justify-center m-3 flex-1/3">
						<Image
							className="rounded-md"
							src={gaming}
							alt="Gaming"
							width="310px"
							height="260px"
						/>
					</div>
					<div className="flex justify-center m-3 flex-1/3">
						<Image
							className="rounded-md"
							src={streaming}
							alt="streaming"
							width="310px"
							height="260px"
						/>
					</div>
					<div className="flex justify-center m-3 flex-1/3">
						<Image
							className="rounded-md"
							src={fishing}
							alt="Fishing"
							width="310px"
							height="260px"
						/>
					</div>
				</div>
			</div>
			{/* Toolbox */}
			<div className="mt-20 mb-20">
				{/* <h2 className="text-2xl text-center ">My Toolbox</h2> */}
			</div>
		</>
	);
};

export default Home;
