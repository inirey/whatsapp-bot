//thanks to RDTUTORIAL
//for Module
const bent = require('bent')
const baseURI = 'https://server-api-rey.herokuapp.com'
//Pakai aja kalau rest API di atas erorr
const baseURI2 = 'http//api.reysekha.xyz'

module.exports.blackpink = function blackpink(text1) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/blackpink?text=' + encodeURIComponent(text1) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.pornhub = function pornhub(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/pornhub?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.vintage = function vintage(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/vintage?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.avengers = function avengers(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/avengers?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.marvel = function marvel(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/marvel?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ninja = function ninja(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/ninja?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.wolf = function wolf(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/wolf?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.girlgraffiti = function girlgraffiti(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/girl-grafiti?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.wolf2 = function wolf2(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/wolf2?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.marvel2 = function marvel2(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/marvel2?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.space3d = function space3d(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/space3d?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.stone = function stone(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/ston?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.lion = function lion(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/lion?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.steel = function steel(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/steel?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apirey')
		.then(resolve)
		.catch(reject)
	})
}

module.exports.grafiti = function grafiti(text1, text2) {
	return new Promise((resolve, reject) => {
		bent('buffer')(baseURI+'/api/textprome/grafiti?text1=' + encodeURIComponent(text1) + '&text2=' + encodeURIComponent(text2) + '&apikey=apireu')
		.then(resolve)
		.catch(reject)
	})
}
