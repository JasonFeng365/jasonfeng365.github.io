function convertToHref(name) {
	if (name.substring(0,2) == "💤") name = name.substring(3)
	return name.replaceAll(" ", "").toLowerCase()
}

const names1 = ["Max Multiset A", "Integral", "Riemann Sum", "Team Balance A", "💤 Div Rem 1"]
const desc1 = [
	"From SCPE Fall 2023! Find the maximum subset of an array.",
	"From SCPE Fall 2023! Compute the area under a polynomial.",
	"From SCPE Fall 2023! Approximate the area under a polynomial.",
	"From SCPE Fall 2023! Split a team into balanced subarrays.",
	"Find a number that divides some divisors- with remainders!"
]

const names2 = ["Max Multiset B", "Team Balance B", "Parity Sum", "Maze Cleaning", "💤 Superstring 1", "💤 Div Rem 2"]
const desc2 = [
	"From SCPE Fall 2023! Find the maximum subset of an array with given sizes.",
	"From SCPE Fall 2023! Split a team into balanced subsets.",
	"From SCPE Fall 2023! Find the sum of all odd or even integers less than given values.",
	"Clean the scientists' maze by flushing it with water.",
	"An optimized variation of Div Rem 1.",

]

const names3 = ["Max Multiset C", "Factor Mashup", "Buffet Raid", "💤 Superstring 2 (WIP)"]
const desc3 = [
	"From SCPE Fall 2023! Find the maximum subset of given subarrays.",
	"From SCPE Fall 2023! Find all integers less than or equal to a given integer with its prime factors being a subset of that integer's prime factors.",
	"From SCPE Fall 2023! Eat all the food you can without being kicked out of a buffet!",
	"An optimized version of Superstring 1."
]




const navPrefix = "<li class=\"nav-item\"><a class=\"nav-link\" href=\"#"
const navSuffix = "</a></li>\n"
const barSuffix = "</ul>\n</div>\n</nav>\n"

function addToNav(href, name){
	return navPrefix + href + "\">" + name + navSuffix
}

function getBar(difficulty){
	let res = null
	if (difficulty == "easy") res = "<div id=\"easy\" class=\"container tab-pane fade show active\"><br>\n"
	else res = "<div id=\""+difficulty+"\" class=\"container tab-pane fade\"><br>\n"
	// res += "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark sticky-top\">\n<div class=\"container-fluid\">\n<ul class=\"navbar-nav\">\n"
	return res
}

function createNav(hrefs, names, difficulty){
	return getBar(difficulty)

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

function createTab(hrefs, names, descriptions, difficulty){
	return createNav(hrefs, names, difficulty) + createAllNodes(hrefs, names, descriptions, difficulty) + "\n"
}

function easy(){
	let hrefs1 = names1.map(convertToHref)
	return createTab(hrefs1, names1, desc1, "easy")
}

function medium(){
	let hrefs2 = names2.map(convertToHref)
	return createTab(hrefs2, names2, desc2, "medium")
}

function hard(){
	let hrefs3 = names3.map(convertToHref)
	return createTab(hrefs3, names3, desc3, "hard")
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
		allChallenges:easy() + medium() + hard(),
	},
});
