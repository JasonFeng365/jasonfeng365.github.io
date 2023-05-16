const mazeAnswer = 48814;

function hashCode(s) {
    let h = 0
    for(let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}

const maze = new Vue({
    el: '#puzzle',
    data: {
        mazes:[],
        explanations:[],
        index:0,

        currentMaze:"",
        currentExplanation:"",
        
        input:"",
        response:"Enter your answer above.",
    },
    computed: {
        lowest(){
            return this.index==0
        },
        highest(){
            return this.index==this.mazes.length-1
        },
    },
    methods: {
        setOutputs(){
            this.currentMaze = this.mazes[this.index];
            this.currentExplanation = this.explanations[this.index];
        },
        submit(){
            this.response = (hashCode(this.input.trim())==mazeAnswer) ? "That's the correct answer!" : "Not quite. Try again."
        },
        next(){
            if (this.index<this.mazes.length-1) ++this.index;
            this.setOutputs()
        },
        prev(){
            if (this.index>0) --this.index;
            this.setOutputs()
        },
    },
    /*
    6543
    2334
    5410
    */
    mounted: function() {
        this.mazes.push("6 > > 3\n2 3 v 4\n5 4 v >")
        this.explanations.push("One possible path is shown, by starting at row 0, column 0 (top-left), which is 6. Water flows two spaces left, two spaces down, and one space right to reach the 0.")
        this.mazes.push("6 5 > 3\n2 3 v 4\n5 4 v >")
        this.explanations.push("Starting on row 0, column 1: 5, and following the previous path to get to 0 again. There will always be exactly one 0.")
        this.mazes.push("6 5 4 3\n2 3 v 4\n5 4 v >")
        this.explanations.push("Starting on (0, 2): 4, and following the previous path to get to 0, which is at (2, 3).")
        this.mazes.push("6 5 4 3\n2 3 > 4\n5 4 v >")
        this.explanations.push("Starting on (1, 1): 3. Note that the water is able to flow from 3 to 3 just fine.")
        this.mazes.push("6 5 4 3\n2 3 3 4\n5 4 v >")
        this.explanations.push("Starting on (1, 2): 3.")
        this.mazes.push("6 5 4 3\n2 3 < 4\n5 4 v >")
        this.explanations.push("Starting on (1, 3): 4. Note that (1, 0), the 2, is not a valid starting point, because water has no lower spaces to flow to.")
        this.mazes.push("6 5 4 3\n2 3 3 4\n5 > > >")
        this.explanations.push("Starting on (2, 0): 5.")
        this.mazes.push("6 5 4 3\n2 3 3 4\n5 4 > >")
        this.explanations.push("Starting on (2, 1): 4.")
        this.mazes.push("6 5 4 3\n2 3 3 4\n5 4 1 >")
        this.explanations.push("Starting on (2, 2): 1. There are 10 total possible starting paths.")

        this.index = 0
        this.setOutputs()

    }
});
 