# Amazon Automation Test Suite (Playwright)

## Overview
This project automates Amazon product search, price extraction, and cart interaction using Playwright.

## Test Cases
1. Search iPhone → print price → add to cart  
2. Search Samsung Galaxy → print price → add to cart  

## Tech Stack
- Playwright
- JavaScript (Node.js)

## Setup

npm install  
npx playwright install  

## Run

npm test  

## Parallel Execution
Configured using 2 workers in playwright.config.js

## Notes
Amazon may block automation due to bot detection. Tests handle this gracefully.

## LambdaTest Cloud Execution (Bonus)

Tests can also be executed on LambdaTest cloud.

### Setup

export LT_USERNAME=your_username  
export LT_ACCESS_KEY=your_access_key  

### Run

npm test  

This runs tests on real cloud browsers in parallel.

