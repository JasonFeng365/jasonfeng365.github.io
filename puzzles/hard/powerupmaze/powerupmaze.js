const mazeAnswer = 1605; //change to correct value

function hashCode(s) {
    let h = 0
    for(let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}

const maze = new Vue({
    el: '#powerupmaze',
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
        this.mazes.push("# # # # # # #\n# A P . . B #\n# . # . # . #\n# P . . . . #\n# # # # # # #")
        this.explanations.push("Here's the maze at the beginning. The mouse, marked M, starts on tile A. The mouse needs to collect both powerups- there are many paths it can take.")
        this.mazes.push("# # # # # # #\n# A M . . B #\n# . # . # . #\n# P . . . . #\n# # # # # # #")
        this.explanations.push("The optimal path is to collect the upper power-up first.")
        this.mazes.push("# # # # # # #\n# A . . . B #\n# M # . # . #\n# P . . . . #\n# # # # # # #")
        this.explanations.push("Upon collecting the first power-up, the mouse can move two steps at once.")
        this.mazes.push("# # # # # # #\n# A . . . B #\n# . # . # . #\n# M . . . . #\n# # # # # # #")
        this.explanations.push("The mouse then collects the second power-up. Note how the mouse only moved one step this time, because it needs to stop to collect the power-up.")
        this.mazes.push("# # # # # # #\n# A M . . B #\n# . # . # . #\n# . . . . . #\n# # # # # # #")
        this.explanations.push("Having collected all the power-ups, the mouse heads for the exit at B, three steps at a time.")
        this.mazes.push("# # # # # # #\n# A . . . M #\n# . # . # . #\n# . . . . . #\n# # # # # # #")
        this.explanations.push("The mouse finishes the maze in five moves.")
        

        //maybe looks better? idk
        for (var i = 0; i < this.mazes.length; ++i) this.mazes[i] = this.mazes[i].replaceAll(" ", "")
        this.index = 0
        this.setOutputs()

    }
});
 