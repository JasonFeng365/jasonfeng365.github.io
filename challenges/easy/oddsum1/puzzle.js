const answer = 1595505692;

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
        visible:false,
    },
    methods: {
        submit(){
            this.response = (hashCode(this.input.trim())==answer) ? "That's the correct answer!" : "Not quite. Try again."
        },
        toggleHint(){
            this.visible = !this.visible
        }
    },
});
 