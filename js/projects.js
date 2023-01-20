function beginGroup(href, name, desc){
    return "<div class=\"card\">\n<div class=\"card-header\" data-bs-toggle=\"collapse\" href=\"#"+href+"\">\n<h4>"+name+"</h4>\n</div>\n<div id=\""+href+"\" class=\"collapse\">\n<div class=\"card-body\">\n<h5>"+desc+"</h5>\n"
}

function addCard(href, name, text){
    return "<div class=\"card\">\n<div class=\"card-header\" data-bs-toggle=\"collapse\" href=\"#"+href+"\">\n<h6>"+name+"</h6>\n</div>\n<div id=\""+href+"\" class=\"collapse\">\n<div class=\"card-body\">\n"+text+"\n</div>\n</div>\n</div>\n"
}

function closeCard(){
    return "</div>\n</div>\n</div>\n"
}

function section(href, name, desc, subHref, subNames, subText){
    var out = beginGroup(href, name, desc)
    for (var i = 0; i < subHref.length; i++)
        out+=addCard(subHref[i], subNames[i], subText[i])
    out+=closeCard()
    return out
}

function getLink(url, name){
    return "<a href=\""+url+"\" target=\"_blank\">"+name+"</a>"
}

function games(){
    const href = "games"
    const name = "Games"
    const desc = "Computer games that I created over the years."
    const subHref = ["cam3", "cam4", "pyb", "destinycraft", "cam2"]
    const subNames = ["Cat and Mouse 3", "Cat and Mouse 4", "Pushing Your Buttons", "DestinyCraft", "Cat and Mouse 2"]
    const subText = ["Two-dimensional platforming fighter heavily inspired by Adobe Flash games of the past. Written in pure Java, using the Swing toolkit.",
    "Work-in-progress sequel/remake of Cat and Mouse 3, written in Unity. Features will include an overhauled equipment system, new story, quality-of-life improvements, and restyled UI.",
    "Simple platformer using Java Swing, with a twist: terrain can be modified. Written in pure Java, it is my first game outside of Scratch.",
    "Work-in-progress Minecraft mod that adds items from Destiny 2, along with their special effects.",
    "The original Cat and Mouse computer game, created in Scratch, and based off of a real-life game by friends and I played from a young age."]

    return section(href, name, desc, subHref, subNames, subText)
}



function bots(){
    const href = "bots"
    const name = "Bots"
    const desc = "Various Discord bots I've coded with the <a href=\"https://github.com/DV8FromTheWorld/JDA\" target=\"_blank\">Java Discord API 4.4.0</a>."
    const subHref = ["kirbylorebot", "sierracsbot", "tutorcenterbot"]
    const subNames = ["Kirby Lore Bot", "Sierra CS Bot", "Tutor Center Bot"]
    const subText = ["Multi-purpose Discord bot used by over 200 people. Features include image manipulation, an automatic information-sending system, reminders and scheduled message sending, weather information, and of course, 6,195 lines of Kirby lore.",
    "Simple Discord bot to automate the Sierra College Computer Science Discord server, with role management for placing students in correct channel groups.",
    "Work-in-progress bot that will display schedules of Sierra College tutors on a daily basis."]

    return section(href, name, desc, subHref, subNames, subText)
}
function apis(){
    const href = "apis"
    const name = "APIs"
    const desc = "REST APIs I created to simplify complex data."
    const subHref = ["classsearchapi"]
    const subNames = ["Sierra College Class Search API"]
    const subText = ["Free to use Node.js REST API which returns the result of Sierra College's class search interface, in JSON format.<br>"+getLink("https://va44m2xs5f.execute-api.us-west-1.amazonaws.com/dev", "Class Search API")+ " &nbsp &nbsp " +getLink("https://github.com/JasonFeng365/class-search-api", "GitHub Page")]

    return section(href, name, desc, subHref, subNames, subText)
}

function assistants(){
    const href = "assistants"
    const name = "Assistants"
    const desc = "Programs to automate simple tasks or add ease to tasks unable to be automated."
    const subHref = ["propagator", "taskmanager"]
    const subNames = ["Error Propagator", "Task Manager"]
    const subText = ["Work-in-progress macro that propagates the error of variables, given an equation. It generates the equations, and automatically types them with Microsoft Word formatting.<br>"+getLink("https://github.com/JasonFeng365/PropagationOfError", "GitHub Page"),
    "Macro that completes Among Us crewmate tasks automatically, reducing the need for user input.<br>Remember: if you can code the cheat, you deserve to use it. (This is a joke.)"]

    return section(href, name, desc, subHref, subNames, subText)
}


const projects = new Vue({
    el: '#projects',
    data: {
        allProjects:null
    },
    mounted: function() {
        this.allProjects = games()+bots()+apis()+assistants()
    }
});