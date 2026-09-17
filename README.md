# 1988 Graphics — Portfolio Website

Static HTML/CSS/JS portfolio site. No build tools required.

## Structure

```
├── index.html          Home page
├── portfolio.html      Portfolio grid
├── about.html          About page
├── contact.html        Contact form
├── css/
│   └── style.css       All styles (design tokens, layout, components, responsive)
├── js/
│   └── main.js         Nav toggle, contact form, scroll reveal
└── assets/
    ├── images/         Site UI images (logo, backgrounds, profile photo)
    └── work/           Portfolio project images/videos
```

## Local Development

Open `index.html` directly in a browser, or use the **Live Server** VS Code extension for auto-reload on save.

## Adding Portfolio Work

1. Drop image files into `assets/work/`
2. In `portfolio.html`, uncomment the example `<article>` block and duplicate it for each project
3. Update `src`, `alt`, title, and category for each item

## Deploying

Drag the project folder into [Netlify Drop](https://app.netlify.com/drop) for instant deployment, or push to GitHub and connect to Netlify/Vercel for automatic deploys.

## Contact Form

The form uses client-side validation only. To receive emails, sign up at [Formspree](https://formspree.io) and replace the TODO in `js/main.js` with your endpoint.
