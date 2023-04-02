const answer = 1508820617;

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
    },
    methods: {
        submit(){
            this.response = (hashCode(this.input.trim())==answer) ? "That's the correct answer!" : "Not quite. Try again."
        }
    },
});
 