fetch("https://api.wheretheiss.at/v1/satellites/25544").then(function (response) {
    console.log(response)
    return response.json()

}).then(data => console.log(data))

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fcb80315dbmshe770d01928a9b4bp12fa3ejsncb17a3d5b4e3',
		'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
	}
};

fetch('https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=51.731511404602&lon=99.944774364005&accept-language=en&polygon_threshold=0.0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



let factsArray = ["It flies around the world every 90 minutes, travelling at 5 miles per second",
"In the space of just 24 hours, the space station makes 16 orbits of Earth, travelling through 16 sunrises and sunsets",
"It's 357ft long from end to end - that's about the same as a football pitch",
"After the moon, the ISS is the second brightest object in our night sky - you don't even need a telescope to see it zoom over your house"];










    // https://rapidapi.com/GeocodeSupport/api/forward-reverse-geocoding/
    // https://wheretheiss.at/w/developer