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

function toggleDarkMode() {
    quizState.isDarkMode = !quizState.isDarkMode;
    
    if (quizState.isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    localStorage.setItem('darkMode', quizState.isDarkMode);
}

// Setup Event Listeners
function setupEventListeners() {
    // Theme toggle
    themeToggleBtn.addEventListener('click', toggleDarkMode);
    
    // Navigation
    homeLink.addEventListener('click', goToHomePage);
    backToHomeBtn.addEventListener('click', goToHomePage);
    backHomeBtn.addEventListener('click', goToHomePage);
    
 // Quiz flow
 startQuizBtn.addEventListener('click', startQuiz);
 quitQuizBtn.addEventListener('click', quitQuiz);
 submitBtn.addEventListener('click', checkAnswer);
 nextBtn.addEventListener('click', nextQuestion);
 tryAgainBtn.addEventListener('click', retryQuiz);
}

// Page Navigation Functions
function showPage(page) {
 // Hide all pages
 homePage.classList.remove('active');
 quizIntroPage.classList.remove('active');
 quizPage.classList.remove('active');
 resultsPage.classList.remove('active');
 
 // Show the requested page
 page.classList.add('active');
}

function goToHomePage() {
 resetQuizState();
 showPage(homePage);
}

function goToIntroPage(category) {
 quizState.activeCategory = category;
 
