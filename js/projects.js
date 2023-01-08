function beginGroup(href, name){
    return "<div class=\"card\">\n<div class=\"card-header\" data-bs-toggle=\"collapse\" href=\"#"+href+"\">\n<h4>"+name+"</h4>\n</div>\n<div id=\""+href+"\" class=\"collapse\">\n<div class=\"card-body\">\n"
}

function addCard(href, name, text){
    return "<div class=\"card\">\n<div class=\"card-header\" data-bs-toggle=\"collapse\" href=\"#"+href+"\">\n<h6>"+name+"</h6>\n</div>\n<div id=\""+href+"\" class=\"collapse\">\n<div class=\"card-body\">\n"+text+"\n</div>\n</div>\n</div>\n"
}

function closeCard(){
    return "</div>\n</div>\n</div>\n"
}

function section(href, name, subHref, subNames, subText){
    var out = beginGroup(href, name)
    for (var i = 0; i < subHref.length; i++)
        out+=addCard(subHref[i], subNames[i], subText[i])
    out+=closeCard()
    return out
}

function bots(){
    const href = "bots"
    const name = "Bots"
    const subHref = ["kirbylorebot"]
    const subNames = ["Kirby Lore Bot"]
    const subText = ["Discord bot"]

    return section(href, name, subHref, subNames, subText)
}
function apis(){
    const href = "apis"
    const name = "APIs"
    const subHref = ["classsearchapi"]
    const subNames = ["Sierra College Class Search API"]
    const subText = ["Rest API"]

    return section(href, name, subHref, subNames, subText)
}


const projects = new Vue({
    el: '#projects',
    data: {
        allProjects:null
    },
    mounted: function() {
        this.allProjects = bots()+apis()
    }
});