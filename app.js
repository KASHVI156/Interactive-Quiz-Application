// DOM Elements
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
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
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
    
    // Update the intro page with category info
    categoryIcon.textContent = category.icon;
    categoryTitle.textContent = ${category.name} Quiz;
    questionCount.textContent = ${category.questionCount} questions;
    introHeader.className = intro-header ${category.color};
    
    showPage(quizIntroPage);
}

function goToQuizPage() {
    showPage(quizPage);
}

function goToResultsPage() {
    // Save the result to localStorage
    saveQuizResult();
    
    // Calculate percentage
    const scorePercentage = Math.round((quizState.score / quizState.questions.length) * 100);
    
    // Update result content
    resultsSummary.textContent = You scored ${quizState.score} out of ${quizState.questions.length} in the ${quizState.activeCategory.name} quiz!;
    
    // Set score circle color and percentage
    scoreCircle.setAttribute('stroke-dasharray', ${scorePercentage}, 100);
    percentage.textContent = ${scorePercentage}%;
    
    resultsHeader.className = results-header ${quizState.activeCategory.color};
    
    // Clear classes first
    percentage.className = 'percentage';
    scoreCircle.className = 'circle';
    
    // Add appropriate color class based on score
    if (scorePercentage >= 70) {
        percentage.classList.add('score-green');
        scoreCircle.classList.add('score-green');
        feedbackMessage.textContent = "Great job! You have a strong understanding of this topic!";
    } else if (scorePercentage >= 40) {
        percentage.classList.add('score-amber');
        scoreCircle.classList.add('score-amber');
        feedbackMessage.textContent = "Good effort! With a bit more study, you'll master this topic!";
    } else {
        percentage.classList.add('score-red');
        scoreCircle.classList.add('score-red');
        feedbackMessage.textContent = "Keep practicing! This topic needs a bit more of your attention.";
    }
    
    showPage(resultsPage);
}

