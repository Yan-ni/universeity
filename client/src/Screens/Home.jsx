import React, { useState, useEffect } from 'react';
import config from '../utils/config';

export default function Home()
{
	const [list, setlist] = useState([]);

	const getlist = () =>
		fetch(`${config.baseUrl}/api/list`)
			.then((res) => res.json())
			.then((data) => setlist(data));

	useEffect(() => {
		getlist();
		setInterval(() => {
			getlist();
		}, 10000);
	}, []);

	return (
		<div className='Home'>
			<h1 className='university-news-title'>University News</h1>
			{list.length ? (
				<ul className='university-news-list'>
					{list.map((el, i) => (
						<li key={i}>{el}</li>
					))}
				</ul>
			) : (
				<span id="loading">Loading ...</span>
			)}

			<footer>
				<span>
					source :{' '}
					<a
						href='https://fs.univ-boumerdes.dz'
						target='_blank'
						rel='noopener noreferrer'
					>
						fs.univ-boumerdes.dz
					</a>
				</span>
			</footer>
		</div>
	);
}
