# n-queens

## The problem in a nutshell

Given an _n x n_ chessboard, how many different ways can you place _n_ queens, such that none of them are attacking each other?

## For your consideration

Pondering the following questions (in order) will help you conceptualize a solution:

- [ ] Given an _n x n_ chessboard, how would you place _n_ rooks such that none of them are attacking each other?
- [ ] Given an _n x n_ chessboard, how many different ways can you place _n_ rooks, such that none of them are attacking each other?
- [ ] Given an _n x n_ chessboard, how would you place _n_ queens such that none of them are attacking each other?
- [ ] Given an _n x n_ chessboard, how many different ways can you place _n_ queens, such that none of them are attacking each other?

You'll run into some questions like this (but easier) during some interviews, and during
your day-to-day work. This repo is a playground for thinking about this kind of problem.

## Helpful Groundwork

To get started, we've provided a visualizer for your algorithms. Most algorithm questions are posed abstractly,
but this Backbone app will help you see what's going on inside your code more easily.

To make use of it, open `BoardViewer.html`. You'll be implementing the conflict detection functions in
`src/Board.js` as stepping stones to your solution.

## Basic Requirements

_(Read this section and the Helpful Info section before beginning. After completing the bare minimum requirements, proceed to the Advanced content section.)_

Some of the helper functions in `src/Board.js` have been completed for you, and some have not. You should
only need to edit the functions listed below.

- [ ] Open `src/Board.js` and fix the incomplete helpers (look for the 'start here' section) such that the specs in `spec/BoardSpec.js` pass.
      To see if your specs are passing, open `SpecRunnner.html` and look at the 'Board' section. Doing so will help
      you understand the problem more thoroughly, and will make the visualizer show any conflicts on the board.
  - [ ] **hasRowConflictAt()**: test if a specific row on this board contains a conflict
  - [ ] **hasAnyRowConflicts()**: test if any rows on this board contain a conflict
  - [ ] **hasColConflictAt()**: test if a specific column on this board contains a conflict
  - [ ] **hasAnyColConflicts()**: test if any columns on this board contain a conflict
  - [ ] **hasMajorDiagonalConflictAt()**: test if a specific major diagonal on this board contains a conflict
  - [ ] **hasAnyMajorDiagonalConflicts()**: test if any major diagonals on this board contain a conflict
  - [ ] **hasMinorDiagonalConflictAt()**: test if a specific minor diagonal on this board contains a conflict
  - [ ] **hasAnyMinorDiagonalConflicts()**: test if any minor diagonals on this board contain a conflict

- [ ] Fill in the functions in `src/solvers.js`. Fill them out so they accomplish the stated goals and pass the
      tests in `spec/solversSpec.js`
  - [ ] **findNRooksSolution()**: returns a single solution to the n-rooks problem
  - [ ] **countNRooksSolutions()**: returns a count of the total number of solutions to the n-rooks problem
  - [ ] **findNQueensSolution()**: returns a single solution to the n-queens problem
  - [ ] **countNQueensSolutions()**: returns a count of the total number of solutions to the n-queens problem

- [ ] Identify the time complexity of each of your helper methods, as well as for each of your working solutions

## Helpful Info

- Don't reinvent wheel where you don't have to. Use the Board constructor you build out in `src/Board.js` in your code. You can also access it within the Chrome console easily after opening `BoardViewer.html`
  - Create new board instances that have access to all the helper methods you write in `src/Board.js`
    - example: `var board = new Board({n:5})`
  - Rather than setting or getting object properties directly with plain JavaScript, Backbone provides the `get` and `set` methods. Play with the getters and setters that Backbone provides
    - example: `board.get(3)` will return the 3rd row of the instance `board` (assuming that instance exists)

- **Rows** run horizontally, left to right
- **Columns** run vertically, top to bottom
- **Major Diagonals** run diagonally, top-left to bottom-right
- **Minor Diagonals** run diagonally, top-right to bottom-left

- In [chess] the [rook] piece moves and attacks horizontally (along rows) or vertically (along columns), through any number of unoccupied squares
- In chess the [queen] piece moves and attacks horizontally (along rows), vertically (along columns), or diagonally (along major and minor diagonals), through any number of unoccupied squares

![row](https://f.cloud.github.com/assets/1577682/1257423/0f26258e-2ba7-11e3-9808-b39041c2e1a2.png)
![column](https://f.cloud.github.com/assets/1577682/1257424/0f2e9dcc-2ba7-11e3-82fc-ff8fb7bfc324.png)
![major](https://f.cloud.github.com/assets/1577682/1257421/0ef7f588-2ba7-11e3-9cbc-577d3ad20bb1.png)
![minor](https://f.cloud.github.com/assets/1577682/1257422/0f127a66-2ba7-11e3-9196-221f65cf03e3.png)


## Extra Credit

Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer.

- [ ] Optimize the time and/or space complexity of your solvers. Here are some ideas:
    - [ ] Consider the memory usage of your solver:
        - Do you have to allocate and duplicate an entire board?
        - Can you re-use the board?
        - Can you get by with less information?
    - [ ] Consider what work you can avoid doing:
        - Are you doing any work early in the algorithm that you can tell will be fruitless?
        - How much work do you do on paths which are obviously wrong?

- [ ][Profile][Profile] and improve your code. Notate changes in your commit messages
- [ ] What symmetries in the chess board can you exploit to optimize your solution? Do it!

- [ ] Implement a solution using bitwise operators
    - [ ] Read some of these additional resources about bitwise operations:
        - [Wikipedia on bitwise operations](http://en.wikipedia.org/wiki/Bitwise_operation)
        - [C Programming tutorial on bitwise operators](http://www.cprogramming.com/tutorial/bitwise_operators.html)
          - This tutorial is in C, another programming language where bitwise operators are more common, but is also applicable to JavaScript.
        - [MDN on bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
    - [ ] Try devising your own bitshifting solution. How will you interact with the problem in bits?
    - [ ] Implement [Martin Richards's bitwise n-queens solution algorithm][academic paper], in JavaScript

_Optional_
- [ ] Play with Hack Reactor's own Ruan Pethiyagoda's [n-queens solution tweet][ruan n-queens] by either:
  - [ ] Writing a blog post that deciphers the tweet for a lay-programmer
  - [ ] Trying to improve on the speed of his alogrithm without exceeding the character limit for a tweet

## Nightmare Mode

- [ ] [Parallelize][parallel computing] your solution then implement it using [HTML5 web workers][web workers]

[chess]: https://en.wikipedia.org/wiki/Chess
[rook]: https://en.wikipedia.org/wiki/Rook_(chess)
[queen]: https://en.wikipedia.org/wiki/Queen_(chess)
[Profile]: http://jsperf.com/
[academic paper]: http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.51.7113&rep=rep1&type=pdf
[parallel computing]: https://en.wikipedia.org/wiki/Parallel_computing
[web workers]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
[ruan n-queens]: https://twitter.com/ruanpethiyagoda/status/332992908565295104
