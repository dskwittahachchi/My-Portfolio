# 🚀 Personal Portfolio Website

A modern, responsive, and professional portfolio website for an IT Undergraduate / Junior Software Developer.

## ✨ Tech Stack

| Technology     | Purpose                       |
|----------------|-------------------------------|
| React.js (Vite)| Frontend framework            |
| Tailwind CSS v3| Utility-first styling         |
| Framer Motion  | Animations & page transitions |
| React Router   | Client-side routing           |
| Lucide React   | Icon library                  |
| EmailJS        | Contact form email sending    |

## 📁 Project Structure

```
src/
├── context/
│   └── ThemeContext.jsx     # Dark/Light mode state
├── components/
│   ├── Navbar.jsx           # Navigation with mobile menu
│   └── Footer.jsx           # Footer with social links
├── pages/
│   ├── Home.jsx             # Hero section
│   ├── About.jsx            # About me + education + CV
│   ├── Skills.jsx           # Skill progress bars
│   ├── Projects.jsx         # Project cards with filtering
│   ├── Experience.jsx       # Timeline
│   └── Contact.jsx          # Contact form
├── data/
│   └── portfolioData.js     # ⭐ Edit YOUR info here
├── App.jsx                  # Router + page transitions
├── main.jsx                 # App entry point
└── index.css                # Global styles + Tailwind
```

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure personal information
Open `src/data/portfolioData.js` and update:
- Your name, title, bio, email, location
- GitHub & LinkedIn URLs
- Projects, skills, and timeline entries
- CV link (place your PDF in `public/cv/`)

### 4. Setup EmailJS (optional but recommended)
1. Create a free account at [emailjs.com](https://emailjs.com)
2. Create a service, template, and get your public key
3. Copy `.env.example` to `.env` and fill in the values:
```bash
cp .env.example .env
```
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 5. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

## 🚀 Deployment

### Netlify (Recommended)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add your environment variables in Netlify dashboard

### GitHub Pages
1. Install the gh-pages package:
```bash
npm install -D gh-pages
```
2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Update `vite.config.js` to set the base path:
```js
export default defineConfig({ base: '/portfolio/', plugins: [react()] })
```
4. Deploy:
```bash
npm run deploy
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors`
- **Fonts**: Update the Google Fonts link in `index.html`
- **Dark mode default**: Change the default in `ThemeContext.jsx`
- **Content**: All text lives in `src/data/portfolioData.js`

## 📄 License

MIT — Feel free to use, modify, and share.
