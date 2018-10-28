const question = [
  {
    front: "What does CSS stand for?",
    back: "Cascading Style Sheets",
    type: "CSS",
    toggle: false,
    closeCard: false
  },
  {
    front: "Inside which HTML element do we put the JavaScript?",
    back: "<script>",
    type: "JAVASCRIPT",
    toggle: false,
    closeCard: false
  },
  {
    front: "What does HTML stand for?",
    back: "Hyper Text Markup Language",
    type: "HTML",
    toggle: false,
    closeCard: false
  },
  {
    front: 'How do you write "Hello World" in an alert box?',
    back: 'alert("Hello World")',
    type: "JAVASCRIPT",
    toggle: false,
    closeCard: false
  },
  {
    front: "Which property is used to change the background color?",
    back: "background-color",
    type: "CSS",
    toggle: false,
    closeCard: false
  },
  {
    front: "What is the correct way to write a JavaScript array?",
    back: 'var colors = ["red", "green", "blue"]',
    type: "JAVASCRIPT",
    toggle: false,
    closeCard: false
  }
];

const quizDeck = new Vue({
  el: "#quizDeck",
  data: {
    quiz: question,
    newFront: "",
    newBack: "",
    newType: "",
    validInfo: false
  },
  methods: {
    tog: function(item) {
      item.toggle = !item.toggle;
    },
    closeCard: function(item) {
      item.closeCard = !item.closeCard;
    },
    createNewCard: function() {
      if (this.newFront !== "" && this.newBack !== "" && this.newType !== "") {
        this.quiz.push({
          front: this.newFront,
          back: this.newBack,
          type: this.newType.toUpperCase(),
          toggle: false,
          closeCard: false
        });

        this.validInfo = false;
      } else if (
        this.newFront === "" ||
        this.newBack === "" ||
        this.newType === ""
      ) {
        this.validInfo = !this.validInfo;
      }

      this.newFront = "";
      this.newBack = "";
      this.newType = "";
    }
  }
});

// JQuery //
