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

