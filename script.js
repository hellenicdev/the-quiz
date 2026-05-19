const TOPIC_NAMES = {
  science: 'Science', sports: 'Sports', food: 'Food & Drinks',
  geography: 'Geography', history: 'History', technology: 'Technology',
  movies: 'Movies', music: 'Music'
};

const TIME_LIMITS = { easy: 15, medium: 10, hard: 5 };

const quizzes = {
  science: [
    { q: "What is the chemical symbol for gold?", o: ["Au", "Ag", "Go", "Gd"], a: "Au" },
    { q: "Which planet has the most moons?", o: ["Earth", "Mars", "Saturn", "Jupiter"], a: "Saturn" },
    { q: "What gas do plants absorb during photosynthesis?", o: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], a: "Carbon Dioxide" },
    { q: "What is the speed of light approximately?", o: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], a: "300,000 km/s" },
    { q: "Which element is liquid at room temperature?", o: ["Mercury", "Lead", "Iron", "Zinc"], a: "Mercury" },
    { q: "What is the powerhouse of the cell?", o: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"], a: "Mitochondria" },
    { q: "How many bones are in the adult human body?", o: ["106", "206", "306", "406"], a: "206" },
    { q: "What planet is known as the Red Planet?", o: ["Venus", "Mars", "Jupiter", "Saturn"], a: "Mars" },
    { q: "What is the chemical formula for water?", o: ["CO2", "H2O", "NaCl", "O2"], a: "H2O" },
    { q: "Which gas is most abundant in Earth's atmosphere?", o: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], a: "Nitrogen" },
    { q: "What is the hardest natural substance?", o: ["Gold", "Iron", "Diamond", "Platinum"], a: "Diamond" },
    { q: "What is the largest organ in the human body?", o: ["Liver", "Skin", "Brain", "Heart"], a: "Skin" },
    { q: "What particle has a negative charge?", o: ["Proton", "Neutron", "Electron", "Photon"], a: "Electron" },
    { q: "How many chromosomes do humans have?", o: ["23", "44", "46", "48"], a: "46" },
    { q: "What force keeps us on the ground?", o: ["Magnetism", "Friction", "Gravity", "Inertia"], a: "Gravity" },
  ],
  sports: [
    { q: "How many players on a standard soccer team?", o: ["9", "10", "11", "12"], a: "11" },
    { q: "Which sport uses a puck?", o: ["Basketball", "Hockey", "Tennis", "Golf"], a: "Hockey" },
    { q: "Max score in a single bowling frame?", o: ["30", "10", "20", "50"], a: "30" },
    { q: "How many Grand Slam tennis tournaments are there per year?", o: ["2", "3", "4", "5"], a: "4" },
    { q: "Which country has won the most FIFA World Cups?", o: ["Germany", "Brazil", "Italy", "Argentina"], a: "Brazil" },
    { q: "What is the length of an Olympic swimming pool in meters?", o: ["25", "50", "100", "75"], a: "50" },
    { q: "In which sport would you perform a slam dunk?", o: ["Volleyball", "Basketball", "Handball", "Tennis"], a: "Basketball" },
    { q: "What is the maximum score in Olympic diving per dive?", o: ["10", "20", "30", "15"], a: "10" },
    { q: "How many holes are in a standard golf course?", o: ["9", "12", "18", "24"], a: "18" },
    { q: "Which sport is known as 'the sport of kings'?", o: ["Polo", "Horse Racing", "Fencing", "Cricket"], a: "Horse Racing" },
    { q: "How many rings appear on the Olympic flag?", o: ["3", "5", "7", "10"], a: "5" },
    { q: "What sport is played at Wimbledon?", o: ["Cricket", "Tennis", "Squash", "Badminton"], a: "Tennis" },
    { q: "In which sport is a 'love' score used?", o: ["Badminton", "Tennis", "Squash", "Table Tennis"], a: "Tennis" },
    { q: "How long is a marathon in kilometers?", o: ["26.2", "42.2", "50", "21.1"], a: "42.2" },
  ],
  food: [
    { q: "Which country is famous for sushi?", o: ["China", "Japan", "Korea", "Thailand"], a: "Japan" },
    { q: "Which fruit is known as the king of fruits?", o: ["Apple", "Durian", "Mango", "Banana"], a: "Durian" },
    { q: "Which drink is made from fermented grapes?", o: ["Beer", "Juice", "Wine", "Tea"], a: "Wine" },
    { q: "What is the main ingredient in guacamole?", o: ["Tomato", "Avocado", "Onion", "Lime"], a: "Avocado" },
    { q: "Which spice gives curry its yellow color?", o: ["Paprika", "Turmeric", "Cumin", "Saffron"], a: "Turmeric" },
    { q: "What type of pasta is shaped like small tubes?", o: ["Spaghetti", "Penne", "Fettuccine", "Linguine"], a: "Penne" },
    { q: "Which nut is used to make marzipan?", o: ["Walnut", "Almond", "Cashew", "Pistachio"], a: "Almond" },
    { q: "What is the most consumed manufactured drink in the world?", o: ["Coffee", "Tea", "Soda", "Beer"], a: "Tea" },
    { q: "Which country is the largest producer of coffee?", o: ["Colombia", "Vietnam", "Brazil", "Ethiopia"], a: "Brazil" },
    { q: "What is the primary ingredient in hummus?", o: ["Lentils", "Chickpeas", "Black beans", "Soybeans"], a: "Chickpeas" },
    { q: "Which vegetable is the main ingredient in borscht?", o: ["Cabbage", "Potato", "Beetroot", "Carrot"], a: "Beetroot" },
    { q: "What is the world's most expensive spice by weight?", o: ["Vanilla", "Saffron", "Cardamom", "Cinnamon"], a: "Saffron" },
    { q: "Which cheese is traditionally used on pizza?", o: ["Cheddar", "Mozzarella", "Parmesan", "Gouda"], a: "Mozzarella" },
    { q: "What is the main ingredient in miso soup?", o: ["Soybeans", "Seaweed", "Tofu", "Rice"], a: "Soybeans" },
  ],
  geography: [
    { q: "What is the largest continent?", o: ["Africa", "Asia", "Europe", "Antarctica"], a: "Asia" },
    { q: "Which country has the most time zones?", o: ["USA", "France", "Russia", "China"], a: "France" },
    { q: "What is the capital of Canada?", o: ["Toronto", "Vancouver", "Ottawa", "Montreal"], a: "Ottawa" },
    { q: "What is the longest river in the world?", o: ["Amazon", "Nile", "Yangtze", "Mississippi"], a: "Nile" },
    { q: "Which desert is the largest hot desert in the world?", o: ["Gobi", "Kalahari", "Sahara", "Arabian"], a: "Sahara" },
    { q: "What is the smallest country in the world?", o: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], a: "Vatican City" },
    { q: "Which ocean is the deepest?", o: ["Atlantic", "Indian", "Pacific", "Arctic"], a: "Pacific" },
    { q: "What is the highest mountain in the world?", o: ["K2", "Everest", "Denali", "Kilimanjaro"], a: "Everest" },
    { q: "Which country has the largest population?", o: ["USA", "China", "India", "Indonesia"], a: "India" },
    { q: "What is the largest lake in Africa?", o: ["Victoria", "Tanganyika", "Malawi", "Chad"], a: "Victoria" },
    { q: "Which strait separates Europe from Africa?", o: ["Bosphorus", "Gibraltar", "Malacca", "Hormuz"], a: "Gibraltar" },
    { q: "What is the capital of Australia?", o: ["Sydney", "Melbourne", "Canberra", "Brisbane"], a: "Canberra" },
    { q: "Which country is both in Europe and Asia?", o: ["Greece", "Turkey", "Egypt", "Iran"], a: "Turkey" },
    { q: "What is the driest inhabited continent?", o: ["Africa", "Australia", "Asia", "South America"], a: "Australia" },
  ],
  history: [
    { q: "First US president?", o: ["Lincoln", "Washington", "Jefferson", "Adams"], a: "Washington" },
    { q: "What year did WWII end?", o: ["1940", "1942", "1945", "1950"], a: "1945" },
    { q: "Which civilization built the pyramids?", o: ["Romans", "Greeks", "Egyptians", "Mayans"], a: "Egyptians" },
    { q: "What year did the Titanic sink?", o: ["1910", "1912", "1914", "1916"], a: "1912" },
    { q: "Who discovered penicillin?", o: ["Pasteur", "Fleming", "Koch", "Salk"], a: "Fleming" },
    { q: "Which empire was ruled by Genghis Khan?", o: ["Ottoman", "Roman", "Mongol", "Persian"], a: "Mongol" },
    { q: "What ancient wonder was in Babylon?", o: ["Colossus", "Hanging Gardens", "Lighthouse", "Temple"], a: "Hanging Gardens" },
    { q: "Who was the first woman to fly solo across the Atlantic?", o: ["Earhart", "Lindbergh", "Yeager", "Coleman"], a: "Earhart" },
    { q: "What year did the Berlin Wall fall?", o: ["1987", "1988", "1989", "1990"], a: "1989" },
    { q: "Which dynasty built the Great Wall of China?", o: ["Tang", "Ming", "Qin", "Han"], a: "Qin" },
    { q: "Who painted the Mona Lisa?", o: ["Michelangelo", "Raphael", "Da Vinci", "Donatello"], a: "Da Vinci" },
    { q: "What was the longest war in history?", o: ["100 Years War", "30 Years War", "Peloponnesian", "Vietnam War"], a: "100 Years War" },
    { q: "Who invented the printing press?", o: ["Gutenberg", "Caxton", "Franklin", "Edison"], a: "Gutenberg" },
    { q: "What ancient city was buried by Vesuvius?", o: ["Rome", "Pompeii", "Athens", "Naples"], a: "Pompeii" },
  ],
  technology: [
    { q: "What does CPU stand for?", o: ["Central Process Unit", "Central Processing Unit", "Computer Power Unit", "Control Panel Unit"], a: "Central Processing Unit" },
    { q: "Which company created the iPhone?", o: ["Samsung", "Google", "Microsoft", "Apple"], a: "Apple" },
    { q: "What was the first computer virus called?", o: ["ILOVEYOU", "Creeper", "WannaCry", "Blaster"], a: "Creeper" },
    { q: "What does RAM stand for?", o: ["Read Access Memory", "Random Access Memory", "Run Application Module", "Real-time Algorithm Manager"], a: "Random Access Memory" },
    { q: "What year was the internet invented?", o: ["1973", "1983", "1993", "1969"], a: "1983" },
    { q: "Which programming language is known as the 'mother of all languages'?", o: ["C", "Fortran", "Assembly", "COBOL"], a: "Fortran" },
    { q: "What does HTTP stand for?", o: ["Hyper Text Transfer Protocol", "High Transfer Text Protocol", "Hyper Text Transmission Process", "High Tech Transfer Protocol"], a: "Hyper Text Transfer Protocol" },
    { q: "Who is considered the father of the World Wide Web?", o: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Vint Cerf"], a: "Tim Berners-Lee" },
    { q: "What is the smallest unit of data in a computer?", o: ["Byte", "Bit", "Kilobyte", "Nibble"], a: "Bit" },
    { q: "Which company developed the Android operating system?", o: ["Apple", "Microsoft", "Google", "Samsung"], a: "Google" },
    { q: "What does SSH stand for?", o: ["Secure Shell", "Super Shell", "Safe Shell", "System Shell"], a: "Secure Shell" },
    { q: "In what year was Python first released?", o: ["1989", "1991", "1995", "2000"], a: "1991" },
    { q: "What does 'IoT' stand for?", o: ["Internet of Things", "Input Output Terminal", "Integrated Operating Technology", "Internal Object Tracking"], a: "Internet of Things" },
    { q: "Who created Linux?", o: ["Bill Gates", "Linus Torvalds", "Richard Stallman", "Dennis Ritchie"], a: "Linus Torvalds" },
  ],
  movies: [
    { q: "Which movie features the quote 'I'll be back'?", o: ["Predator", "RoboCop", "The Terminator", "Die Hard"], a: "The Terminator" },
    { q: "Who directed 'Inception'?", o: ["James Cameron", "Christopher Nolan", "Steven Spielberg", "Quentin Tarantino"], a: "Christopher Nolan" },
    { q: "Which movie won Best Picture at the 2020 Oscars?", o: ["1917", "Parasite", "Joker", "Ford v Ferrari"], a: "Parasite" },
    { q: "What is the highest-grossing film of all time (not adjusted)?", o: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars"], a: "Avatar" },
    { q: "Who played the Joker in 'The Dark Knight'?", o: ["Joaquin Phoenix", "Jack Nicholson", "Heath Ledger", "Jared Leto"], a: "Heath Ledger" },
    { q: "Which film series features a character named 'Darth Vader'?", o: ["Star Trek", "Star Wars", "Dune", "The Matrix"], a: "Star Wars" },
    { q: "What year was the first 'Harry Potter' film released?", o: ["1999", "2000", "2001", "2002"], a: "2001" },
    { q: "Who directed 'Pulp Fiction'?", o: ["Martin Scorsese", "Quentin Tarantino", "David Fincher", "Coen Brothers"], a: "Quentin Tarantino" },
    { q: "Which actor has played James Bond the most times?", o: ["Sean Connery", "Roger Moore", "Pierce Brosnan", "Daniel Craig"], a: "Roger Moore" },
    { q: "What is the highest-grossing animated film?", o: ["Frozen", "The Lion King (2019)", "Inside Out 2", "The Super Mario Bros Movie"], a: "The Lion King (2019)" },
    { q: "Which movie won the first-ever Best Picture Oscar?", o: ["Wings", "Sunrise", "The Broadway Melody", "All Quiet on the Western Front"], a: "Wings" },
    { q: "Who played Wolverine in the X-Men films?", o: ["Ryan Reynolds", "Hugh Jackman", "Chris Evans", "Patrick Stewart"], a: "Hugh Jackman" },
    { q: "What is the highest-grossing film franchise?", o: ["Star Wars", "MCU", "Harry Potter", "James Bond"], a: "MCU" },
    { q: "Who directed 'Schindler's List'?", o: ["Spielberg", "Scorsese", "Kubrick", "Coppola"], a: "Spielberg" },
  ],
  music: [
    { q: "Who is known as the King of Pop?", o: ["Prince", "Elvis Presley", "Michael Jackson", "Justin Bieber"], a: "Michael Jackson" },
    { q: "Which band released 'Bohemian Rhapsody'?", o: ["Queen", "The Beatles", "Pink Floyd", "The Rolling Stones"], a: "Queen" },
    { q: "What instrument has 88 keys?", o: ["Guitar", "Violin", "Piano", "Drums"], a: "Piano" },
    { q: "Who is the best-selling music artist of all time?", o: ["Elvis Presley", "Michael Jackson", "The Beatles", "Madonna"], a: "The Beatles" },
    { q: "Which composer was deaf later in life?", o: ["Mozart", "Bach", "Beethoven", "Chopin"], a: "Beethoven" },
    { q: "What genre is 'Smoke on the Water' by Deep Purple?", o: ["Pop", "Jazz", "Rock", "Country"], a: "Rock" },
    { q: "Which instrument has four strings and is played with a bow?", o: ["Guitar", "Violin", "Ukulele", "Mandolin"], a: "Violin" },
    { q: "Who popularized reggae music worldwide?", o: ["Bob Marley", "Jimmy Cliff", "Peter Tosh", "Toots Hibbert"], a: "Bob Marley" },
    { q: "What year was Woodstock held?", o: ["1967", "1968", "1969", "1970"], a: "1969" },
    { q: "Which singer is known as the 'Queen of Soul'?", o: ["Whitney Houston", "Aretha Franklin", "Tina Turner", "Diana Ross"], a: "Aretha Franklin" },
    { q: "What is the best-selling album of all time?", o: ["Thriller", "The Dark Side of the Moon", "Back in Black", "Rumours"], a: "Thriller" },
    { q: "Which band performed 'Stairway to Heaven'?", o: ["The Beatles", "Led Zeppelin", "Pink Floyd", "Queen"], a: "Led Zeppelin" },
    { q: "Which instrument is typically used to play flamenco?", o: ["Piano", "Guitar", "Violin", "Flute"], a: "Guitar" },
    { q: "Who sang 'I Will Always Love You'?", o: ["Mariah Carey", "Whitney Houston", "Celine Dion", "Tina Turner"], a: "Whitney Houston" },
  ]
};

const state = {
  topic: null,
  difficulty: 'easy',
  score: 0,
  streak: 0,
  bestStreak: 0,
  index: 0,
  questions: [],
  results: [],
  timerInterval: null,
  timeLeft: 15,
  answering: false,
  topicDisplayName: '',
  highScores: {},
  keysBound: false,
};

const $ = id => document.getElementById(id);

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function loadHighScores() {
  try {
    state.highScores = JSON.parse(localStorage.getItem('quizHighScores')) || {};
  } catch {
    state.highScores = {};
  }
}

function saveHighScores() {
  localStorage.setItem('quizHighScores', JSON.stringify(state.highScores));
}

function getTopicHighScores(topic) {
  return state.highScores[topic] || [];
}

function addHighScore(topic, score, total) {
  const pct = Math.round((score / total) * 100);
  const list = getTopicHighScores(topic);
  list.push({ score, total, pct, date: new Date().toISOString().slice(0, 10) });
  list.sort((a, b) => b.pct - a.pct || b.score - a.score);
  if (list.length > 5) list.length = 5;
  state.highScores[topic] = list;
  saveHighScores();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = $(id);
  if (el) el.classList.add('active');
}

function selectTopic(topic) {
  state.topic = topic;
  state.topicDisplayName = TOPIC_NAMES[topic];
  $('topic-label').textContent = `Topic: ${state.topicDisplayName}`;
  showScreen('difficulty-container');
}

function selectRandomTopic() {
  const keys = Object.keys(quizzes);
  const topic = keys[Math.floor(Math.random() * keys.length)];
  selectTopic(topic);
}

function startQuiz(difficulty) {
  state.difficulty = difficulty;
  state.timeLeft = TIME_LIMITS[difficulty];
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.index = 0;
  state.answering = false;
  state.results = [];
  state.questions = shuffle([...quizzes[state.topic]]).slice(0, 10);
  state.questions.forEach(q => shuffle(q.o));

  showScreen('quiz-container');
  bindKeyboard();
  showQuestion();
}

function bindKeyboard() {
  if (state.keysBound) return;
  state.keysBound = true;
  document.addEventListener('keydown', handleKeydown);
}

function unbindKeyboard() {
  state.keysBound = false;
  document.removeEventListener('keydown', handleKeydown);
}

function handleKeydown(e) {
  if (!$('quiz-container').classList.contains('active')) return;
  if (state.answering) return;
  const num = parseInt(e.key);
  if (num >= 1 && num <= 4) {
    const btns = document.querySelectorAll('#answers-container button');
    if (btns[num - 1]) btns[num - 1].click();
  }
}

function showQuestion() {
  if (state.index >= state.questions.length) {
    endQuiz();
    return;
  }

  state.answering = false;
  const q = state.questions[state.index];
  const total = state.questions.length;

  $('q-topic').textContent = `📖 ${state.topicDisplayName}`;
  $('q-difficulty').textContent = `🎯 ${state.difficulty.charAt(0).toUpperCase() + state.difficulty.slice(1)}`;
  $('q-score').textContent = `⭐ Score: ${state.score}`;
  $('q-streak').textContent = state.streak > 1 ? `🔥 ${state.streak} streak!` : '';
  $('progress-text').textContent = `Question ${state.index + 1} / ${total}`;
  $('question-text').textContent = q.q;

  renderProgressDots(state.index);

  const container = $('answers-container');
  container.innerHTML = '';

  q.o.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.dataset.value = opt;
    btn.dataset.idx = i;
    btn.addEventListener('click', () => handleAnswer(btn, opt, q.a));
    container.appendChild(btn);
  });

  $('feedback').style.display = 'none';

  const totalTime = state.timeLeft;
  const fill = $('timer-bar');
  fill.style.width = '100%';
  fill.className = 'timer-bar-fill';
  $('timer-label').textContent = `⏱ ${totalTime}s`;

  startTimer(totalTime);
}

