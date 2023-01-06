const mazeAnswer = 53; //change to correct value

const maze = new Vue({
    el: '#PowerupMaze',
    data: {
        mazes:[],
        explanations:[],
        index:0,

        currentMaze:"",
        currentExplanation:"",
        
        input:"",
        response:"",
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
        this.explanations.push("Here's the maze at the beginning. The mouse, marked M, starts on tile A.\nThe mouse needs to collect both powerups- there are many paths it can take.")
        this.mazes.push("# # # # # # #\n# A P . . B #\n# M # . # . #\n# P . . . . #\n# # # # # # #")
        this.explanations.push("The optimal path for the mouse to take is to collect the lower power-up first.\nIt starts moving downwards.")
        this.mazes.push("# # # # # # #\n# A P . . B #\n# . # . # . #\n# M . . . . #\n# # # # # # #")
        this.explanations.push("The mouse collects the lower power-up. It then moves towards the upper power-up.\nKeep in mind: the large input set has more than two power-ups.")
        this.mazes.push("# # # # # # #\n# M P . . B #\n# . # . # . #\n# . . . . . #\n# # # # # # #")
        this.explanations.push("Here, as the mouse has collected one power-up, it can move up to two steps in one second.\n ")
        this.mazes.push("# # # # # # #\n# A M . . B #\n# . # . # . #\n# . . . . . #\n# # # # # # #")
        this.explanations.push("The mouse collects the second power-up.\nNotice that the mouse only moves one tile: as the mouse collects the powerup, it loses its remaining moves.")
        this.mazes.push("# # # # # # #\n# A . . . M #\n# . # . # . #\n# . . . . . #\n# # # # # # #")
        this.explanations.push("After the mouse has collected both power-ups, it is able to move three steps at once.\nIt can then move directly to the destination, thus resulting in a solution of 5 seconds.")

        //maybe looks better? idk
        for (var i = 0; i < this.mazes.length; ++i) this.mazes[i] = this.mazes[i].replaceAll(" ", "")
        this.index = 0
        this.setOutputs()

    }
});
 