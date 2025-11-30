# SWE Upskill Playground - Interactive Tutorial

An interactive web application to master Software Design Patterns, SOLID Principles, and Software Architecture styles with live visual demos.

## Prerequisites

Before starting, ensure you have the following installed on your machine:

1.  **Node.js** (v18 or higher) - [Download Here](https://nodejs.org/)
2.  **Git** - [Download Here](https://git-scm.com/)

---

## 🚀 How to Run Locally (Terminal)

### 1. Clone the Repository
Open your terminal and run:
```bash
git clone <your-repo-url>
cd design-pattern-playground
```

### 2. Install Dependencies
Install the required node modules:
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 🌐 How to Host on GitHub Pages

You can host this application for free using GitHub Pages.

### 1. Prepare `package.json`
The `package.json` included in this project is already configured. 

### 2. Push Code to GitHub
Ensure your code is pushed to a repository on GitHub.

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 3. Deploy
Run the deployment script. This will build your app and push the `dist` folder to a `gh-pages` branch on your repository.

```bash
npm run deploy
```

*Note: You may be asked to log in to GitHub if you haven't already.*

### 4. Enable GitHub Pages
1.  Go to your repository on GitHub.
2.  Click **Settings** > **Pages** (on the left sidebar).
3.  Under **Build and deployment**, ensure **Source** is set to `Deploy from a branch`.
4.  Set the **Branch** to `gh-pages` and folder to `/ (root)`.
5.  Click **Save**.

Your site will be live at `https://<your-username>.github.io/<repo-name>/` in a few minutes!