function renderProgressDots(activeIdx) {
  const container = $('progress-dots');
  container.innerHTML = '';
  state.results.forEach((r, i) => {
    const dot = document.createElement('span');
    dot.className = 'progress-dot';
    if (i === state.index) dot.classList.add('current');
    if (r === 'correct') dot.classList.add('correct');
    else if (r === 'wrong') dot.classList.add('wrong');
    else if (r === 'timeout') dot.classList.add('timedout');
    container.appendChild(dot);
  });
  for (let i = state.results.length; i < state.questions.length; i++) {
    const dot = document.createElement('span');
    dot.className = 'progress-dot' + (i === activeIdx ? ' current' : '');
    container.appendChild(dot);
  }
}

function startTimer(duration) {
  clearInterval(state.timerInterval);
  let remaining = duration;
  const fill = $('timer-bar');
  const label = $('timer-label');

  state.timerInterval = setInterval(() => {
    remaining--;
    const pct = (remaining / duration) * 100;
    fill.style.width = Math.max(0, pct) + '%';
    fill.className = 'timer-bar-fill' + (remaining <= 3 ? ' danger' : remaining <= 6 ? ' warning' : '');
    label.textContent = `⏱ ${remaining}s`;

    if (remaining <= 0) {
      clearInterval(state.timerInterval);
      if (!state.answering) {
        state.answering = true;
        state.results[state.index] = 'timeout';
        state.streak = 0;
        showFeedback(null, state.questions[state.index].a);
      }
    }
  }, 1000);
}

