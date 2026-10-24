# Michael Solomon — Healthcare Business Analyst Portfolio

A static portfolio website built with plain **HTML, CSS and JavaScript**.

- No Next.js, React, npm, Node.js, TypeScript or build step.
- Upload the files to GitHub and it works.
- Works on GitHub Pages, Netlify, Vercel (static) and most static hosts.

---

## 1. What's in the folder

```
theanalyst/
├── index.html                  ← the home page (entry point)
├── favicon.ico                 ← browser tab icon
├── README.md                   ← this guide
├── PORTFOLIO-INPUT.md          ← questionnaire for your content
├── .gitignore
├── assets/
│   ├── css/style.css           ← all styling (colours, fonts, layout)
│   ├── js/data.js              ← ★ YOUR CONTENT — edit this
│   ├── js/articles.js          ← ★ YOUR INSIGHTS ARTICLES — edit this
│   ├── js/script.js            ← site behaviour (no need to edit)
│   ├── images/                 ← profile photo, project images, icons
│   └── documents/
│       ├── Michael-Solomon-CV.pdf
│       └── artefacts/          ← put your BA artefact PDFs here
├── projects/case-study.html    ← one template for every case study
└── insights/article.html       ← one template for every article
```

---

## 2. Upload to GitHub

1. Go to your repository: **https://github.com/Adusmichael/theanalyst** (or create a new one).
2. Click **Add file → Upload files**.
3. Drag in **everything inside** the `theanalyst` folder (not the folder itself).
   `index.html` must sit at the top level of the repository — not inside another folder.
4. Scroll down and click **Commit changes**.

> Tip: hidden files like `.gitignore` may not show in your file explorer. It's optional — the site works without it.

---

## 3. Turn on GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **main**, Folder: **/ (root)** → **Save**.
4. Wait 1–2 minutes. Your site will be live at:

   **https://adusmichael.github.io/theanalyst/**

GitHub Pages automatically uses `index.html` as the home page.

If you ever use a different repository name or a custom domain, update the four lines marked `og:url`, `og:image`, `twitter:image` and `canonical` near the top of `index.html` so LinkedIn previews work.

---

## 4. Update your information

Almost everything is in **`assets/js/data.js`**. Open it on GitHub (click the file, then the pencil ✏️ icon), edit, then **Commit changes**.

| To change… | Look for this in `data.js` |
|---|---|
| Name, "also known as" | `name`, `alsoKnownAs` |
| Professional title | `title` |
| Tagline & hero text | `tagline`, `heroIntro` |
| Hero stats (3+ years etc.) | `heroStats` |
| Highlights strip | `highlights` |
| Bio | `aboutShort`, `aboutLong`, `aboutPillars` |
| Skills | `competencies`, `capabilityMatrix` |
| Experience | `journey`, `experience` |
| Projects & case studies | `projects` |
| BA artefacts | `artefacts` |
| 5Q approach | `approach` |
| Education, certifications, roadmap | `education`, `learning`, `roadmap` |
| Email, phone, LinkedIn, GitHub | `email`, `phone`, `linkedin`, `github` |
| CV file & button text | `resume`, `resumeButtonText` |
| Formspree endpoint | `formspreeEndpoint` |

**Rules that keep things working**
- Keep text inside quotes: `"like this"`.
- Keep the commas at the end of lines.
- Use `\"` if you need a double quote inside text.
- Set a value to `""` to **hide** it (e.g. `phone: ""`).
- Search for **`TODO`** to find what still needs filling in.
- Add `(Learning)` to the end of a skill to show a small "learning" tag.

**SEO text** (Google / LinkedIn previews) is at the top of `index.html`, between the comments marked *SEO*.

---

## 5. Images

Put images in `assets/images/`.

