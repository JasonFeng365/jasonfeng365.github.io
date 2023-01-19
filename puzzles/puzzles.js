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
    const hrefs = ["oddsum1", "evensum1", "primeid"]
    const names = ["Odd Sum 1", "Even Sum 1", "Prime ID"]
    const desc = ["A puzzle inspired by a MATLAB class assignment.",
    "A puzzle based off of the Odd Sum puzzle.",
    "Find the prime factorization of a very large number."]
    return createTab(hrefs, names, desc, "easy")
}

function medium(){
    const hrefs = ["oddsum2", "evensum2"]
    const names = ["Odd Sum 2", "Even Sum 2"]
    const desc = ["An optimized variation of Odd Sum 1.",
    "An optimized variation of Even Sum 1."]
    return createTab(hrefs, names, desc, "medium")
}

function hard(){
    const hrefs = ["fourspuzzle", "powerupmaze"]
    const names = ["Fours Puzze", "Power-up Maze"]
    const desc = ["My first puzzle, which came to me in a dream during 2022's Meta Hacker Cup.", 
    "Run through a maze, collecting power-ups to move faster!"]
    return createTab(hrefs, names, desc, "hard")
}

const puzzles = new Vue({
    el: '#puzzles',
    data: {
        allPuzzles:easy() + medium() + hard()
    }
});
