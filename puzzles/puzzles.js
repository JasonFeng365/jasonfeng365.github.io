const hrefs1 = ["oddsum1", "evensum1", "primeid", "mazefilling"]
const names1 = ["Odd Sum 1", "Even Sum 1", "Prime ID", "Maze Filling"]
const desc1 = ["A puzzle inspired by a MATLAB class assignment.",
"A puzzle based off of the Odd Sum puzzle.",
"Find the prime factorization of a very large number.",
"Help some scientists prepare a maze for a mouse to run through."]

const hrefs2 = ["oddsum2", "evensum2", "mazecleaning"]
const names2 = ["Odd Sum 2", "Even Sum 2", "Maze Cleaning"]
const desc2 = ["An optimized variation of Odd Sum 1.",
"An optimized variation of Even Sum 1.",
"Clean the scientists' maze by flushing it with water."]

const hrefs3 = ["fourspuzzle", /*"powerupmaze",*/ "cheesemaze"]
const names3 = ["Fours Puzze", /*"Power-up Maze",*/ "Cheese Maze"]
const desc3 = ["My first puzzle, which came to me in a dream during 2022's Meta Hacker Cup.", 
// "The mouse runs through a maze, collecting power-ups to move faster!",
"The mouse "]




const navPrefix = "<li class=\"nav-item\"><a class=\"nav-link\" href=\"#"
const navSuffix = "</a></li>\n"
const barSuffix = "</ul>\n</div>\n</nav>\n"

function addToNav(href, name){
    return navPrefix + href + "\">" + name + navSuffix
}

function getBar(difficulty){
    if (difficulty == "easy") return "<div id=\"easy\" class=\"container tab-pane fade show active\"><br>\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark sticky-top\">\n<div class=\"container-fluid\">\n<ul class=\"navbar-nav\">\n"
    return "<div id=\""+difficulty+"\" class=\"container tab-pane fade\"><br>\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark sticky-top\">\n<div class=\"container-fluid\">\n<ul class=\"navbar-nav\">\n"
}

function createNav(hrefs, names, difficulty){
    var output = getBar(difficulty)
    for (var i = 0; i < hrefs.length; i++)
        output+=addToNav(hrefs[i], names[i])
    return output + barSuffix
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
    return createTab(hrefs1, names1, desc1, "easy")
}

function medium(){
    return createTab(hrefs2, names2, desc2, "medium")
}

function hard(){
    return createTab(hrefs3, names3, desc3, "hard")
}

function hrefsToBar(hrefs){
    let array = []
    for (let i = 0; i < hrefs.length; i)
        array.push(hrefs[i])
    return array
}



const puzzles = new Vue({
    el: '#puzzles',
    data: {
        allPuzzles:easy() + medium() + hard(),
        barEasy:null,
        barMedium:null,
        barHard:null
    },
    mounted:function(){
        this.barEasy = createNav(hrefs1, names1, "")
        this.barEasy = this.barEasy.substring(this.barEasy.indexOf("<nav "))
    }
});
