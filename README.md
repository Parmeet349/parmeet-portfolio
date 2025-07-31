# 🌐 Parmeet Singh Banga – Developer Portfolio

This is my personal developer portfolio website showcasing my skills, projects, and background. Built using **React.js** + **Vite** with a responsive, modern **Liquid Glass** UI inspired by iOS 26.

---

## 🚀 Features

- ⚡ Built with Vite for fast performance
- 🎨 Liquid Glass UI: blurred, translucent, frosted glass styling
- 📱 Fully responsive for mobile and desktop
- 🧠 Sections: Hero, About Me, Projects, Skills, Contact, and Footer
- 📄 Resume download with one click
- ✉️ Contact form powered by Formspree (easy to replace)
- 📦 Ready to deploy on GitHub Pages

---

## 🧰 Tech Stack

| Layer         | Tech Used            |
|---------------|----------------------|
| Frontend      | React.js (via Vite)  |
| Styling       | Tailwind CSS         |
| Hosting       | GitHub Pages         |
| Contact Form  | Formspree (free tier)|
| UI Theme      | Liquid Glass (glassmorphism + blur effects) |

---

## 📁 Project Structure

parmeet-portfolio/
├── public/
│   └── Parmeet_Singh_Banga_CV.pdf
├── src/
│   ├── assets/                  # (Optional) Images, icons
│   ├── components/              # Navbar, Footer, Cards
│   ├── pages/                   # Home, About, Projects, etc.
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── README.md



---

## 📦 Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/your-username/parmeet-portfolio.git
cd parmeet-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev


🛠 Customize or Add Content
	•	To add new skills: edit src/pages/Skills.jsx
	•	To update project cards: edit src/pages/Projects.jsx
	•	To update your CV file: replace public/Parmeet_Singh_Banga_CV.pdf
	•	To change the contact form backend: edit the action in src/pages/Contact.jsx


npm install --save-dev gh-pages

# Add these to package.json
"homepage": "https://your-username.github.io/parmeet-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Then:
npm run deploy


👤 About Me

I’m Parmeet Singh Banga, a full-stack developer specializing in React, Node.js, and building fast, elegant web apps. I’m passionate about meaningful design, strong UX, and scalable software.

⸻

🔗 Connect with Me
	•	GitHub: github.com/Parmeet349
	•	LinkedIn: linkedin.com/in/bangaparmeet
	•	Email: parmeet349@gmail.com

⸻

📃 License

MIT License — feel free to use this portfolio as a template.