function handleAnswer(btn, selected, correct) {
  if (state.answering) return;
  state.answering = true;
  clearInterval(state.timerInterval);

  const buttons = document.querySelectorAll('#answers-container button');
  buttons.forEach(b => b.disabled = true);

  if (selected === correct) {
    state.score++;
    state.streak++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
    btn.className = 'btn-correct';
    state.results[state.index] = 'correct';
  } else {
    state.streak = 0;
    btn.className = 'btn-wrong';
    state.results[state.index] = 'wrong';
    buttons.forEach(b => {
      if (b.dataset.value === correct) b.className = 'btn-correct';
    });
  }

  showFeedback(selected === correct, correct);
}

function showFeedback(isCorrect, correctAnswer) {
  const fb = $('feedback');
  fb.style.display = 'block';

  if (isCorrect === null) {
    fb.innerHTML = `<span class="incorrect">⏰ Time's up! The correct answer was: <strong>${correctAnswer}</strong></span>`;
  } else if (isCorrect) {
    fb.innerHTML = `<span class="correct">✅ Correct!</span>`;
  } else {
    fb.innerHTML = `<span class="incorrect">❌ Incorrect! The correct answer was: <strong>${correctAnswer}</strong></span>`;
  }

  $('q-score').textContent = `⭐ Score: ${state.score}`;
  $('q-streak').textContent = state.streak > 1 ? `🔥 ${state.streak} streak!` : '';

  setTimeout(() => {
    state.index++;
    showQuestion();
  }, 1200);
}

