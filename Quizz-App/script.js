// User data
let user = {
    fullName: '',
    phone: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    country: '',
    ageGroup: '',
    score: 0,
    scoreHistory: []
};

// Age group questions (Example for each group)
const questionsByAgeGroup = {
    '11-15': [
        { question: "What is the capital of France?", options: ["Paris", "Berlin", "Rome", "Madrid"], answer: "Paris" },
        { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], answer: "H2O" },
        { question: "Who developed the theory of relativity?", options: ["Newton", "Einstein", "Galileo", "Tesla"], answer: "Einstein" },
        { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
        { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], answer: "Blue Whale" },
        { question: "Who is the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
        { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
        { question: "What is 2 + 2?", options: ["2", "3", "4", "5"], answer: "4" },
        { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], answer: "300,000 km/s" },
        { question: "Who painted the Mona Lisa?", options: ["Da Vinci", "Van Gogh", "Picasso", "Monet"], answer: "Da Vinci" }
    ],
    '16-20': [
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Michael Faraday"], answer: "Alexander Graham Bell" },
    { question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Kyoto"], answer: "Tokyo" },
    { question: "Which of these is not a planet?", options: ["Mars", "Saturn", "Pluto", "Moon"], answer: "Moon" },
    { question: "Which is the largest continent?", options: ["Asia", "Africa", "North America", "Europe"], answer: "Asia" },
    { question: "What is the largest land animal?", options: ["Elephant", "Rhino", "Giraffe", "Hippo"], answer: "Elephant" },
    { question: "Who painted the Starry Night?", options: ["Van Gogh", "Picasso", "Monet", "Da Vinci"], answer: "Van Gogh" },
    { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dioxyribonucleic Acid", "Deoxyriboacid", "Dioxyriboacid"], answer: "Deoxyribonucleic Acid" },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "120°C", "150°C"], answer: "100°C" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Korea", "Vietnam"], answer: "Japan" },
    { question: "Which of the following is a primary color?", options: ["Green", "Purple", "Blue", "Orange"], answer: "Blue" }
    ],
    '21-25': [
    { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "Liechtenstein", "San Marino"], answer: "Vatican City" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Osmium", "Ozone", "Oxygenium"], answer: "Oxygen" },
    { question: "Who is the CEO of Tesla?", options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Mark Zuckerberg"], answer: "Elon Musk" },
    { question: "Which country is the largest by land area?", options: ["Russia", "Canada", "USA", "China"], answer: "Russia" },
    { question: "Which planet is closest to the sun?", options: ["Earth", "Mars", "Venus", "Mercury"], answer: "Mercury" },
    { question: "What is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], answer: "Nile River" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: "Yen" },
    { question: "Which bird is known for its ability to mimic human speech?", options: ["Parrot", "Sparrow", "Crow", "Pigeon"], answer: "Parrot" },
    { question: "What is the fastest animal on land?", options: ["Lion", "Cheetah", "Leopard", "Elephant"], answer: "Cheetah" },
    { question: "What is the name of the largest ocean on Earth?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" }
    ],
    '26-30': [
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa" },
    { question: "What is the fastest growing plant?", options: ["Bamboo", "Oak", "Maple", "Pine"], answer: "Bamboo" },
    { question: "Who was the first woman to fly solo across the Atlantic?", options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Ellen Church"], answer: "Amelia Earhart" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
    { question: "Which element is commonly used in batteries?", options: ["Lithium", "Copper", "Iron", "Lead"], answer: "Lithium" },
    { question: "What is the most commonly spoken language in the world?", options: ["English", "Mandarin", "Spanish", "Hindi"], answer: "Mandarin" },
    { question: "Who developed the theory of evolution?", options: ["Darwin", "Einstein", "Newton", "Galileo"], answer: "Darwin" },
    { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], answer: "12" },
    { question: "Which country invented pizza?", options: ["Italy", "USA", "Germany", "France"], answer: "Italy" },
    { question: "Which animal is known for its black and white stripes?", options: ["Tiger", "Zebra", "Penguin", "Panda"], answer: "Zebra" }
    ],
    '31-35': [
    { question: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "Who invented the light bulb?", options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Graham Bell"], answer: "Thomas Edison" },
    { question: "Which is the largest desert on Earth?", options: ["Sahara Desert", "Gobi Desert", "Arctic Desert", "Antarctic Desert"], answer: "Antarctic Desert" },
    { question: "Which planet is known for its rings?", options: ["Mars", "Saturn", "Uranus", "Jupiter"], answer: "Saturn" },
    { question: "What is the most common blood type?", options: ["A", "B", "O", "AB"], answer: "O" },
    { question: "Which country has the largest population?", options: ["China", "India", "USA", "Russia"], answer: "China" },
    { question: "What is the capital of the UK?", options: ["London", "Paris", "Berlin", "Rome"], answer: "London" },
    { question: "What is the primary source of energy for Earth?", options: ["Moon", "The Sun", "Water", "Wind"], answer: "The Sun" },
    { question: "Which company developed the first smartphone?", options: ["Apple", "Nokia", "Samsung", "Blackberry"], answer: "Apple" },
    { question: "Which metal is known as the 'king of metals'?", options: ["Gold", "Silver", "Iron", "Platinum"], answer: "Gold" }
    ],
    '36-40': [
    { question: "What year did the Titanic sink?", options: ["1912", "1922", "1905", "1888"], answer: "1912" },
    { question: "Which planet has the most moons?", options: ["Earth", "Saturn", "Jupiter", "Neptune"], answer: "Saturn" },
    { question: "What is the smallest bone in the human body?", options: ["Stapes", "Femur", "Tibia", "Radius"], answer: "Stapes" },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Onion", "Avocado", "Pepper"], answer: "Avocado" },
    { question: "Who was the first man on the moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], answer: "Neil Armstrong" },
    { question: "What type of animal is a Komodo dragon?", options: ["Mammal", "Reptile", "Bird", "Amphibian"], answer: "Reptile" },
    { question: "Which country is known as the 'Land of the Pharaohs'?", options: ["Greece", "India", "Egypt", "China"], answer: "Egypt" },
    { question: "Which fruit is known as the 'king of fruits'?", options: ["Mango", "Durian", "Apple", "Banana"], answer: "Durian" },
    { question: "What is the currency of the United Kingdom?", options: ["Euro", "Pound", "Dollar", "Yen"], answer: "Pound" },
    { question: "What is the tallest mountain in the world?", options: ["K2", "Mount Everest", "Mount Kilimanjaro", "Mount Fuji"], answer: "Mount Everest" }
    ],
    '41-45': [
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Homer", "Jane Austen"], answer: "William Shakespeare" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron", "Silver"], answer: "Diamond" },
    { question: "What year was the United Nations established?", options: ["1945", "1920", "1850", "1935"], answer: "1945" },
    { question: "Which planet is closest to the sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: "Mercury" },
    { question: "What is the capital city of France?", options: ["Rome", "Paris", "Berlin", "Madrid"], answer: "Paris" },
    { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"], answer: "Marie Curie" },
    { question: "Which element has the atomic number 79?", options: ["Silver", "Platinum", "Gold", "Copper"], answer: "Gold" },
    { question: "In which year did World War II end?", options: ["1945", "1939", "1950", "1960"], answer: "1945" },
    { question: "Who painted the Sistine Chapel ceiling?", options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Van Gogh"], answer: "Michelangelo" },
    { question: "Which country is famous for inventing sushi?", options: ["China", "Korea", "Japan", "Thailand"], answer: "Japan" }
    ],
    '46-50': [
    { question: "Which of these animals is known to hibernate?", options: ["Rabbit", "Bear", "Elephant", "Giraffe"], answer: "Bear" },
    { question: "Who is known as the father of modern physics?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], answer: "Albert Einstein" },
    { question: "What is the capital of Spain?", options: ["Madrid", "Barcelona", "Lisbon", "Paris"], answer: "Madrid" },
    { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: "Au" },
    { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "Who was the first president of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
    { question: "What is the boiling point of water in Celsius?", options: ["100°C", "90°C", "80°C", "110°C"], answer: "100°C" },
    { question: "Which country is known as the 'Land of the Rising Sun'?", options: ["Japan", "China", "South Korea", "Vietnam"], answer: "Japan" },
    { question: "Which gas do humans breathe in?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: "Oxygen" },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Guglielmo Marconi"], answer: "Alexander Graham Bell" }
    ],
    '50+': [
    { question: "Who was the first woman to fly solo across the Atlantic Ocean?", options: ["Amelia Earhart", "Harriet Quimby", "Bessie Coleman", "Ellen Church"], answer: "Amelia Earhart" },
    { question: "Which country is famous for the pyramids?", options: ["China", "India", "Egypt", "Mexico"], answer: "Egypt" },
    { question: "What is the largest country by land area?", options: ["Canada", "United States", "China", "Russia"], answer: "Russia" },
    { question: "What is the capital of Italy?", options: ["Rome", "Venice", "Florence", "Milan"], answer: "Rome" },
    { question: "Who discovered the law of gravity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], answer: "Isaac Newton" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "Who was the first man to walk on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Alan Shepard"], answer: "Neil Armstrong" },
    { question: "Which country is famous for its kangaroos?", options: ["Canada", "Australia", "South Africa", "India"], answer: "Australia" },
    { question: "What is the largest ocean in the world?", options: ["Atlantic", "Indian", "Southern", "Pacific"], answer: "Pacific" },
    { question: "Who wrote 'The Odyssey'?", options: ["Homer", "Virgil", "Dante", "Shakespeare"], answer: "Homer" }
    ]

};

let currentQuestionIndex = 0;
let timer;
let timeLeft = 60;

// Show Welcome Page
document.getElementById("welcome-page").style.display = "block";

// Function to navigate to Registration Page
function navigateToRegister() {
    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("register-page").style.display = "block";
}

// Submit Registration Form
function submitRegistration() {
    user.fullName = document.getElementById("fullName").value;
    user.phone = document.getElementById("phone").value;
    user.dob = document.getElementById("dob").value;
    user.address = document.getElementById("address").value;
    user.city = document.getElementById("city").value;
    user.state = document.getElementById("state").value;
    user.country = document.getElementById("country").value;

    // Move to Age Selection Page
    document.getElementById("register-page").style.display = "none";
    document.getElementById("age-selection-page").style.display = "block";
}

// Navigate to Quiz Page
function navigateToQuiz(ageGroup) {
    user.ageGroup = ageGroup;

    // Display Profile Info
    document.getElementById("profile-name").innerText = user.fullName;

    // Start Quiz
    document.getElementById("age-selection-page").style.display = "none";
    document.getElementById("quiz-page").style.display = "block";
    displayQuestion();
    startTimer();
}

// Display Question for the selected age group
function displayQuestion() {
    const questions = questionsByAgeGroup[user.ageGroup];
    const question = questions[currentQuestionIndex];
    const questionHTML = `
        <div class="question">
            <h3>${question.question}</h3>
            ${question.options.map(option => 
                <button class="answer-btn" onclick="answerQuestion('${option}')">${option}</button>
            ).join('')}
        </div>
    `;
    document.getElementById("question-container").innerHTML = questionHTML;
}

// Handle Answer Selection
function answerQuestion(selectedOption) {
    const questions = questionsByAgeGroup[user.ageGroup];
    if (selectedOption === questions[currentQuestionIndex].answer) {
        user.score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        submitQuiz();
    }
}

// Submit Quiz
function submitQuiz() {
    clearInterval(timer);
    document.getElementById("final-score").innerText = user.score;
    document.getElementById("quiz-page").style.display = "none";
    document.getElementById("score-page").style.display = "block";

    // Save score history
    user.scoreHistory.push(user.score);
}

// Start Timer
function startTimer() {
    timeLeft = 60;
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").innerText = `Time ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

// Navigate to Dashboard
function navigateToDashboard() {
    document.getElementById("score-page").style.display = "none";
    document.getElementById("dashboard-page").style.display = "block";

    // Display Dashboard Info
    document.getElementById("dashboard-name").innerText = user.fullName;
    document.getElementById("dashboard-city").innerText = user.city;
    document.getElementById("dashboard-country").innerText = user.country;

    // Show Score History
    document.getElementById("score-history").innerText = user.scoreHistory.join(', ') || 'No scores yet.';
}

// Navigate back to Age Selection
function navigateToAgeSelection() {
    document.getElementById("dashboard-page").style.display = "none";
    document.getElementById("age-selection-page").style.display = "block";
}