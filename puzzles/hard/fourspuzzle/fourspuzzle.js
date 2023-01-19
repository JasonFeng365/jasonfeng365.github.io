function hashCode(s) {
    let h = 0
    for(let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}

const foursAnswer = -2101241776; //change to correct value

const fours = new Vue({
    el: '#fourspuzzle',
    data: {
        input:"",
        response:"Enter your answer above.",
    },
    methods: {
        submit(){
            this.response = (hashCode(this.input.trim())==foursAnswer) ? "That's the correct answer!" : "Not quite. Try again."
        }
    },
});
 