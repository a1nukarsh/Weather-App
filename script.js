const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a444819cf0msh03f52708c537cd0p124376jsnd74bf1f8b08d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => {
		
		
	
		console.log(response)
	
	
	})
	.catch(err => console.error(err));