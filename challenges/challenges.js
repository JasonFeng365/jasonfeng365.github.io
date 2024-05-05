function convertToHref(name) {
	if (name.substring(0,2) == "💤") name = name.substring(3)
	return name.replaceAll(" ", "-").toLowerCase()
}

const acpc2024names = ["💤 Droid Foundry A", "💤 Droid Foundry B", "💤 Fours Redux", "💤 Power-up Maze"]
const acpc2024descs = [
	"Determine if droids can be salvaged from a clump of parts.",
	"Determine how may ways a droid can be salvaged from a clump of parts!",
	"After almost two years, Fours Puzzle makes its contest debut, with a fresh new look!",
	"Roll through a maze, collecting power-ups to ove faster!",
]

const scpe2024names = ["Clover Picking", "N-bonacci", "Trinomial A", "Trinomial B", "Tour Guide A", "Tour Guide B", "Triple Fourth", "Field of Flowers A", "Field of Flowers B", "Jason Appleseed"]
const scpe2024descs = [
	"Get as much luck as possible from a field of clovers!",
	"Determine if an integer exists in an N-bonacci sequence.",
	"Factor a trinomial, where a = 1.",
	"Factor a trinomial, where a != 0.",
	"Help a tour guide lead a group of as many people as possible!",
	"Help the tour guide lead as many personal tours as possible!",
	"A blast from the past, inspired by Destiny 2!",
	"Take a picture of as many flowers as possible- while avoiding grass!",
	"Go through the flower field without stepping on any of the flowers!",
	"And every seed I sow, will grow into a tree- the earth is good to me, Jason Appleseed!",
]

const scpe2023names = ["Max Multiset A", "Max Multiset B", "Max Multiset C", "Integral", "Riemann Sum", "Team Balance A", "Team Balance B", "Parity Sum", "Factor Mashup", "Buffet Raid"]
const scpe2023descs = [
	"Find the maximum subset of an array.",
	"Find the maximum subset of an array with given sizes.",
	"Find the maximum subset of given subarrays.",
	"Compute the area under a polynomial.",
	"Approximate the area under a polynomial.",
	"Split a team into balanced subarrays.",
	"Split a team into balanced subsets.",
	"Find the sum of all odd or even integers less than given values.",
	"Find all integers less than or equal to a given integer with its prime factors being a subset of that integer's prime factors.",
	"Eat all the food you can without being kicked out of a buffet!",
]

const legacynames = ["Maze Cleaning", "💤 Div Rem 1", "💤 Div Rem 2", "💤 Cheese Maze"]
const legacydescs = [
	"Clean the scientists' maze by flushing it with water.",
	"Find a number that divides some divisors- with remainders!",
	"An optimized variation of Div Rem 1.",
	"A mouse crawls through a maze, collecting as much cheese as it can!",
]
const navPrefix = "<li class=\"nav-item\"><a class=\"nav-link\" href=\"#"
const navSuffix = "</a></li>\n"
const barSuffix = "</ul>\n</div>\n</nav>\n"

function addToNav(href, name){
	return navPrefix + href + "\">" + name + navSuffix
}

function getBar(barName, first){
	let res = null
	if (first) res = "<div id=\""+barName+"\" class=\"container tab-pane fade show active\"><br>\n"
	else res = "<div id=\""+barName+"\" class=\"container tab-pane fade\"><br>\n"
	// res += "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark sticky-top\">\n<div class=\"container-fluid\">\n<ul class=\"navbar-nav\">\n"
	return res
}

function createNav(hrefs, names, difficulty, isFirst){
	return getBar(difficulty, isFirst)

	// var output = getBar(difficulty)
	// for (var i = 0; i < hrefs.length; i++)
	// 	output+=addToNav(hrefs[i], names[i])
	// return output + barSuffix
}

function createPuzzleNode(href, name, description, difficulty){
	return "<div id=\""+href+"\" class=\"container-fluid\"><br>\n<h3><b><a href=\""+difficulty+"/"+href+"\">"+name+"</a></b></h3>\n<p>"+description+"</p>\n</div>\n"
}

function createAllNodes(hrefs, names, descriptions, difficulty){
	var output = ""
	for (var i = 0; i < hrefs.length; i++)
		output+=createPuzzleNode(hrefs[i], names[i], descriptions[i], difficulty)
	return output + "</div>\n"
}

function createTab(hrefs, names, descriptions, difficulty, isFirst){
	return createNav(hrefs, names, difficulty, isFirst) + createAllNodes(hrefs, names, descriptions, difficulty) + "\n"
}

// function easy(){
// 	let hrefs1 = names1.map(convertToHref)
// 	return createTab(hrefs1, names1, desc1, "easy", true)
// }

// function medium(){
// 	let hrefs2 = names2.map(convertToHref)
// 	return createTab(hrefs2, names2, desc2, "medium", false)
// }

// function hard(){
// 	let hrefs3 = names3.map(convertToHref)
// 	return createTab(hrefs3, names3, desc3, "hard", false)
// }

function acpc2024(){
	return createTab(acpc2024names.map(convertToHref), acpc2024names, acpc2024descs, "acpc2024", true)
}
function scpe2024(){
	return createTab(scpe2024names.map(convertToHref), scpe2024names, scpe2024descs, "scpe2024", false)
}
function scpe2023(){
	return createTab(scpe2023names.map(convertToHref), scpe2023names, scpe2023descs, "scpe2023", false)
}
function legacy(){
	return createTab(legacynames.map(convertToHref), legacynames, legacydescs, "legacy", false)
}



function hrefsToBar(hrefs){
	let array = []
	for (let i = 0; i < hrefs.length; i)
		array.push(hrefs[i])
	return array
}



const challenges = new Vue({
	el: '#challenges',
	data: {
		allChallenges:acpc2024()+scpe2024()+scpe2023()+legacy(),
	},
});
