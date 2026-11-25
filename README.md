# The Quiz

[![Live demo](https://img.shields.io/badge/demo-live-19336e?style=flat-square)](https://hellenicdev.eu/the-quiz/) [![License: BSD 3-Clause](https://img.shields.io/badge/license-BSD%203--Clause-blue?style=flat-square)](LICENSE)

A fast, fun trivia quiz with 8 topics and 3 difficulty levels.

**Play it live:** <https://hellenicdev.eu/the-quiz/>

## Features

- 8 topics: Science, Sports, Food & Drinks, Geography, History, Technology, Movies and Music, plus a random pick
- 3 difficulty levels with a 15, 10 or 5 second timer per question
- 10 random questions per round, with shuffled answers
- Streaks, per-topic high scores and an answer review at the end
- Keyboard shortcuts (press 1 to 4 to answer)
- Share your result

## How to play

- Choose a topic and a difficulty
- Answer each question before the timer runs out
- Review your answers and try to beat your high score

## Run locally

No build step. Serve the folder with any static server:

```sh
git clone https://github.com/hellenicdev/the-quiz.git
cd the-quiz
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Tech

- HTML5, CSS3 and vanilla JavaScript

## License

BSD 3-Clause. See [LICENSE](LICENSE).

## Credits

Made by [HellenicDev](https://hellenicdev.eu). More projects at <https://hellenicdev.eu>.

If you enjoy it, you can support the work here:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S31XB030)
