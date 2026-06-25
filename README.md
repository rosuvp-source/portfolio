# Portfolio Website

A modern, responsive portfolio website ready for deployment on Netlify.

## Features

- Responsive design (mobile-first)
- Clean, modern UI with CSS custom properties
- Smooth scroll navigation
- Project showcase section
- Skills display
- Contact form (demo)
- Netlify-ready configuration

## Project Structure

```
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── script.js       # JavaScript functionality
├── netlify.toml    # Netlify configuration
└── README.md       # This file
```

## Local Development

Open `index.html` directly in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

## Netlify Deployment

### Option 1: Git Integration (Recommended)
1. Push this repo to GitHub
2. Connect to Netlify: https://app.netlify.com/start
3. Select your repository
4. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
5. Click "Deploy site"

### Option 2: Manual Deploy
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and deploy
netlify login
netlify deploy --prod --dir=.
```

## Customization

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  /* ... */
}
```

### Content
Update `index.html` with your:
- Personal info
- Projects
- Skills
- Contact details

## Netlify Configuration

The `netlify.toml` includes:
- Security headers
- Cache control for static assets
- SPA fallback redirect
- No build step required (static site)

## License

MIT