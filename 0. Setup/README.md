# Setting Up React Using Vite 

## Follow these steps to create a React project with Tailwind CSS using Vite.
## Step 1: Install Node
Make sure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/en). 
## Step 2: Initialize React Project
1. Run the following command in a directory of your choosing:
 ```bash
 npm create vite@latest projectName
 ```
2. Choose React
3. Choose JavaScript
4. Go to Project Directory
 ```bash

 cd projectName
 ```
5. Install Dependencies:
 ```bash

 npm install
 ```
## (Optional) Installing Tailwind CSS
1. Install necessary libraries:
 ```bash
 npm install tailwindcss @tailwindcss/vite
 ```
2. In vite.config.ts, import and add the plugin using the following as reference:
```bash

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
3. Go to src/index.css, erase everything, and paste the following:
```bash
@import "tailwindcss";
```
6. Start development server:
```bash
	npm run dev
```