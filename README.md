# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **JEONG SHIN**

Time spent: **20** hours spent in total (I know I know that's a long time but it was spread out)

Link to project: https://glitch.com/edit/#!/windy-dune-sight 

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Background color of the website has been changed to one of my favorite colors :)

## Video Walkthrough

Here's a walkthrough of implemented user stories:
Correct guess:
![](https://i.imgur.com/LrfYuHS.gif)

Different pattern each time: 
![](https://i.imgur.com/zEfl0ME.gif)

Incorrect guess:
![](https://i.imgur.com/UCYkIZE.gif)

Game button appearance goes beyond color + Player only loses after 3 mistakes:
![](https://i.imgur.com/nCIHzwb.gif)


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   [I completed a quick Google search to launch the "console" to debug my program when there was a small issue with functionality.
   Referenced YouTube videos, "GeekforGeeks", and "W3Schools" to find out more about adding images to buttons.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   [I encountered a bug when coding the ‘playSingleClue’ function. While my ‘start’ and ‘stop’ buttons were toggling on and off when I interacted with them, none of my buttons were lighting up or playing sounds when I pressed ‘start’ to test the game in its early stages. No clues were being played! To address this problem, I first reread the entire set of instructions for this particular function as outlined by the pre-work guide. Then, I went over to my script.js file to try and debug my code. I coded ‘console.log’ statements before and after each function under the ‘if(gamePlaying)’ conditional statement, to keep track of whether or not the function calls were properly operating. I noticed that my problem anchored itself early on in the program: the print statement after ‘lightButton’ wasn’t printing out in the console, so I knew there was an issue with my ‘lightButton’ function. As a result, I scrolled up to my ‘lightButton’ function to try and debug it. I reread the code to understand exactly what it was asking, and located the Document Object Model (DOM) reference to refresh myself with how ‘getElementByID’ functions in code. I noticed that my problem was quite simple: the name I assigned to my buttons in my index.html file were different from how my ‘lightButton’ function located these particular buttons. Clues weren’t playing because my program was trying to locate the names of buttons that were nonexistent! In my index.html file relatively early on in the project, instead of naming my buttons ‘button1’, ‘button2’, and so on, I simply named them ‘one’, ‘two’, ‘three’, and ‘four’ simply for my personal stylistic preferences. While at the time, this was a trivial difference, I saw how it entirely affected the functionality of my program as the project increased in complexity. As a result, I changed the names of my buttons to match how it was called in my ‘lightButton’ function, and from there, things were smooth sailing – a single clue played, and I moved on with the rest of the project. I thought about how this type of challenge: a seemingly insignificant problem in the moment that has the potential to build up as a larger issue later on, is a common phenomenon in the broader world of computer science. For example, this ‘playSingleClue’ function is called by other functions in the project, namely the ‘playClueSequence’ function, which is called by the ‘guess’ function. Had I not debugged my program early on, I guarantee that I would’ve spent an undesirable amount of time debugging later on (which would likely lead to a headache). This challenge showed me how important it is to consistently and periodically test smaller functions, both from a stylistic standpoint as well as for functionality.] 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   [1. From previous computer science courses, I recognize how important style and format are in languages such as Python and C++. Does style, or speaking more broadly, how a technologist writes any code in a web development language, hold the same weight in the world of web development?
   2. I've heard a lot about Agile frameworks and methodologies -- could we do a workshop on this topic to learn about its characteristics and uses?
   3. Could we explore how Big-O is examined in web development languages?
   4. Is there a way to perfectly align an image inside an already-established frame without disproportionately compressing the image?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   [I'm generally a calm person. There's few things that truly get me worked up or ready to duel. For example, mosquitoes -- why? Why do mosquitoes exist? I could write an entire dissertation discussing how much I despise mosquitoes. 
   Another (and likely more common trigger) is some healthy competition. I think if I had a few more hours to work on this project, I would absolutely love transforming the game into one that fosters healthy competition. I think this could go in a variety of directions. There could be a way to keep track of a user's wins and losses to build a global leaderboard that ranks top 5 users from around the world. There could also be an in-game reward system to keep track of how many days a participant signs in to play the game, rewarding them with a 'daily bonus' which can be used towards customizing the user interface for the participant's platform or even introducing an 'avatar', thereby allowing the participant to customize aspects of their avatar, to make the game more interactive and lively. Making a multiplayer version of the game would be awesome, too, whether the participant wishes to play with friends from in-person or make new friends with strangers in different cities, states, and countries!
   As an avid music listener and Spotify playlist creator, I deeply appreciate the sound aspects of this game. If I had some extra time, I would love to play around with what audio pattern can be played. For example, I think it could be incredibly fun to have users input their own audio, whether that's an instrumental song or their favorite throwback song from the '90s, extract a snippet of that song to be the 'pattern' to play, and have the user play the game with that audio as the pattern to replicate in order to win the game.]

## License

    Copyright [JEONG SHIN]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
