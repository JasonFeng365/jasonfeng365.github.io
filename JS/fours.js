const foursAnswer = 51; //change to correct value

const fours = new Vue({
    el: '#FoursPuzzle',
    data: {
        input:"",
        response:"",
    },
    methods: {
        submit(){
            this.response = (hashCode(this.input.trim())==foursAnswer) ? "That's the correct answer!" : "Not quite. Try again."
        }
    },
});
 