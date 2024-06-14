const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      inputField: '',
      // outputFullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        // we store this here because otherwise won't be accessible in the setTimeout method 
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 1000);
      }
    },
    // name (value) {
    //   if (value === "") {
    //     this.outputFullName =  "";
    //   } else {
    //     this.outputFullName = value + " " + this.lastName;
    //   }
    // },
    // lastName (value) {
    //   if (value === "") {
    //     this.outputFullName =  "";
    //   } else {
    //     this.outputFullName = this.name + " " + value;
    //   }
    //}
  },
  computed: {
    // Like data properties
    outputFullName() { 
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    }
  },
  methods: {
    // outputFullName() {
    //   console.log("Running again...!");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Test";
    // },
    setName(event) {
      this.name = event.target.value;
    },
    resetName() {
      this.name = "";
    },
    oncheck(num) {
      if (this.counter > 0 ) {
        this.counter -=  num;
        if (this.counter < 0) {
          this.counter = 0;
        }
      } else {
        console.log("Counter has reached zero!");
      }
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    submitForm() {
      alert("Submitted");
    },
    resetInput() {
      this.inputField = "";
    },
  }
});

app.mount('#events');
