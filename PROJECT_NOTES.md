Project notes

- Place static assets (avatar, images) in the `public/` folder, e.g. `public/passport_photo.jpeg` so they are available at `/passport_photo.jpeg`.
- Add a `site.webmanifest` and favicons to the `public/` folder for PWA and better cross-platform icons.

- I added `public/resume.html` and a small `public/resume.pdf` placeholder; replace `public/resume.pdf` with your real resume (same filename) to enable direct PDF download in the Hero.

How to add your resume from another location (Windows example):

1. From the project root, run:

   ```bash
   npm run add-resume -- "D:\\Ankit DOC\\Ankit_Kumar_Tiwari_BCA_2026.pdf"
   ```

   This copies the specified PDF to `public/resume.pdf` so the site links work immediately.

2. Or manually place your PDF at `public/resume.pdf` and `npm run build` to include it in the production bundle.

Note: the `add-resume` script validates the source path and file extension and reports errors if the file is missing or not a PDF.

- If you'd like, I can help format your resume content and generate a proper PDF for you from Markdown or HTML — say the word.
- Use `target="_blank" rel="noreferrer noopener"` for external links (already added).
- Run `npm run lint` and `npm run dev` to see live feedback and fix accessibility/SEO issues.

If you'd like, I can add a placeholder `public/passport_photo.svg` and a minimal `site.webmanifest` for you.

Contact form options (pick or use multiple):

- EmailJS (client-side): set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` in your `.env` or in your hosting provider's environment. The contact form will send directly from the browser using EmailJS.

- Serverless (recommended for private credentials): deploy `api/send.js` (Vercel-style serverless function) and set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `TO_EMAIL` in the platform's environment variables. The contact form will fall back to POST `/api/send` when EmailJS is not configured.

Notes:
- I added `api/send.js` (Vercel-style) and `netlify/functions/send.js` (Netlify Functions example) plus `nodemailer` to `package.json` so you can deploy a secure server-side sender. 

Netlify guidance:
- You can run the site locally with Netlify Functions using `npm run dev:netlify` (requires `netlify-cli`).
- On Netlify, set the environment variables `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `TO_EMAIL` in the site settings to enable server sends.
- The contact form will try EmailJS (client-side) first, then fall back to `/.netlify/functions/send`.  
- If you'd like, I can also add a Netlify Functions version or a step-by-step deploy guide for Vercel/Netlify.

Deployment:

- This repo includes a GitHub Actions workflow `.github/workflows/deploy.yml` to build and publish the `dist/` folder to GitHub Pages on pushes to `main`.
- To use it: ensure your repository's default branch is `main`, enable GitHub Pages from the repository settings (GitHub Pages -> Deploy from a branch -> `gh-pages` branch), then push to `main`.
- I can instead add instructions for Netlify/Vercel if you prefer continuous deployment there.
