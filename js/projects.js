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
    const subNames = ["Cat and Mouse 3", "Pushing Your Buttons", "DestinyCraft", "Cat and Mouse 4", "Cat and Mouse 2"]
    const subText = ["Two-dimensional platforming fighter heavily inspired by Adobe Flash games of the past, written in two months for a 2022 summer game jam. Written in pure Java using the Swing toolkit, Cat and Mouse 3 boasts a completely original self-authored platforming engine.",
    "Simple platformer using Java Swing, with a twist: terrain can be modified. Written in pure Java, it is my first game outside of Scratch. I used this game as an opportunity to gain experience with Java's toolkit.",
    "Work-in-progress Minecraft mod that adds items from Destiny 2, along with their special effects.",
    "Work-in-progress sequel/remake of Cat and Mouse 3, written in Unity. Features will include an overhauled equipment system, new story, quality-of-life improvements, and restyled UI.",
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
    const subText = ["Free to use Node.js REST API which returns the result of Sierra College's class search interface, in JSON format. This API will be integrated into my future projects.<br>"+getLink("https://va44m2xs5f.execute-api.us-west-1.amazonaws.com/dev", "Class Search API")+ " &nbsp &nbsp " +getLink("https://github.com/JasonFeng365/class-search-api", "GitHub Page")]

    return section(href, name, desc, subHref, subNames, subText)
}

function assistants(){
    const href = "assistants"
    const name = "Assistants"
    const desc = "Programs to automate simple tasks or add ease to tasks unable to be automated."
    const subHref = ["listenerassistant", "copier", "propagator", "taskmanager", "emailsender"]
    const subNames = ["Listener Assistant",  "Error Propagator", "Task Manager", "Special Characters Copier", "Email Sender"]
    const subText = ["A successor to the Special Characters Copier. Keypress listener made in Java that detects sequences of characters, and executes subroutines depending on sequence entered- no mouse movement needed. Automates various tasks at the press of a button.<br>"+getLink("https://github.com/JasonFeng365/Assistant", "GitHub Page"),
    "Work-in-progress macro that propagates the error of variables, given an equation. It generates the equations, and automatically types them with Microsoft Word formatting.<br>"+getLink("https://github.com/JasonFeng365/PropagationOfError", "GitHub Page"),
    "Macro that completes Among Us crewmate tasks automatically, reducing the need for user input.<br>Remember: if you can code the cheat, you deserve to use it. (This is a joke.)",
    "Java Swing application that allows the user to copy any special character. I made this in 2021, when online physics class required Greek characters to be used.",
    "Website made with AngularJS for Sierra College tutors to log information about tutoring sessions.<br>"+getLink("https://jasonfeng365.github.io/email-sender", "Website")
]
    return section(href, name, desc, subHref, subNames, subText)
}

function physical(){
    const href = "physical"
    const name = "Engineering"
    const desc = "Engineering projects, separate from code."
    const subHref = ["motor", "arm", "charger"]
    const subNames = ["Electric Motor", "Mechanical Arm Project", "Wind-up Phone Charger"]
    const subText = ["Sierra College Principles of Physics: Electricity and Magnetism project. Given a standard set of simple materials, students build a split-ring commutator and electromagnetic core, with a design goal of running on two volts or less. <br><br><video width=\"360\" height=\"640\" controls><source src=\"resources/motor.mp4\" type=\"video/mp4\"></video>",
    "Middle school science project to construct a device to move an object on the ground. By soldering motors and a mechanical arm into remote-control cars, my teammate and I successfully moved the object.",
    "Middle school 20time project to create anything that benefits the community. I wired and soldered hand cranks on a circuit board to create a functional charger that still works to this day, 6 years later.<br><br><img class=\"img-fluid rounded d-block\" src=\"resources/charger.jpg\" width=\"582\" height=\"410\"><br>",
]
    return section(href, name, desc, subHref, subNames, subText)
}


const projects = new Vue({
    el: '#projects',
    data: {
        allProjects:null
    },
    mounted: function() {
        this.allProjects = games()+bots()+apis()+assistants()+physical()
    }
});