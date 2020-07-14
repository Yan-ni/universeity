import React from 'react';

import Schedule from '../Components/Schedule';

const data = [
	{
		facultyName: 'Math et infomatique',
		link: 'https://fs.univ-boumerdes.dz/Emploi/2019-2020-S2/MI-L1.pdf',
	},
	{
		facultyName: 'Science et technologie',
		link:
			'https://fs.univ-boumerdes.dz/Emploi/2019-2020-S2/GROUPES%20ST%20S02%20NEW.pdf',
	},
	{
		facultyName: 'Science de la nature et de la vie',
		link:
			'https://fs.univ-boumerdes.dz/Emploi/2019-2020-S2/charge-snv/1SNV_BIO_S2.pdf',
	},
	{
		facultyName: 'Science de la matière',
		link:
			'https://fs.univ-boumerdes.dz/Emploi/2019-2020-S2/CHARGE%20SM%20S2%20LE%2009.03.2020.PDF',
	},
];

export default function Schedules() {
	return (
		<div className='Schedules'>
			{data.map((i) => (
				<Schedule facultyName={i.facultyName} link={i.link} />
			))}
		</div>
	);
}
