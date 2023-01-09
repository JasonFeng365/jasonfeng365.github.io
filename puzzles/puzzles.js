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
    const hrefs = ["nothing"]
    const names = ["Nothing here yet!"]
    const desc = ["I don't have any easy puzzles yet, but please check out the Medium and Hard puzzles. Let me know if you have any puzzle suggestions!"]
    return createTab(hrefs, names, desc, "easy")
}

function medium(){
    const hrefs = ["oddsum", "evensum"]
    const names = ["Odd Sum", "Even Sum"]
    const desc = ["A puzzle inspired by a MATLAB class assignment.",
    "A puzzle based off of the Odd Sum puzzle."]
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
