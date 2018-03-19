---
title: Boolean Biotech
subtitle:
website: http://blog.booleanbiotech.com/
start-date: 2014
type-org: Project
city:
country: United States
twitter: https://twitter.com/booleanbiotech?lang=en
facebook: 
tags:
  - DNA
---

## About
This small project started when I was looking for an implementation of Needleman-Wunsch (pairwise global DNA alignment) in javascript. I just wanted to align two sequences on a website and in a google sheet (using Google Apps Script).

I looked around for a simple javascript implementation (preferably one self-contained javascript file) but I was surprised that I couldn't find one. Needleman-Wunsch is a pretty simple algorithm so I decided to implement it. I did get a little bit side-tracked...

The first step was to find someone else's implementation to copy, so I started with some numpy code from @brent_p. Based on his other work, I think it's a safe assumption it's implemented correctly. (There is also a complete Cython version in this repo, which implements gap_extend and other parameters, and is obviously much faster. I really just need a very basic alignment so the simpler numpy version is fine for me).
