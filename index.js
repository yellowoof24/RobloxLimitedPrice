const client = require('cheerio-httpcli');

let id = '1213029'; // 아이디

client.fetch(`https://www.roblox.com/catalog/${id}/`, {}, function(
	err,
	$,
	res,
	body
) {
	$('span').each(function() {
		if ($(this).attr().class === 'text-robux-lg wait-for-i18n-format-render ') {
			console.log($(this).text());
		}
	});
});
