# FocusFlow - AI-Powered Pomodoro Timer

## Description
FocusFlow helps you stay focused and productive with a sleek, easy-to-use Pomodoro timer. Customize work and break sessions, track your tasks across sessions, and receive helpful AI-generated focus tips each time you start a session. Perfect for beginners exploring web development and productivity tools.

## Tech Stack
- React (for UI components and state management)
- JavaScript (core language)
- CSS ( styling )

## Requirements
- Node.js and npm installed on your machine

## Installation & Usage
1. Clone the repository:
```bash
git clone https://github.com/bitasmbl/bitasmbl-focus-flow-ai-powered-pomodoro-timer.git
```
2. Navigate into the project directory:
```bash
cd bitasmbl-focus-flow-ai-powered-pomodoro-timer
```
3. Install dependencies:
```bash
npm install
```
4. Run the development server:
```bash
npm start
```
5. Open your browser and go to http://localhost:3000 to start using FocusFlow.

## Implementation Overview
- The timer switches between 25-minute work and 5-minute break cycles, managed with useEffect hooks for precise interval control.
- Tasks are saved to localStorage, ensuring persistence across sessions.
- Each session start fetches a random focus tip through the `getRandomTip()` utility.

## Additional Notes
- This is a beginner-level project ideal for learning React, hooks, and localStorage integration.

When you are done, submit the project from your profile: [https://bitasmbl.com/home/profile](https://bitasmbl.com/home/profile)