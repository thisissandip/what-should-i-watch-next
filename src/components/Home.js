import React, { useEffect, useRef } from 'react';
import './searchboxstyle.scss';
import SearchBox from './SearchBox';

function Home() {
	let loaderRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			loaderRef.current.style.top = '-100vh';
			setTimeout(() => {
				loaderRef.current.style.display = 'none';
			}, 1000);
		}, 1500);
	}, []);

	return (
		<>
			<div ref={loaderRef} className='loading-wrapper'>
				<svg
					width='70'
					height='30'
					viewBox='0 0 120 30'
					xmlns='http://www.w3.org/2000/svg'
					fill='#fff'>
					<circle cx='15' cy='15' r='15' fill='#e15b64'>
						<animate
							attributeName='r'
							from='15'
							to='15'
							begin='0s'
							dur='0.8s'
							values='15;9;15'
							calcMode='linear'
							repeatCount='indefinite'
						/>
						<animate
							attributeName='fill-opacity'
							from='1'
							to='1'
							begin='0s'
							dur='0.8s'
							values='1;.5;1'
							calcMode='linear'
							repeatCount='indefinite'
						/>
					</circle>
					<circle cx='60' cy='15' r='9' fill-opacity='0.3' fill='#f8b26a'>
						<animate
							attributeName='r'
							from='9'
							to='9'
							begin='0s'
							dur='0.8s'
							values='9;15;9'
							calcMode='linear'
							repeatCount='indefinite'
						/>
						<animate
							attributeName='fill-opacity'
							from='0.5'
							to='0.5'
							begin='0s'
							dur='0.8s'
							values='.5;1;.5'
							calcMode='linear'
							repeatCount='indefinite'
						/>
					</circle>
					<circle cx='105' cy='15' r='15' fill='#f8b26a'>
						<animate
							attributeName='r'
							from='15'
							to='15'
							begin='0s'
							dur='0.8s'
							values='15;9;15'
							calcMode='linear'
							repeatCount='indefinite'
						/>
						<animate
							attributeName='fill-opacity'
							from='1'
							to='1'
							begin='0s'
							dur='0.8s'
							values='1;.5;1'
							calcMode='linear'
							repeatCount='indefinite'
						/>
					</circle>
				</svg>
			</div>
			<div className='movie-bg'></div>
			<div className='movie-bg-2'></div>
			<SearchBox />
		</>
	);
}

export default Home;
