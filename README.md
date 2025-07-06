# Personal Portfolio

This repository contains my developer portfolio – a single-page site that presents my background, skills, experience and open-source projects.

## Purpose

* Showcase my profile to recruiters / clients
* Pull latest repositories from GitHub automatically
* Deployed on **Vercel** for hosting, CDN, and preview deployments

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 19 + Vite |
| Styling  | Tailwind CSS 3, Framer-Motion |
| Icons    | React-Icons, Devicon (via jsDelivr) |
| Data     | GitHub REST API v3 |
| Email    | Resend API (contact form) |
| Hosting  | Vercel |

## Key Features

* Responsive design – desktop, tablet, mobile
* Animated hero section & particles background
* Skills grid with rotating language icons
* Projects carousel that fetches repos via GitHub API and shows core technologies
* Contact form with email delivery (Resend)
* Dark-mode ready (Tailwind class strategy)

## Local Development

```bash
# 1. Clone
git clone https://github.com/mpiumakkho/portfolio.git
cd portfolio

# 2. Install deps
npm install

# 3. (Optional) GitHub token to increase rate-limit
cp .env.example .env                # then edit

# 4. Run dev server
npm run dev
```

`VITE_GH_TOKEN` is **optional** – provide a GitHub PAT if you hit the unauthenticated rate limit.

## Environment Variables (`.env`)

```
VITE_GH_TOKEN=ghp_xxxxxxxxx          # optional – increases GitHub rate limit
RESEND_API_KEY=re_XXXXXXXXXXXX       # for contact form
```

## Build & Preview

```bash
npm run build   # output to dist/
npm run preview # serve production build locally
```

## Deploy to Vercel

1. Push your fork to GitHub
2. Log in to https://vercel.com and click **"Add New → Project"**
3. Select the repository, keep default **Framework Preset → Vite**
4. Add environment variables (`VITE_GH_TOKEN`, `RESEND_API_KEY`)
5. Click **Deploy** – Vercel will build and provide a public URL

Every push to `main` triggers an automatic redeploy. Preview URLs are generated for pull requests.

---