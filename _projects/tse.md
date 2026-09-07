---
layout: page
title: Tiny Search Engine
description: COSC 50 
img: 
importance: 1
category: coursework
---

## Overview
Have you thought about using an alternative search engine to Google or Safari? 

This search engine demonstrates the basic components: 
* crawler.c explores webpages via DFS and stores the URLS it finds. It starts from a seedURL and explores until it reaches a fixed maxDepth
* indexer.c reads the crawled page, converts each word to lowercase, and counts the occurence of each word. Words that occur > 3 are stored in a hashtable. 
* querier.c Loads the index created by the indexer and reads a query from the user.
  1. Converts the query to lowercase and validates its syntax.
  2. Finds pages containing each search word.
  3. Combines scores according to the operators:
      - and requires both words and uses the lower occurrence count.
      - or accepts either group and adds their scores.
      - Adjacent words are treated as though joined by and.

  4. Displays matching pages from highest to lowest score, including each page’s URL.

View [here on Github](https://github.com/l-samoylov/TinySearchEngine)



