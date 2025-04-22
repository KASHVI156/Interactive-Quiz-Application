//DOM Elements
// Page Elements
const homePage = document.getElementById('home-page');
const quizIntroPage = document.getElementById('quiz-intro-page');
const quizPage = document.getElementById('quiz-page');
const resultsPage = document.getElementById('results-page');
// Navigation Elements
const homeLink = document.getElementById('home-link');
const backToHomeBtn = document.getElementById('back-to-home-btn');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quitQuizBtn = document.getElementById('quit-quiz-btn');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const backHomeBtn = document.getElementById('back-home-btn');


// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Quiz Elements
const categoriesGrid = document.querySelector('.categories-grid');
const categoryIcon = document.getElementById('category-icon');
const categoryTitle = document.getElementById('category-title');
const introHeader = document.getElementById('intro-header');
const questionCount = document.getElementById('question-count');
const progressBar = document.getElementById('progress-bar');
const questionIndex = document.getElementById('question-index');
const timeRemaining = document.getElementById('time-remaining');
const currentScore = document.getElementById('current-score');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const resultsSummary = document.getElementById('results-summary');
const scoreCircle = document.getElementById('score-circle');
const percentage = document.getElementById('percentage');
const feedbackMessage = document.getElementById('feedback-message');
const resultsHeader = document.getElementById('results-header');

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Quiz State
let quizState = {
    activeCategory: null,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null,
    timer: null,
    timeLeft: 30,
    isDarkMode: false
};

// Initialize the app
function initApp() {
    loadDarkModePreference();
    renderCategories();
    setupEventListeners();
}

// Theme Toggle Functions
function loadDarkModePreference() {
    const isDarkMode= localStorage.getItem('darkMode') === 'true';
    quizState.isDarkMode = isDarkMode;
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

