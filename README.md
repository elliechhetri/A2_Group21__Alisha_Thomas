# Assignment 2 – Currency Converter App  
COMP3074 – Mobile App Development (Fall 2025)

## Group Members
- **Alisha Adhikari** – 101514070  
- **Thomas Del Mundo** – 101498572  

## About the App
This app is a simple currency converter built with **React Native (Expo)**.  
The user can enter:
- Base currency (example CAD)
- Destination currency (example USD)
- Amount to convert

The app checks the input, calls the **FreeCurrencyAPI**, gets the exchange rate, and shows the converted amount. It also shows errors if something is wrong, like invalid currency code or network issues.

There are **two screens**:
1. **Main Screen** – all the input fields, Convert button, errors, loading, and final result.
2. **About Screen** – our names, student IDs, and a small description of the app.

Navigation is done using **Expo Router**.

## Features
- Input validation (3-letter currency codes + positive number)
- API call to FreeCurrencyAPI
- Loading indicator
- Error handling
- Shows exchange rate and converted value
- Clean and simple UI
- About page with student information

## How to Run
1. Install dependencies:
npm install
2. Start the project:
npx expo start

3. Press:
- **w** → open in browser  
- Or scan QR code in Expo Go app

## AI Usage
We used AI (ChatGPT) to help with:
- Understanding steps  
- Fixing errors  
- Writing small parts of the code  
- Writing README  
- Explaining how to structure the project  

We reviewed everything and made sure the app works properly.

The AI usage declaration PDF is also included in the submission.

## Status
The app is complete and ready to submit.

