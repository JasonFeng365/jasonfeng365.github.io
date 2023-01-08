const puzzleTab = document.querySelector("#puzzleTab")

const home = new Vue({
    el: '#home',
    data: {
        timeGreeting:"Good ",
    },
    methods:{
        puzzleLink(){
            puzzleTab.click();
        }
    },
    mounted: function() {
        try{
        let hours =new Date().getHours();
        if (hours < 12) this.timeGreeting+="morning!"
        else if (hours < 18) this.timeGreeting+="afternoon!"
        else this.timeGreeting+="evening!"
        } catch (e) {this.timeGreeting = "Hello there!"}
    }
});