- **Profile photo:** replace `profile.jpg` (portrait, about 640 × 800 px, under 200 KB).
- **Project images:** the six `project-0X.svg` files are simple placeholder illustrations. To use your own, add e.g. `northlake.jpg` (about 1200 × 750 px) and change that project's `image` in `data.js`.
- **Social preview:** `og-image.jpg` (1200 × 630 px) is what LinkedIn shows when you share the link.
- Compress images at [squoosh.app](https://squoosh.app) before uploading to keep the site fast.

## 6. Favicon (browser tab icon)

A simple "MS" icon is included:
- `favicon.ico` (top level)
- `assets/images/favicon.svg`
- `assets/images/apple-touch-icon.png` (iPhone home screen)

To change it, replace those files with your own using the same names. [realfavicongenerator.net](https://realfavicongenerator.net) can generate all three from one image.

## 7. CV

Your CV is at `assets/documents/Michael-Solomon-CV.pdf`.
To update it, upload the new PDF with **the same name**, or upload a new name and change `resume` in `data.js`.

## 8. BA artefacts (downloadable PDFs)

1. Export each artefact as a PDF (e.g. `stakeholder-register.pdf`).
2. Upload to `assets/documents/artefacts/`.
3. In `data.js`, under `artefacts`, set its `file`:
   ```js
   { title: "Stakeholder Register", text: "...", file: "assets/documents/artefacts/stakeholder-register.pdf" },
   ```
   While `file` is `""` the card shows **Coming soon**.

⚠️ Only publish artefacts from training/fictional case studies, or with permission. Never upload real NHS or patient data.

## 9. Projects & case studies

Every project in `data.js` automatically gets a case-study page at
`projects/case-study.html?id=PROJECT-ID`.

To complete a case study, fill in its `caseStudy` block:
```js
caseStudy: {
  problem: "What was going wrong, for whom, and how you knew.",
  objective: "What the project set out to achieve.",
  approach: "How you went about it.",
  analysis: ["What you analysed", "..."],
  findings: ["Key finding", "..."],
  recommendations: ["Recommendation", "..."],
  outcome: "What happened as a result.",
  impact: "Only real, evidenced impact."
},
```
Empty sections are hidden. While all are empty, the page shows the skills and a "Full case study coming soon" note.

**To add a project:** copy a whole `{ ... },` project block, paste it below, and give it a new unique `id` (lowercase, hyphens, no spaces).

## 10. Insights articles

Articles live in `assets/js/articles.js`. Each one has an `id`, `category`, `title`, `excerpt`, optional `date` and `linkedin` link, and a `body`:
```js
"A paragraph of text",
{ "h": "A sub-heading" },
{ "ul": ["bullet one", "bullet two"] },
{ "quote": "A highlighted pull-quote" }
```
Copy an existing article block to add a new one. New categories create new filter buttons automatically.

## 11. Contact form (Formspree)

The form posts to your Formspree endpoint (`formspreeEndpoint` in `data.js`) — no backend needed.
The first submission from your live site may ask you to confirm the form in your Formspree inbox. Messages arrive at the email registered on your Formspree account.

## 12. Colours

Open `assets/css/style.css`. At the top, `:root { ... }` holds the light theme colours; the two dark blocks underneath hold the dark theme. The main brand colour is:
```css
--accent: #0e6b62;   /* light mode teal */
--accent: #5fb8ac;   /* dark mode teal (in both dark blocks) */
```

## 13. Fonts

Fonts are set at the top of `style.css`:
```css
--font-sans: "Inter", ...;            /* body and headings */
--font-serif: "Instrument Serif", ...; /* italic tagline and quotes */
```
They're loaded from Google Fonts by the `<link href="https://fonts.googleapis.com/...">` line in `index.html`, `projects/case-study.html` and `insights/article.html`. To change a font, pick one at [fonts.google.com](https://fonts.google.com), update that link in all three files, and update the variable.

## 14. Preview on your computer

Double-clicking `index.html` works for most of the site. For an exact preview, run a tiny local server from the folder (Python is preinstalled on Mac):
```
python3 -m http.server 8000
```
then open `http://localhost:8000`.
