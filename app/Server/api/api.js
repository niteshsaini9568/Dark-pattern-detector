const url = 'https://data-breach-checker.p.rapidapi.com/api/breach?email=www.abhinav1@gmail.com';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd96bc44270msh26c0c9003a2ea98p1bf1ffjsn114f7c0b1621',
		'X-RapidAPI-Host': 'data-breach-checker.p.rapidapi.com'
	}
};

let response = async ()=>{try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}};

response();