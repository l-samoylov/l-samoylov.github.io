---
layout: page
title: Sudoku Solvers
description: Artificial Intelligence (COSC 76) 
img: assets/img/projects/sudoku.png
importance: 1
category: coursework
---

## Overview
How fast can you solve sudoku? 

By [representing sudoku as a satisfiability (SAT) problem](https://www.eeecs.qub.ac.uk/~I.Spence/SuDoku/SuDoku.html), where you want each row/square/column to obey certain rules, you can solve it with sat solvers! This project compares WalkSAT, GSat, and the Davis–Putnam–Logemann–Loveland (DPLL) algorithm for Sudoku SAT solving. [See here in Github](https://github.com/l-samoylov/SudokuSolvers). 

It also checks if the sudoku puzzle can even be solved! 

(DPLL beats GSAT, WalkSAT, and me 🥲 at [medium sudoku puzzles](https://sudoku.com/medium/))