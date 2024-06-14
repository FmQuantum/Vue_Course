const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "", 
      goals: [], 
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoalValue.trim() !== "") {
        const newGoal = {
          id: Date.now(), // Unique ID based on current timestamp
          text: this.enteredGoalValue
        };
        this.goals.push(newGoal);
        this.enteredGoalValue = ""; // Clear the input field
      }
    },
    logGoal(goalId) {
      const goal = this.goals.find(g => g.id === goalId);
      console.log("PROXY OBJ: ",goal);
      // conver from proxy obj to a plain one
      console.log("PLAIN OBJ: ",JSON.parse(JSON.stringify(goal)));
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount('#user-goals');
