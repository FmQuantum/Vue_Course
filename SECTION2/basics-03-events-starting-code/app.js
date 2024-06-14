const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
    };
  },
  computed: {
    fullName() {
      return this.name + ' Test';
    }
  },
  methods: {
    resetName() {
      this.name = "";
    },
    oncheck(num) {
      if (this.counter > 0) {
        this.counter -= num;
        if (this.counter < 0) {
          this.counter = 0;
        }
      } else {
        console.log("Counter has reached zero.");
      }
    },
    onAddCounter(num) {
      if (this.counter >= 0) {
        this.counter += num;
      }
    },
    submitForm() {
      alert("Submitted!");
    }
  }
});

app.mount('#events');