function endQuiz() {
  clearInterval(state.timerInterval);
  unbindKeyboard();

  const total = state.questions.length;
  const pct = Math.round((state.score / total) * 100);

  $('final-score').textContent = `You scored ${state.score}/${total} 🎯`;
  $('score-percent').textContent = `That's ${pct}% — ${pct === 100 ? 'Perfect! 🏆' : pct >= 80 ? 'Great job! 👏' : pct >= 60 ? 'Nice work! 👍' : pct >= 40 ? 'Keep practicing! 💪' : 'Better luck next time! 😅'}`;
  $('streak-info').textContent = state.bestStreak > 1 ? `🔥 Best streak: ${state.bestStreak} correct in a row` : '';

  addHighScore(state.topic, state.score, total);

  const highScores = getTopicHighScores(state.topic);
  const list = $('high-scores-list');
  list.innerHTML = highScores.map(h =>
    `<li>${h.pct}% (${h.score}/${h.total}) — ${h.date}</li>`
  ).join('') || "<li style='color:#666'>No scores yet</li>";

  renderReview();

  showScreen('end-screen');

  if (pct === 100) launchConfetti();
}

function renderReview() {
  const list = $('review-list');
  list.innerHTML = state.questions.map((q, i) => {
    const r = state.results[i];
    const icon = r === 'correct' ? '✅' : r === 'wrong' ? '❌' : '⏰';
    const cls = r === 'correct' ? 'review-correct' : 'review-wrong';
    return `<li class="${cls}"><div class="review-q">${icon} ${q.q}</div><span class="review-icon">Answer: <strong>${q.a}</strong></span></li>`;
  }).join('');
}

