let ISSSearchbutton = document.getElementById("ISSSearch")
ISSSearchButton.addEventListener("click", getISSData)

//this function calls the first API to get lat,long info as well as velocity and altitude
function getISSData() {
	let ISSdataLat;
	let ISSdataLong;
	fetch("https://api.wheretheiss.at/v1/satellites/25544").then(function (response) {
		//console.log(response)
		return response.json()

	})
		//.then(data => console.log(data))
		.then(function (ISSdata) {
			console.log(ISSdata)
			let latitude = document.getElementById("latitude")
			latitude.textContent="latitude: " + (ISSdata.latitude)
			let longitude = document.getElementById("longitude")
			longitude.textContent="longitude: " + (ISSdata.longitude)
			let altitude = document.getElementById("altitude")
			altitude.textContent="altitude: " + (ISSdata.altitude) + " km"
			let velocity = document.getElementById("velocity")
			velocity.textContent="velocity: " + (ISSdata.velocity) + " km/h"
			// console.log(ISSdata.visibility);
			let visibility = document.getElementById("visibility")
			visibility.textContent="visibility: " + (ISSdata.visibility)
			ISSdataLat = ISSdata.latitude
			ISSdataLong= ISSdata.longitude
			// console.log(ISSdataLat)
			getGeoLocation(ISSdataLat,ISSdataLong)
		});
}//this API takes the lat-long data and returns an actual city
function getGeoLocation(lat, long) {
	console.log(lat,long)
	// lat= 32.77
    // long = -96.79
	console.log(`https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=${lat}&lon=${long}&accept-language=en&polygon_threshold=0.0`)
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'fcb80315dbmshe770d01928a9b4bp12fa3ejsncb17a3d5b4e3',
			'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
		}
	};
	fetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=${lat}&lon=${long}&accept-language=en&polygon_threshold=0.0`, options)
		.then(response =>{ 
			console.log(response)
			response.json()
		
		})
		.then(response => {
			if(response){
			console.log(response)
			console.log(response.address.city)
			console.log(response.address.country)
			let country = document.getElementById("country")
			country.textContent="country: " + (response.address.country)
			let city = document.getElementById("city")
			city.textContent="city: " + (response.address.city)
			}else{
				let country = document.getElementById("country")
			country.textContent="over the ocean"
			let city = document.getElementById("city")
			city.textContent="or Atlantis"
			}
		})
			
		.catch(err => console.error(err));
		
};

//images for the carousel as well as the function
let images = [
	{img:"./AssetsFolder/360Window.jpeg",description:"A 360 view from the ISS"},
	{img:"./AssetsFolder/firstSegmentLaunch.png",description:"ISS first segment being launched into space"},
	{img:"./AssetsFolder/ISS2.jpeg",description:"ISS timelapse photo from Earth"},
	{img:"./AssetsFolder/ISS3.jpeg",description:"Another timelapse photo from Earth"},
	{img:"./AssetsFolder/ISS4.jpg", description:"Astronaut chilling in space"},
	{img:"./AssetsFolder/ISS6.jpg", description:"Image of ISS taken from space with Earth in the background"},
	{img:"./AssetsFolder/ISS9.jpg", description:"2 astronauts having a good time in the hub"},
	{img:"./AssetsFolder/IssBeingBuilt.jpg", description:"the second segment of the ISS under construction"},
	{img:"./AssetsFolder/ISSBlueprints.jpg", description:"blueprints of the ISS"},
	{img:"./AssetsFolder/ISScomponents.jpg",description:"floorplan of the ISS"},
	{img:"./AssetsFolder/repairingRoboticArm.jpg",description:"2 astronauts doing repairs on the outside of the ISS"},
]
let imageEl = document.getElementById("carousel");
let imageDescEl = document.getElementById("carouselDescription")
let container = document.querySelector(".carouselContainer");
let currentImageIndex =0;

renderImage();
function renderImage(){
    imageEl.src = images[currentImageIndex].img;
    imageDescEl.textContent = images[currentImageIndex].description;
}

let facts = ["It flies around the world every 90 minutes, traveling at 5 miles per second",
	"In the space of just 24 hours, the space station makes 16 orbits of Earth, traveling through 16 sunrises and sunsets",
=======

let carouselButton = document.getElementById("carouselButton")
carouselButton.addEventListener("click", carouselGallery)
//function that when clicked the image gallery scrolls through the images
function carouselGallery(){
	if (currentImageIndex < images.length-1){
	currentImageIndex++;
	}
else{
currentImageIndex = 0;
}
renderImage()
}
//fun facts array af well as the function that chooses random fact to display
let facts = ["It flies around the world every 90 minutes, travelling at 5 miles per second",
	"In the space of just 24 hours, the space station makes 16 orbits of Earth, travelling through 16 sunrises and sunsets",
	"It's 357ft long from end to end - that's about the same as a football pitch",
	"After the moon, the ISS is the second brightest object in our night sky - you don't even need a telescope to see it zoom over your house",
	"There are two bathrooms on board! There's also one gym, six sleeping quarters and a 360 degree bay window",
	"Six spaceships can dock to the station at any one time",
	"Astronauts have to work out for two hours a day while on board to help keep their muscles in shape while in space",
	"More than 50 computers control all the systems on the station",
	"The electrics on the ISS are all connected with eight miles of cabling",
	"230 individuals from 18 countries have visited the International Space Station",
	"205 spacewalks have been carried out since December 1998",
	"The ISS weighs about 420,000kg - that's about the same as 320 cars",
	"It flies through space about 250 miles from the Earth - a craft can get there from Earth in about six hours",
	"The astronaut Peggy Whitson set the record for spending the most total length of time living and working in space at 665 days on 2 September 2017",
];

let factsButton = document.getElementById("factsButton")
factsButton.addEventListener("click", factsArray)

function factsArray() {
	let Num = Math.floor((Math.random() * facts.length));
	console.log(facts[Num])
	let showFacts = document.getElementById("factGenerator")
	showFacts.textContent = facts[Num]
}




//https://rapidapi.com/GeocodeSupport/api/forward-reverse-geocoding/
// https://wheretheiss.at/w/developer


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


//function to save date to local storage 
if(localStorage.getItem("date")&&localStorage.getItem("location")&&localStorage.getItem("howLong")){
	console.log("hello")
	console.log(localStorage.getItem("date"))
	let date = document.getElementById("Date")
	let location = document.getElementById("location")
	let howLong = document.getElementById("howLong")
	date.value = localStorage.getItem("date")
	location.value = localStorage.getItem("location")
	howLong.value = localStorage.getItem("howLong")
}
function dateSaver(){
	let date = document.getElementById("Date").value
	let location = document.getElementById("location").value
	let howLong = document.getElementById("howLong").value
	localStorage.setItem("date",date)
	localStorage.setItem("location",location)
	localStorage.setItem("howLong",howLong)

}
let saveButton = document.getElementById("saveButton")
saveButton.addEventListener("click", dateSaver)