// Quiz Functions
function renderCategories() {
    categoriesGrid.innerHTML = '';
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <div class="category-stripe ${category.color}"></div>
            <div class="category-content">
                <div class="category-header">
                    <span class="category-emoji">${category.icon}</span>
                    <span class="question-count">${category.questionCount} questions</span>
                </div>
                <h3 class="category-name">${category.name}</h3>
                <p class="category-desc">Test your knowledge in this exciting category!</p>
            </div>
        `;
        
        categoryCard.addEventListener('click', () => goToIntroPage(category));
        categoriesGrid.appendChild(categoryCard);
    });
}

function startQuiz() {
    // Get questions for the active category
    const categoryQuestions = quizQuestions[quizState.activeCategory.slug];
    
    // Shuffle questions and pick 10 (or less if not enough questions)
    quizState.questions = shuffleArray(categoryQuestions).slice(0, 10);
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    
    // Display the first question
    displayQuestion();
    
    // Start the quiz
    goToQuizPage();
}

function displayQuestion() {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    
    // Update progress elements
    progressBar.style.width = ${(quizState.currentQuestionIndex / quizState.questions.length) * 100}%;
    questionIndex.textContent = ${quizState.currentQuestionIndex + 1}/${quizState.questions.length};
    currentScore.textContent = quizState.score;
    
    // Update question text
    questionText.textContent = currentQuestion.question;
    
    // Clear previous options and feedback
    optionsContainer.innerHTML = '';
    feedbackContainer.innerHTML = '';
    feedbackContainer.classList.add('hidden');
    
    // Create option elements
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <div class="option-marker">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Reset selection state
    quizState.selectedAnswer = null;
    submitBtn.classList.add('disabled');
    nextBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    
    // Start timer
    startTimer();
}

function selectOption(index) {
    // Do nothing if feedback is already shown
    if (!feedbackContainer.classList.contains('hidden')) {
        return;
    }
    
    quizState.selectedAnswer = index;
    
    // Remove selected class from all options
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Add selected class to clicked option
    options[index].classList.add('selected');
    
    // Enable submit button
    submitBtn.classList.remove('disabled');
}

function checkAnswer() {
    // Do nothing if no answer is selected or button is disabled
    if (quizState.selectedAnswer === null || submitBtn.classList.contains('disabled')) {
        return;
    }
    
    // Stop the timer
    clearInterval(quizState.timer);
    
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const isCorrect = quizState.selectedAnswer === currentQuestion.correctAnswer;
    
    // Update score if correct
    if (isCorrect) {
        quizState.score++;
        currentScore.textContent = quizState.score;
    }
    
    // Show visual feedback on options
    const options = optionsContainer.querySelectorAll('.option');
    options[currentQuestion.correctAnswer].classList.add('correct');
    
    // If answer is wrong, highlight it
    if (!isCorrect) {
        options[quizState.selectedAnswer].classList.add('incorrect');
    }
    
    // Show feedback
    feedbackContainer.classList.remove('hidden');
    feedbackContainer.className = feedback-container ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'};
    
    feedbackContainer.innerHTML = `
        <div class="feedback-icon ${isCorrect ? 'icon-correct' : 'icon-incorrect'}">
            <i class="fas ${isCorrect ? 'fa-check' : 'fa-times'}"></i>
        </div>
        <div class="feedback-content">
            <h3>${isCorrect ? 'Correct!' : 'Incorrect'}</h3>
            <div>${currentQuestion.explanation}</div>
        </div>
    `;
    
    // Show next button, hide submit button
    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    
    // If this is the last question, update next button text
    if (quizState.currentQuestionIndex === quizState.questions.length - 1) {
        nextBtn.textContent = 'See Results';
        nextBtn.innerHTML = 'See Results <i class="fas fa-trophy"></i>';
    }
}

function handleTimeUp() {
    // If time is up and no answer is selected, auto-submit with null (counts as wrong)
    if (quizState.selectedAnswer === null) {
        // Force a wrong answer
        const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
        
        // Show visual feedback on options
        const options = optionsContainer.querySelectorAll('.option');
        options[currentQuestion.correctAnswer].classList.add('correct');
        
        // Show feedback
        feedbackContainer.classList.remove('hidden');
        feedbackContainer.className = 'feedback-container feedback-incorrect';
        
        feedbackContainer.innerHTML = `
            <div class="feedback-icon icon-incorrect">
                <i class="fas fa-clock"></i>
            </div>
            <div class="feedback-content">
                <h3>Time's Up!</h3>
                <div>${currentQuestion.explanation}</div>
            </div>
        `;
        
        // Show next button, hide submit button
        submitBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        
        // If this is the last question, update next button text
        if (quizState.currentQuestionIndex === quizState.questions.length - 1) {
            nextBtn.textContent = 'See Results';
            nextBtn.innerHTML = 'See Results <i class="fas fa-trophy"></i>';
        }
    }
}

function nextQuestion() {
    // Move to the next question or show results if we're at the end
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
        quizState.currentQuestionIndex++;
        displayQuestion();
    } else {
        goToResultsPage();
    }
}

function quitQuiz() {
    // Stop timer
    clearInterval(quizState.timer);
    
    // Return to home
    goToHomePage();
}

function retryQuiz() {
    // Reset score and index
    quizState.score = 0;
    quizState.currentQuestionIndex = 0;
    
    // Reshuffle questions
    quizState.questions = shuffleArray(quizQuestions[quizState.activeCategory.slug]).slice(0, 10);
    
    // Start again
    displayQuestion();
    goToQuizPage();
}

// Timer Functions
function startTimer() {
    // Reset time
    quizState.timeLeft = 30;
    updateTimerDisplay();
    
    // Clear previous interval if exists
    if (quizState.timer) {
        clearInterval(quizState.timer);
    }
    
    // Start new timer
    quizState.timer = setInterval(() => {
        quizState.timeLeft--;
        updateTimerDisplay();
        
        if (quizState.timeLeft <= 0) {
            clearInterval(quizState.timer);
            handleTimeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timeRemaining.textContent = ${quizState.timeLeft}s;
    
    // Clear any existing classes
    timeRemaining.className = '';
    
    // Add warning classes based on time remaining
    if (quizState.timeLeft <= 5) {
        timeRemaining.classList.add('timer-danger');
    } else if (quizState.timeLeft <= 10) {
        timeRemaining.classList.add('timer-warning');
    }
}

// Progress Tracking Functions
function saveQuizResult() {
    // Get existing results from localStorage or initialize empty array
    let quizResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    
    // Add new result
    quizResults.push({
        category: quizState.activeCategory.slug,
        categoryName: quizState.activeCategory.name,
        score: quizState.score,
        totalQuestions: quizState.questions.length,
        date: new Date().toISOString()
    });
    
    // Keep only the last 10 results
    if (quizResults.length > 10) {
        quizResults = quizResults.slice(-10);
    }
    
    // Save to localStorage
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
}


//  Helper Functions
function resetQuizState() {
    // Stop any running timer
    if (quizState.timer) {
        clearInterval(quizState.timer);
    }}
    

function shuffleArray(array) {
    // Create a copy to avoid modifying the original
    const newArray = [...array];
    
    // Fisher-Yates shuffle algorithm
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    
    return newArray;
}

// Initialize the app when the page loads
window.addEventListener('load', initApp);