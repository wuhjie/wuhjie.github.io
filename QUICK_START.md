# Quick Start Guide

## Your Personal Academic Website is Ready! 🚀

Your website is now running at **http://localhost:5173/**

### What You Have

A complete React + TypeScript website with:
- ✅ Homepage with hero section
- ✅ About page (edit with your bio)
- ✅ Work/Portfolio page (add your projects)
- ✅ Thoughts/Blog page (add your posts)
- ✅ Archive system (organized by year)
- ✅ Responsive design (works on all devices)
- ✅ Minimalist aesthetic (inspired by lynnandtonic.com)

---

## Quick Edits

### 1. Change Your Name & Title
**File:** [src/components/Header.tsx](src/components/Header.tsx)

```tsx
<h1>Your Name</h1>
<p className="subtitle">Academic Researcher & Developer</p>
```

### 2. Update Footer Links
**File:** [src/components/Footer.tsx](src/components/Footer.tsx)

```tsx
<a href="https://github.com/yourname" target="_blank">GitHub</a>
<a href="https://twitter.com/yourname" target="_blank">Twitter</a>
<a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a>
```

### 3. Add Your Bio
**File:** [src/pages/About.tsx](src/pages/About.tsx)

Replace the placeholder content with your actual information:
- Background
- Education (degrees and universities)
- Current work
- Interests/hobbies

### 4. Showcase Your Work
**File:** [src/pages/Work.tsx](src/pages/Work.tsx)

Edit the `workItems` array:
```tsx
const workItems: WorkItem[] = [
  {
    title: 'Your Project Title',
    year: 2024,
    description: 'Brief description of what you did and the impact',
    tags: ['React', 'TypeScript', 'Research'],
    link: 'https://github.com/yourname/project'
  },
  // Add more...
];
```

### 5. Add Blog Posts
**File:** [src/pages/Thoughts.tsx](src/pages/Thoughts.tsx)

Edit the `posts` array:
```tsx
const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Your Post Title',
    date: 'January 15, 2026',
    category: 'Research',
    excerpt: 'A brief preview of your post...',
    link: '#'
  },
  // Add more...
];
```

---

## Customization

### Change Colors
**File:** [src/index.css](src/index.css) (Lines 1-20)

```css
:root {
  --color-primary: #000;        /* Main text */
  --color-accent: #0066cc;      /* Links (change this for a different color) */
  --color-secondary: #666;      /* Lighter text */
  --color-background: #fff;     /* Background */
  --color-border: #ddd;         /* Borders */
}
```

Popular accent colors:
- Blue: `#0066cc`
- Red: `#e74c3c`
- Green: `#27ae60`
- Purple: `#9b59b6`
- Orange: `#e67e22`

### Change Fonts
**File:** [src/index.css](src/index.css)

```css
:root {
  --font-sans: 'Your Font Name', -apple-system, sans-serif;
}
```

For Google Fonts, add to [index.html](index.html):
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update CSS:
```css
--font-sans: 'Poppins', sans-serif;
```

---

## Project Layout

```
📁 wu_web/
├── 📁 src/
│   ├── 📁 components/          ← Header, Navigation, Footer
│   ├── 📁 pages/               ← Home, About, Work, Thoughts, Archive
│   ├── App.tsx                 ← Main app (routing)
│   ├── App.css
│   ├── index.css               ← Global styles
│   └── main.tsx
├── 📁 public/                  ← Static files
├── 📄 package.json
├── 📄 vite.config.ts
├── 📄 tsconfig.json
└── 📄 README.md
```

---

## File Guide

| File | Purpose | What to Edit |
|------|---------|------------|
| [src/components/Header.tsx](src/components/Header.tsx) | Site title & subtitle | Name and title |
| [src/components/Footer.tsx](src/components/Footer.tsx) | Footer with social links | Your social profiles |
| [src/pages/Home.tsx](src/pages/Home.tsx) | Homepage | Welcome message |
| [src/pages/About.tsx](src/pages/About.tsx) | About/Biography page | Your bio, education, interests |
| [src/pages/Work.tsx](src/pages/Work.tsx) | Portfolio/Projects | Your projects and work items |
| [src/pages/Thoughts.tsx](src/pages/Thoughts.tsx) | Blog posts | Your articles and posts |
| [src/index.css](src/index.css) | Colors & fonts | Theme customization |
| [src/pages/pages.css](src/pages/pages.css) | Page layouts | Advanced styling |

---

## Terminal Commands

```bash
# Start development server (already running!)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment

### To Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### To Netlify
```bash
npm run build
# Drag dist/ folder to netlify.com
```

### To GitHub Pages
Update `vite.config.ts` base path, then:
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push
```

---

## What's Next?

1. ✏️ Edit your name and info (Header, Footer)
2. 📝 Add your bio (About page)
3. 💼 List your projects (Work page)
4. 📖 Add your blog posts (Thoughts page)
5. 🎨 Customize colors in `index.css`
6. 🚀 Deploy to Vercel or Netlify

---

## Tips & Tricks

💡 **Edit while the server is running** - Changes auto-refresh in browser

💡 **Check mobile view** - Press F12 in browser and toggle device toolbar

💡 **Archive by year** - The archive pages are placeholder-ready to connect to real data

💡 **Add images** - Place in `public/` folder and reference as `/image-name.jpg`

💡 **Add more pages** - Create new file in `pages/`, add route in [src/App.tsx](src/App.tsx)

---

## Troubleshooting

**Dev server won't start?**
```bash
npm install
npm run dev
```

**Page not showing changes?**
- Hard refresh browser: Ctrl+Shift+R (Cmd+Shift+R on Mac)
- Check for typos in component names

**Build errors?**
- Check TypeScript errors: file must be saved
- Verify all imports are correct

---

## Need Help?

- React docs: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs
- React Router: https://reactrouter.com
- Vite: https://vite.dev

---

**Happy Building! Your website is ready to showcase your work. 🎉**
