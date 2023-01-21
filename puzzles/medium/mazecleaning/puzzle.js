const mazeAnswer = 1823; //change to correct value

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
    mounted: function() {
        this.mazes.push("# # # # # # #\n# . # . . . #\n# . # . . A #\n# . . . # . #\n# # # # # # #")
        this.explanations.push("Here's the maze at the beginning. The water, marked W, starts on tile A.\nThe water must fill the entire grid.")
        this.mazes.push("# # # # # # #\n# . # . . W #\n# . # . W A #\n# . . . # W #\n# # # # # # #")
        this.explanations.push("In the first second, water flows up, down, and left. It cannot flow right, because a wall is in the way.")
        this.mazes.push("# # # # # # #\n# . # . W W #\n# . # W W A #\n# . . . # W #\n# # # # # # #")
        this.explanations.push("The water keeps flowing. Water is once again stopped by walls on the top and bottom.")
        this.mazes.push("# # # # # # #\n# . # W W W #\n# . # W W A #\n# . . W # W #\n# # # # # # #")
        this.explanations.push("Now, the water completely stops flowing on the right side.")
        this.mazes.push("# # # # # # #\n# . # W W W #\n# . # W W A #\n# . W W # W #\n# # # # # # #")
        this.explanations.push("The water can only flow on the left side.")
        this.mazes.push("# # # # # # #\n# . # W W W #\n# . # W W A #\n# W W W # W #\n# # # # # # #")
        this.explanations.push("")
        this.mazes.push("# # # # # # #\n# . # W W W #\n# W # W W A #\n# W W W # W #\n# # # # # # #")
        this.explanations.push("")
        this.mazes.push("# # # # # # #\n# W # W W W #\n# W # W W A #\n# W W W # W #\n# # # # # # #")
        this.explanations.push("At this point, the entire maze is filled with water, and we are complete. The answer to this maze is 7.")

        //maybe looks better? idk
        for (var i = 0; i < this.mazes.length; ++i) this.mazes[i] = this.mazes[i].replaceAll(" ", "")
        this.index = 0
        this.setOutputs()

    }
});
 