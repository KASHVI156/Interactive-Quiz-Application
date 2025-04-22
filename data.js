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
            options: ["19", "20", "21", "22"],
            correctAnswer: 2,
            explanation: "The next number in the Fibonacci sequence is 
            21. Each number is the sum of the two preceding ones: 13 + 8 = 21."
        },
        {
            question: "Solve for x: 2x + 5 = 15",
            options: ["5", "10", "4", "5.5"],
            correctAnswer: 0,
            explanation: "To solve for x, we subtract 5 from both sides to get 2x = 10, then divide both sides by 2 to get x = 5."
        },
        {
            question: "If a triangle has interior angles of 60°, 60°, and 60°, what type of triangle is it?",
            options: ["Acute", "Right", "Equilateral", "Isosceles"],
            correctAnswer: 2,
            explanation: "A triangle with three 60° angles is an equilateral triangle. An equilateral triangle has three equal sides and three equal angles."
        },
        {
            question: "What is the area of a circle with a radius of 2 units?",
            options: ["2π square units", "4π square units", "6π square units", "8π square units"],
            correctAnswer: 1,
            explanation: "The area of a circle is calculated using the formula A = πr². With a radius of 2 units, the area is π × 2² = 4π square units."
        },
        {
            question: "Which of the following is equivalent to 0.25?",
            options: ["1/2", "1/3", "1/4", "1/5"],
            correctAnswer: 2,
            explanation: "0.25 is equivalent to 1/4 because 1 ÷ 4 = 0.25."
        },
        {
            question: "What is the result of 7² - 3²?",
            options: ["40", "42", "44", "46"],
            correctAnswer: 0,
            explanation: "7² - 3² = 49 - 9 = 40."
        },
        {
            question: "If a rectangle has a length of 8 units and a width of 5 units, what is its perimeter?",
            options: ["13 units", "26 units", "40 units", "30 units"],
            correctAnswer: 1,
            explanation: "The perimeter of a rectangle is calculated using the formula P = 2(l + w). With a length of 8 units and a width of 5 units, the perimeter is 2(8 + 5) = 2(13) = 26 units."
        }
    ],
    science: [
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: 1,
            explanation: "Mars is known as the Red Planet because of its reddish appearance, which is due to iron oxide (rust) on its surface."
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correctAnswer: 2,
            explanation: "The chemical symbol for gold is Au, derived from the Latin word 'aurum', meaning gold."
        },
        {
            question: "Which of the following is not a state of matter?",
            options: ["Solid", "Liquid", "Gas", "Molecule"],
            correctAnswer: 3,
            explanation: "Molecule is not a state of matter. The four common states of matter are solid, liquid, gas, and plasma. A molecule is a group of atoms bonded together."
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Brain", "Heart", "Liver", "Skin"],
            correctAnswer: 3,
            explanation: "The skin is the largest organ in the human body. It covers about 2 square meters for the average adult and makes up about 15% of body weight."
        },
        {
            question: "Which of these elements has the symbol 'O'?",
            options: ["Osmium", "Oxygen", "Oganesson", "Ozone"],
            correctAnswer: 1,
            explanation: "The chemical symbol for Oxygen is 'O'. Osmium is 'Os', Oganesson is 'Og', and Ozone is not an element but a molecule (O₃)."
        },
        {
            question: "What force keeps planets in orbit around the Sun?",
            options: ["Electromagnetic force", "Strong nuclear force", "Gravity", "Weak nuclear force"],
            correctAnswer: 2,
            explanation: "Gravity is the force that keeps planets in orbit around the Sun. It is a force of attraction between objects with mass."
        },
        {
            question: "Which of the following is not a type of blood cell?",
            options: ["Red blood cell", "White blood cell", "Platelet", "Insulin"],
            correctAnswer: 3,
            explanation: "Insulin is not a type of blood cell; it is a hormone produced by the pancreas. Red blood cells, white blood cells, and platelets are the three main types of blood cells."
        },
        {
            question: "What is the speed of light in a vacuum?",
            options: ["300,000 km/s", "340 m/s", "3,000 km/s", "30,000 km/s"],
            correctAnswer: 0,
            explanation: "The speed of light in a vacuum is approximately 300,000 kilometers per second (3 × 10⁸ m/s)."
        },
        {
            question: "Which animal can change its skin color to match its surroundings?",
            options: ["Elephant", "Chameleon", "Giraffe", "Penguin"],
            correctAnswer: 1,
            explanation: "Chameleons can change their skin color to match their surroundings. They do this primarily for communication and regulating body temperature, rather than for camouflage as commonly believed."
        },
        {
            question: "What is the process called when plants convert light energy into chemical energy?",
            options: ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
            correctAnswer: 1,
            explanation: "Photosynthesis is the process by which plants convert light energy into chemical energy. They use carbon dioxide, water, and sunlight to produce glucose and oxygen."
        },
        {
            question: "Which of these is the smallest unit of life?",
            options: ["Atom", "Cell", "Molecule", "Tissue"],
            correctAnswer: 1,
            explanation: "The cell is the smallest unit of life. All living organisms are composed of one or more cells."
        },
        {
            question: "What is the main component of the Earth's atmosphere?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            correctAnswer: 2,
            explanation: "Nitrogen is the main component of the Earth's atmosphere, making up about 78% of it. Oxygen makes up about 21%, and other gases, including carbon dioxide, make up the remaining 1%."
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Steel", "Iron", "Diamond", "Graphite"],
            correctAnswer: 2,
            explanation: "Diamond is the hardest natural substance on Earth. It is a form of carbon where each carbon atom is bonded to four other carbon atoms in a tetrahedron."
        },
        {
            question: "Which planet has the most moons?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correctAnswer: 1,
            explanation: "Saturn has the most moons with 82 confirmed 
            moons. Jupiter has 79, Uranus has 27, and Neptune has 14 confirmed moons."            
        },
        {
            question: "What is the pH of pure water?",
            options: ["0", "7", "14", "100"],
            correctAnswer: 1,
            explanation: "The pH of pure water is 7, which is considered neutral. A pH less than 7 is acidic, and a pH greater than 7 is basic (alkaline)."
        }
    ],
    general: [
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Korea", "Japan", "Thailand"],
            correctAnswer: 2,
            explanation: "Japan is known as the Land of the Rising Sun. This name comes from the fact that Japan is located east of China, and thus the sun appears to rise from Japan when viewed from China."
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correctAnswer: 2,
            explanation: "The Mona Lisa was painted by Leonardo da Vinci. It is one of the most famous paintings in the world and is housed at the Louvre Museum in Paris, France."

