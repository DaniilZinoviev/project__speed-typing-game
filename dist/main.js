/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("window.addEventListener('load', init); // Globals\n// Available levels\n\nvar levels = {\n  easy: 5,\n  medium: 4,\n  hard: 2\n}; // To change level\n\nvar currentLevel = levels.easy;\nvar time = currentLevel;\nvar score = 0;\nvar isPlaying; // DOM Elements\n\nvar wordInput = document.getElementById('input-word');\nvar currentWord = document.getElementById('current-word');\nvar seconds = document.getElementById('seconds');\nvar message = document.getElementById('message');\nvar timeElem = document.getElementById('time');\nvar scoreElem = document.getElementById('score');\nvar englishWords = ['fire', 'nutrition', 'qwerty', 'revolver', 'definition', 'exhibition', 'quantity', 'english', 'grammar', 'sometimes', 'cocktail', 'developer', 'adjacent', 'conqueror', 'winner', 'viewer', 'javascript', 'hero', 'echo', 'leader', 'poker', 'react', 'monk']; // Initialize Game\n\nfunction init() {\n  // Show number of seconds in UI\n  seconds.innerHTML = time; // Load word from array\n\n  showWord(englishWords); // Start matching on word input\n\n  wordInput.addEventListener('input', startMatch); // Call countdown every second\n\n  setInterval(countdown, 1000); // Check game status\n\n  setInterval(checkGameStatus, 50);\n} // Pick & show random word\n\n\nfunction showWord(words) {\n  // Generate random array\n  var randIndex = Math.floor(Math.random() * words.length); // Output random word\n\n  currentWord.innerHTML = words[randIndex];\n} // Start match\n\n\nfunction startMatch() {\n  isPlaying = true;\n\n  if (matchWords()) {\n    isPlaying = true;\n    time = currentLevel + 1;\n    showWord(englishWords);\n    wordInput.value = '';\n    score++;\n  }\n\n  if (score < 0) {\n    scoreElem.innerHTML = 0;\n  } else {\n    scoreElem.innerHTML = score;\n  } // Change message element style to usual\n\n\n  if (message.classList.contains('text-warning')) {\n    message.classList.remove('text-warning');\n  }\n} // Match currentWord to wordInput\n\n\nfunction matchWords() {\n  if (currentWord.innerHTML === wordInput.value) {\n    message.innerHTML = 'Correct!';\n    return true;\n  } else {\n    message.innerHTML = '';\n    return false;\n  }\n}\n\nfunction countdown() {\n  // Make sure time is not run out\n  if (time > 0) {\n    // Decrease time\n    time--;\n  } else if (time === 0) {\n    // Game is Over\n    isPlaying = false;\n  } // Show time\n\n\n  timeElem.innerHTML = time;\n}\n\nfunction checkGameStatus() {\n  if (!isPlaying && time === 0) {\n    // Change message style\n    if (!message.classList.contains('text-warning')) {\n      message.classList.add('text-warning');\n    } // Change message text\n\n\n    if (message.innerHTML != \"Game Over!!!\") {\n      message.innerHTML = \"Game Over!!!\";\n    } // Change score\n\n\n    score = -1;\n  }\n}\n\n//# sourceURL=webpack://speed-typing-game/./src/main.js?");
/******/ })()
;