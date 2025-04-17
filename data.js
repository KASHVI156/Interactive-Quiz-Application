// Quiz Categories
const categories = [

    {

        id: 1,

        name: "Mathematics",

        slug: "math",

        icon: "✖️",
        color: "bg-blue",

        questionCount: 10

    },

    {

        id: 2,

        name: "Science",

        slug: "science",

        icon: "🧪",
        color: "bg-green",

        questionCount: 15

    },

    {

        id: 3,

        name: "General Knowledge",

        slug: "general",

        icon: "🌍",
        color: "bg-purple",

        questionCount: 12

    }

];


// Quiz Questions

const quizQuestions = {

    math: [

        {

            question: "What is the smallest prime number?",

            options: ["0", "1", "2", "3"],

            correctAnswer: 2,

            explanation: "The smallest prime number is 2. A prime number is a natural number greater than 1 that is not divisible by any other number except 1 and itself."

        },

        {
            question: "What is the value of π (pi) rounded to two decimal places?",

            options: ["3.12", "3.14", "3.16", "3.18"],

            correctAnswer: 1,

            explanation: "π (pi) is approximately equal to 3.14159... When rounded to two decimal places, it is 3.14."

        },

        {

            question: "Which of the following is not a perfect square?",

            options: ["1", "4", "9", "15"],

            correctAnswer: 3,

            explanation: "15 is not a perfect square. A perfect square is a number that can be expressed as the product of an integer by itself. The perfect squares are 1, 4, 9, 16, 25, etc."

        },

        {

            question: "What is the next number in the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, ___?",


            

