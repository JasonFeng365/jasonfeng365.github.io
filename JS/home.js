const home = new Vue({
    el: '#home',
    data: {
        timeGreeting:"Good ",
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

function hashCode(s) {
    let h = 0
    for(let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}