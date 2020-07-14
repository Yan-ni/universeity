import React from 'react';

import { NavLink } from 'react-router-dom';

export default function Navigation() {
	return (
		<div className='navigation-bar'>
			<nav>
				<h3>UNIVERSE-IT-Y</h3>
				<ul>
					<NavLink to='/' exact activeClassName='selected'>
						Home
					</NavLink>
					<NavLink to='/Schedules' activeClassName='selected'>
						Schedules
					</NavLink>
					<NavLink to='/Soon' activeClassName='selected'>
						Soon
					</NavLink>
					<NavLink to='/About' activeClassName='selected'>
						About
					</NavLink>
				</ul>
			</nav>
		</div>
	);
}