function launchConfetti() {
  const colors = ['#ffcc00', '#ff5252', '#4caf50', '#1da1f2', '#ff9900', '#e74c3c', '#20c997'];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed;
      top: -10px;
      left: ${Math.random() * 100}vw;
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      pointer-events: none;
      z-index: 99999;
      opacity: 1;
      transform: rotate(${Math.random() * 360}deg);
    `;
    document.body.appendChild(el);
    const xDrift = (Math.random() - 0.5) * 300;
    const dur = 1500 + Math.random() * 1500;
    el.animate([
      { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
      { transform: `translateY(${window.innerHeight + 20}px) rotate(${720 + Math.random() * 360}deg) translateX(${xDrift}px)`, opacity: 0 }
    ], { duration: dur, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fill: 'forwards' }).onfinish = () => el.remove();
  }
}

function backToMenu() {
  clearInterval(state.timerInterval);
  unbindKeyboard();
  showScreen('menu-container');
}

function restartSameTopic() {
  $('topic-label').textContent = `Topic: ${state.topicDisplayName}`;
  showScreen('difficulty-container');
}

function shareResult() {
  const pct = Math.round((state.score / state.questions.length) * 100);
  const text = `I scored ${state.score}/${state.questions.length} (${pct}%) on "${state.topicDisplayName}" quiz! 🎯 Can you beat me?`;
  if (navigator.share) {
    navigator.share({ title: 'Quiz Result', text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      const btn = $('share-btn');
      btn.textContent = '📋 Copied!';
      setTimeout(() => btn.textContent = '📤 Share Result', 2000);
    }).catch(() => {});
  }
}

loadHighScores();
