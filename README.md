# Swatah AI - Logi-Vue Dashboard

This repository contains the **Swatah AI - Logi-Vue** project. Below is a step-by-step guide for setting up and running the project on your local machine.

## Prerequisites

Before starting, ensure you have the following installed:

1. **React**: Version 19
2. **Node.js**: Version 23
3. **npm**: Version 11

## Installation Steps

### Step 1: Install React (Version 18.3.1 or Later)

Ensure that you have **React version 19** (or any version 19 or later). You can check the version of React with the following command:


### **Step 2:**
after all of these things

in vsc terminal run: {any one of these three}
```bash
npm i 
or 
npm install
or
npm install -g npm
```
it will install all dependencies and then run command

### **Step 3:**
for desktop only: 
```bash
npm run dev 
```

for desktop and external device check:
```bash
npm run dev -- --host
```

if webApp not run check all version downloaded things and match from 'package.json' file

Ensure the version is v22.13.0. and above one
```bash
node -v
```

### **Step 4:**
Build the Project for Production (Optional)
```bash
npm run build
```

### **Step 5:**
Preview the Production Build (Optional)
```bash
npm run preview
```

### **Note:**

If the web app isn't running:

1-Check if Node.js, npm, and React are installed with the correct versions.
2-Ensure you've installed all dependencies correctly by running npm install.
3-If you face any issues, try deleting node_modules and package-lock.json and reinstalling