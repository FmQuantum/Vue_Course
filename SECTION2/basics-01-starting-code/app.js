const app = Vue.createApp({
    data: function() {
       return {
        // courseGoalA : "<h2>Learn Vue!<\h2>",
        // courseGoalB : "<h2>Master Vue!<\h2>",
        courseGoalA : "Learn Vue!",
        courseGoalB : "Master Vue!",
        vueLink : "https://vuejs.org/"
       }; 
    },
    methods : {
        outputGoal : function () {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB
            }
        }
    }
});

app.mount("#user-goal");