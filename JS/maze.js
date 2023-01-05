new Vue({
    el: '#PowerupMaze',
    data: {
        maze:"",
        index:0,
        explanations:["Coming soon!"],
    },
    computed: {
        currentMaze(){
            var output = ""
            for (var y = 0; y < this.maze.length; y++) output += this.maze[y].join(" ")+"\n"
            return output
        },
        explanation(){
            return this.explanations[this.index]
        }
    },
    mounted: function() {
        const sample = "##########\n#A.P#..#B#\n#.#....#.#\n#P#....#.#\n#P.......#\n##########".split("\n");
        const width = sample[0].length, height = sample.length;
        this.maze = []
        for (var y = 0; y < height; y++) {
            var current = []
            for (var x = 0; x < width; x++) {
                current.push(sample[y].charAt(x))
            }
            this.maze.push(current)
        }
        console.log(this.maze)
    }
});
 