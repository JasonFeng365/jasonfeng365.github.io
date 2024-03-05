const answer = 1623334395;

function generateTable(){
    let mag = [5, 4, 3, 3, 4, 3, 3, 2, 3, 3, 2, 1, 3, 2, 1, 1, 2, 1, 1, 0]
    let perks = [0, 0, 1, 2, 0, 1, 0, 2, 1, 0, 0, 3, 0, 0, 1, 2, 0, 1, 0]
    let perkNames = ["None", "<b>Triple</b>", "<b>Fourth</b>", "<b><i>Both</i></b>"]
    let out = "<div class=\"table-responsive\"><table class=\"table\"><tbody><tr>"

    out += "<th>Shot</th>"
    for (let i = 1; i <= 20; i++) out += "<td>"+i+"</td>"
    
    out+="</tr><tr>"
    out += "<th>Magazine</th>"
    for (let i = 0; i < 20; i++) out += "<td>"+mag[i]+"</td>"

    out+="</tr><tr>"
    out += "<th>Activations</th>"
    for (let i = 0; i < 19; i++) out += "<td>"+perkNames[perks[i]]+"</td>"
    out+="<td>N/A</td></tr></tbody></table>"
    return out    
}


function hashCode(s) {
    let h = 0
    for(let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}

new Vue({
    el: '#puzzle',
    data: {
        input:"",
        response:"Enter your answer above.",
        magTable:generateTable()
    },
    methods: {
        submit(){
            this.response = (hashCode(this.input.trim())==answer) ? "That's the correct answer!" : "Not quite. Try again."
        },
    },
});
 