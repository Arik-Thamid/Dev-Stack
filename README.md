# Dev Stack

A modern web application for exploring developer technologies and building your own technology stack.

##  Features

- Browse different developer technologies with ratings, categories, and difficulty levels.
- Add technologies to your personal stack without allowing duplicates.
- Remove individual technologies or clear the entire stack with toast notifications.

##  Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React Toastify
- React Icon
- JSON
- Vite

##  Project Overview

Dev Stack helps developers explore different technologies and create a personalized technology stack.

## ⚛️ React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. React uses JSX to make UI code easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows us to store and update data in a React component. In this project, I used it to manage the technology list and the selected stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in React. I used it to fetch the technology data from the JSON file when the application loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React efficiently update and render the correct items.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it in the Your Stack section to show an empty message when no technology is selected and show stack items when technologies are added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. A child can send information back to the parent by calling a function passed through props.# Dev-Stack
