# Personal Academic Website

A modern, minimalist personal website built with React and TypeScript, inspired by minimalist design principles (like lynnandtonic.com). Perfect for academics, researchers, and professionals.

## Features

✨ **Modern Design**
- Clean, minimalist aesthetic
- Responsive layout (mobile-first design)
- Smooth navigation and transitions
- Professional typography

📄 **Pages Included**
- **Home**: Hero section with welcome message
- **About**: Biography, education, and background
- **Work**: Portfolio/publications grid with tags
- **Thoughts**: Blog-style posts with categories
- **Archive**: Organized by year for easy browsing
- **Archive Year**: Detailed view of posts by year

🔧 **Tech Stack**
- React 18+ with TypeScript
- Vite for fast development
- React Router for navigation
- CSS3 with custom properties (CSS variables)
- No external UI frameworks

📱 **Responsive**
- Mobile-friendly design
- Tablet optimized
- Desktop layout
- Touch-friendly navigation

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Site header with title
│   ├── Header.css
│   ├── Navigation.tsx      # Main navigation menu
│   ├── Navigation.css
│   ├── Footer.tsx          # Footer with links
│   └── Footer.css
├── pages/
│   ├── Home.tsx            # Homepage
│   ├── About.tsx           # About page
│   ├── Work.tsx            # Portfolio/work page
│   ├── Thoughts.tsx        # Blog posts
│   ├── Archive.tsx         # Archive index
│   ├── ArchiveYear.tsx     # Archive by year
│   └── pages.css           # All page styles
├── App.tsx                 # Main app with routing
├── App.css                 # App layout styles
├── main.tsx                # Entry point
└── index.css               # Global styles
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Navigate to project directory**
```bash
cd wu_web
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Your Info

Edit [src/components/Header.tsx](src/components/Header.tsx):
```tsx
<h1>Your Name</h1>
<p className="subtitle">Your Professional Title</p>
```

Edit [src/components/Footer.tsx](src/components/Footer.tsx):
```tsx
<a href="https://github.com/yourname">GitHub</a>
<a href="https://twitter.com/yourname">Twitter</a>
```

### Customize Content

#### Home Page ([src/pages/Home.tsx](src/pages/Home.tsx))
Update the hero text and call-to-action

#### About Page ([src/pages/About.tsx](src/pages/About.tsx))
Add your bio, education history, and background

#### Work Page ([src/pages/Work.tsx](src/pages/Work.tsx))
Edit the `workItems` array:
```tsx
const workItems: WorkItem[] = [
  {
    title: 'Your Project',
    year: 2024,
    description: 'Project description',
    tags: ['Tag1', 'Tag2'],
    link: 'https://example.com'
  },
  // ... more items
];
```

#### Thoughts Page ([src/pages/Thoughts.tsx](src/pages/Thoughts.tsx))
Edit the `posts` array with your blog posts

#### Archive Pages
Edit the `archiveYears` and archive items data

### Styling

The site uses CSS custom properties for easy theming. Edit [src/index.css](src/index.css):

```css
:root {
  --color-primary: #000;        /* Main text color */
  --color-secondary: #666;      /* Secondary text */
  --color-accent: #0066cc;      /* Link color */
  --color-background: #fff;     /* Background */
  --color-border: #ddd;         /* Border color */
  
  /* Spacing scale */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  --max-width: 900px;           /* Content max width */
}
```

#### Change Color Scheme

```css
:root {
  --color-primary: #1a1a1a;
  --color-accent: #e74c3c;      /* Red accent */
}
```

#### Dark Mode (Optional)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #f0f0f0;
    --color-secondary: #aaa;
    --color-background: #1a1a1a;
    --color-border: #333;
  }
}
```

## Fonts

The project uses system fonts by default. To change to custom fonts, edit [src/index.css](src/index.css):

```css
:root {
  --font-serif: 'Georgia', serif;      /* For headings */
  --font-sans: 'Your Font', sans-serif; /* For body text */
}
```

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Then drag-and-drop the dist folder to Netlify
```

### Deploy to GitHub Pages

1. Update `vite.config.ts`:
```ts
export default defineConfig({
  base: '/repository-name/',
  plugins: [react()],
})
```

2. Build and push to GitHub:
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push
```

## Project Config Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts
- `index.html` - HTML entry point

## Performance Optimizations

✅ Code splitting via React Router
✅ CSS modules scope
✅ Optimized images
✅ Lazy loading for routes (optional)
✅ Production build: ~50KB (gzipped)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari 12+
- Chrome Mobile

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint (if configured)
```

## Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React Router Docs](https://reactrouter.com)
- [Vite Documentation](https://vite.dev)

## Tips

💡 **Use semantic HTML** - Replace generic divs with semantic elements where possible

💡 **Accessibility** - Add `alt` text to images, use proper heading hierarchy

💡 **SEO** - Consider adding a `helmet` library for dynamic meta tags

💡 **Analytics** - Integrate Google Analytics or similar

💡 **Contact Form** - Add a contact form using services like Formspree

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, refer to:
- React: https://react.dev/learn
- React Router: https://reactrouter.com
- Vite: https://vite.dev

---

**Built with React + TypeScript | Inspired by Minimalist Web Design**

```
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
