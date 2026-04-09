# Deployment Guide

This guide walks through how to run the site locally, deploy via GitHub Pages, and optionally set up Cloudflare for a custom domain with CDN/SSL.

---

## Table of Contents

1. [Running Locally](#running-locally)
2. [Deploy with GitHub Pages](#deploy-with-github-pages)
3. [Deploy with Cloudflare Pages](#deploy-with-cloudflare-pages)
4. [Custom Domain Setup](#custom-domain-setup)

---

## Running Locally

### Prerequisites

- **Node.js** (v18 or later) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** — [Download here](https://git-scm.com/)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kellybertozzi/kellybertozzi.github.io.git
   cd kellybertozzi.github.io
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Open your browser** and go to [http://localhost:3000](http://localhost:3000)

The site will automatically reload when you save changes to any file.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build/` folder with the compiled site. You can test it locally with:

```bash
npx serve -s build
```

---

## Deploy with GitHub Pages

GitHub Pages hosts your site for free at `https://<username>.github.io`.

### Initial Setup (One Time)

1. **Make sure `package.json` has the correct homepage:**

   ```json
   "homepage": "https://kellybertozzi.github.io"
   ```

2. **Make sure `gh-pages` is installed** (it should already be):

   ```bash
   npm install --save-dev gh-pages
   ```

3. **Verify these scripts exist in `package.json`:**

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

### Deploying

Every time you want to publish changes:

```bash
npm run deploy
```

That's it! This command will:
- Build the production site (`npm run build`)
- Push the `build/` folder to the `gh-pages` branch
- GitHub Pages will automatically serve it

### Verify It's Live

1. Go to your repo on GitHub: **Settings > Pages**
2. Under "Source", make sure it says **Deploy from a branch** with `gh-pages` / `/ (root)`
3. Your site should be live at `https://kellybertozzi.github.io`

### After Making Changes

The workflow is:

```bash
# 1. Make your code changes
# 2. Test locally
npm start

# 3. When happy, deploy
npm run deploy

# 4. (Optional) Commit your source code too
git add -A
git commit -m "Describe your changes"
git push origin main
```

> **Important:** `npm run deploy` only pushes the built site. Always also push your source code to `main` so you don't lose your work.

---

## Deploy with Cloudflare Pages

Cloudflare Pages offers free hosting with automatic builds, a global CDN, and free SSL. This is a great alternative to GitHub Pages, especially if you want a custom domain.

### Step 1: Create a Cloudflare Account

1. Go to [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Sign up for a free account
3. You do **not** need to add a domain to use Cloudflare Pages

### Step 2: Connect Your GitHub Repo

1. In the Cloudflare dashboard, go to **Workers & Pages** in the left sidebar
2. Click **Create** > **Pages** > **Connect to Git**
3. Sign in with GitHub and authorize Cloudflare
4. Select the `kellybertozzi/kellybertozzi.github.io` repository

### Step 3: Configure Build Settings

Set these values:

| Setting              | Value           |
|----------------------|-----------------|
| Production branch    | `main`          |
| Build command        | `npm run build` |
| Build output directory | `build`       |

Leave everything else as default.

### Step 4: Deploy

1. Click **Save and Deploy**
2. Cloudflare will build and deploy your site (takes 1-2 minutes)
3. You'll get a free URL like `kellybertozzi-github-io.pages.dev`

### Automatic Deployments

After the initial setup, every time you push to `main`, Cloudflare will automatically rebuild and deploy. No need to run `npm run deploy` manually.

### Preview Deployments

Cloudflare also creates **preview URLs** for every pull request. When someone opens a PR, Cloudflare builds a preview of those changes at a unique URL so you can review before merging.

---

## Custom Domain Setup

### Option A: Custom Domain with GitHub Pages

1. Go to your repo on GitHub: **Settings > Pages**
2. Under **Custom domain**, enter your domain (e.g., `kellyannebertozzi.com`)
3. Click **Save**
4. At your domain registrar, add these DNS records:

   | Type  | Name | Value                        |
   |-------|------|------------------------------|
   | A     | @    | 185.199.108.153              |
   | A     | @    | 185.199.109.153              |
   | A     | @    | 185.199.110.153              |
   | A     | @    | 185.199.111.153              |
   | CNAME | www  | kellybertozzi.github.io      |

5. Check **Enforce HTTPS** once DNS propagates (can take up to 24 hours)

### Option B: Custom Domain with Cloudflare Pages

1. In Cloudflare dashboard, go to **Workers & Pages** > your project > **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `kellyannebertozzi.com`)
4. If your domain is already on Cloudflare DNS, the records are added automatically
5. If not, Cloudflare will show you the DNS records to add at your registrar

Cloudflare automatically provides:
- Free SSL certificate
- Global CDN (your site loads fast worldwide)
- DDoS protection
- Automatic HTTPS

---

## Quick Reference

| Task                  | Command              |
|-----------------------|----------------------|
| Install dependencies  | `npm install`        |
| Run locally           | `npm start`          |
| Build for production  | `npm run build`      |
| Deploy to GitHub Pages| `npm run deploy`     |
| Push source code      | `git push origin main` |

---

## Troubleshooting

### "npm: command not found"

Node.js isn't installed. Download it from [nodejs.org](https://nodejs.org/).

### Site shows blank page after deploy

Make sure `"homepage"` in `package.json` matches your actual URL exactly.

### Changes don't show up after deploy

1. Hard refresh your browser: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
2. Wait a few minutes — GitHub Pages can take 2-5 minutes to update
3. Make sure you ran `npm run deploy`, not just `git push`

### Build fails

```bash
rm -rf node_modules
npm install
npm run build
```

If it still fails, check the error message — it usually points to the exact file and line.
