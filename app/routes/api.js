const router = require('express').Router();
const axios = require('axios');
const cheerio = require('cheerio');

router.get('/list', async (req, res) =>
{
	const url = 'https://fs.univ-boumerdes.dz/';
	let list = [];
	await axios.get(url).then((res) => {
		if(res.status === 200) {
			const $ = cheerio.load(res.data);

			const ext_data = (el) => $(el).text().replace(/\s\s+/g, '').trim();

			$('td')
				.find('h2, p')
				.each((i, el) => {
					const data = ext_data(el);
					if (data.length) list = [...list, data];
				});
		}
	});
	res.json(list);
});

module.exports = router;