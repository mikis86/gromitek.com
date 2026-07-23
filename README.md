# Gromitek Website

Company website for Gromitek (Miloš Slijepčević PR Gromitek), built as plain HTML/CSS/JS — no build step, no dependencies.

## Structure

```
gromitek-website/
├── index.html      Home
├── about.html       About
├── services.html    Services
├── contact.html      Contact
├── css/style.css     Shared styles
├── js/main.js        Mobile nav toggle + footer year
├── images/           Site photos (see images/README.md)
└── .gitignore
```

## Local preview

Just open `index.html` in a browser — no server required. For a nicer local preview with correct relative paths, you can also run:

```
npx serve .
```

## Before publishing

1. Add real photos to `images/` (see `images/README.md` for filenames).
2. Sign up at [Formspree](https://formspree.io) (free) and replace `YOUR_FORM_ID` in `contact.html` with your real form ID so the contact form actually sends email.
3. Review the tagline on the homepage — currently a placeholder draft.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to Settings → Pages → Source, and select the `main` branch (root).
3. The site will be live at `https://<username>.github.io/<repo-name>/`, or map your own domain via Settings → Pages → Custom domain.
