# Vercel Deployment Guide: filament.minimal3dp.com

## Pre-Deployment Checklist

### ✅ Production Readiness Review

**Version 1.4.0 Status:**
- ✅ All v1.4 features implemented (annealing support, dual compare, modal guide, toggle)
- ✅ Documentation complete (README, CHANGELOG, VERSION_1.4_SUMMARY.md)
- ✅ Version strings aligned (1.4.0 across index.html header/footer)
- ✅ Vercel infrastructure configured (vercel.json, deploy script)
- ✅ Git release tagged (v1.4.0)
- ⚠️ **Minor Issue:** Footer class typo in `no-results` div (`class_A` should be `class`)

**Known Limitations (Not Blockers):**
- Static data embedded in `index.html` (csvData + materialsDetailData)
- No backend/database (intentional for v1.x—zero-dependency design)
- Annealing presets limited to 5 materials (HTPLA, PLA, PETG, Nylon PA6, PC)
- No user authentication or data persistence beyond localStorage

**Recommendation:** ✅ **READY FOR PRODUCTION**  
The app is functional, well-documented, and suitable for public use. Deploy to subdomain now; iterate based on user feedback.

---

## Step 1: Verify Vercel CLI Installation

You already have Vercel CLI installed (v48.10.2). Verify:

```bash
vercel --version
```

Expected output: `Vercel CLI 48.10.2` (or newer)

---

## Step 2: Authenticate with Vercel (If Not Already Done)

```bash
vercel login
```

- Choose login method (GitHub, GitLab, Bitbucket, Email)
- Recommended: **GitHub** (seamless integration with your repo)
- Follow browser authentication flow
- Verify: `vercel whoami` should show your Vercel account email

---

## Step 3: Link Local Project to Vercel

From the project root directory:

```bash
cd /Users/wilsonm/development/m3dp-filament-recommendation-engine
vercel link
```

**Interactive Prompts:**

1. **Set up and deploy?** → `Y` (yes)
2. **Which scope?** → Select your Vercel account (e.g., `minimal3dp`)
3. **Link to existing project?** → `N` (creating new project)
4. **What's your project's name?** → `m3dp-filament-recommendation-engine` (or `filament-tool`)
5. **In which directory is your code located?** → `./` (current directory)

Vercel will create `.vercel/` folder with project metadata.

---

## Step 4: Configure Custom Domain (filament.minimal3dp.com)

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `m3dp-filament-recommendation-engine`
3. Navigate to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter: `filament.minimal3dp.com`
6. Vercel will provide DNS configuration instructions:

   **Add CNAME Record in Your DNS Provider:**
   - **Type:** `CNAME`
   - **Name:** `filament` (subdomain)
   - **Value:** `cname.vercel-dns.com`
   - **TTL:** `3600` (or Auto)

7. Wait for DNS propagation (1-60 minutes)
8. Vercel will auto-provision SSL certificate (Let's Encrypt)

### Option B: Via Vercel CLI

```bash
vercel domains add filament.minimal3dp.com
```

Follow CLI prompts to verify domain ownership.

---

## Step 5: Deploy to Production

### Method 1: Deploy via VS Code Task (Keyboard Shortcut)

**Production Deployment:**
1. Press `Cmd+Shift+P` (Command Palette)
2. Type: `Tasks: Run Task`
3. Select: `Vercel: Deploy Production`
4. Confirm deployment

**Or use Status Bar button:**
- Click `☁️ Vercel Prod` button in VS Code status bar (bottom right)

---

### Method 2: Deploy via Shell Script

```bash
./scripts/deploy_vercel.sh --prod
```

This executes:
```bash
vercel build
vercel deploy --prod --prebuilt
```

---

### Method 3: Manual Vercel CLI

```bash
vercel --prod
```

- Vercel will build and deploy to production
- Assigns deployment to `filament.minimal3dp.com` (if domain configured)
- Outputs deployment URL: `https://filament.minimal3dp.com`

---

## Step 6: Verify Deployment

1. **Check Deployment URL:**
   ```bash
   open https://filament.minimal3dp.com
   ```

2. **Test Core Functionality:**
   - ✅ Filters respond (checkboxes, sliders, search)
   - ✅ Material cards render correctly (40 materials)
   - ✅ Modal opens with detailed material info
   - ✅ Annealing toggle works (show/hide annealed properties)
   - ✅ Export buttons download slicer profiles (Cura, Prusa, Orca, Simplify3D)
   - ✅ Nozzle filter hides abrasive materials for brass/stainless
   - ✅ Reset button clears all filters

3. **Check Analytics:**
   - Verify Google Analytics 4 tracking (if configured)
   - Test custom events: `material_selected`, `filter_applied`, `profile_exported`

4. **Performance Check:**
   - Run [PageSpeed Insights](https://pagespeed.web.dev/) on `https://filament.minimal3dp.com`
   - Target: 90+ score for Performance, Best Practices, SEO
   - Confirm cache headers from `vercel.json` applied (check Network tab)

---

## Step 7: Set Up Continuous Deployment (GitHub Integration)

### Enable Auto-Deploy on Push to Main

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select project: `m3dp-filament-recommendation-engine`
3. Navigate to **Settings** → **Git**
4. Connect GitHub repository: `minimal3dp/m3dp-filament-recommendation-engine`
5. Configure auto-deploy:
   - **Production Branch:** `main`
   - **Deploy on Push:** ✅ Enabled
   - **Auto-Cancel Previous Deploys:** ✅ Enabled

**Result:** Every push to `main` triggers automatic production deployment.

---

## Step 8: Configure Environment Variables (If Needed)

Currently, your app has no backend or API keys. If you add GA4 or Amazon Associates in the future:

1. **Vercel Dashboard** → **Settings** → **Environment Variables**
2. Add variables:
   - `GA4_MEASUREMENT_ID` → `G-XXXXXXXXXX`
   - `AMAZON_AFFILIATE_TAG` → `mwf064-20`
3. Redeploy to apply changes

---

## Step 9: Post-Deployment Tasks

### Update GitHub Release Notes

Add deployment URL to v1.4.0 release notes:

```bash
gh release edit v1.4.0 --notes "Production deployment: https://filament.minimal3dp.com"
```

### Submit to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `filament.minimal3dp.com`
3. Verify ownership (DNS TXT record or HTML file upload)
4. Submit sitemap (if you generate one in the future)

### Add to minimal3dp.com Navigation

If you have Hugo site at `minimal3dp.com`:

1. Edit `hugo-stub/filament.md` with correct production URL:
   ```markdown
   canonicalURL: "https://filament.minimal3dp.com"
   ```
2. Deploy Hugo site with link to filament tool

---

## Troubleshooting

### Issue: Domain Not Resolving

**Symptoms:** `filament.minimal3dp.com` shows "This domain is not configured"

**Fix:**
1. Verify CNAME record in DNS provider:
   ```bash
   dig filament.minimal3dp.com CNAME
   ```
   Expected: `cname.vercel-dns.com`
2. Wait for DNS propagation (check: https://dnschecker.org/)
3. Re-add domain in Vercel dashboard

---

### Issue: Deployment Fails

**Symptoms:** `vercel --prod` returns error

**Fix:**
1. Check `vercel.json` syntax:
   ```bash
   cat vercel.json | jq .
   ```
2. Verify `index.html` exists in project root
3. Run build preview first:
   ```bash
   vercel build
   vercel deploy --prebuilt
   ```
4. Check deployment logs in Vercel dashboard

---

### Issue: Old Content Cached

**Symptoms:** Users see outdated version after deployment

**Fix:**
1. Verify cache headers in `vercel.json`:
   - `index.html` → `no-cache`
   - Assets → `immutable, max-age=31536000`
2. Force-refresh browser: `Cmd+Shift+R` (macOS) / `Ctrl+Shift+R` (Windows)
3. Purge Vercel cache:
   ```bash
   vercel --prod --force
   ```

---

## Quick Reference: Deployment Commands

| Task | Command |
|------|---------|
| **Preview Deploy** | `vercel` or `./scripts/deploy_vercel.sh` |
| **Production Deploy** | `vercel --prod` or `./scripts/deploy_vercel.sh --prod` |
| **Build Only** | `vercel build` or `./scripts/deploy_vercel.sh --build` |
| **Link Project** | `vercel link` |
| **Check Status** | `vercel ls` |
| **View Logs** | `vercel logs [deployment-url]` |
| **Remove Project** | `vercel remove [project-name]` |

---

## Maintenance & Updates

### Regular Deployment Workflow

1. **Develop locally** → Test changes in browser
2. **Commit to Git** → `git add . && git commit -m "feat: new feature"`
3. **Push to main** → `git push origin main`
4. **Auto-deploy** → Vercel deploys to production automatically
5. **Verify** → Check `https://filament.minimal3dp.com`

### Manual Hotfix Deployment

If auto-deploy disabled or urgent fix needed:

```bash
git add .
git commit -m "fix: critical bug"
git push origin main
vercel --prod  # Force immediate deployment
```

---

## Cost & Limits (Vercel Free Tier)

**Included in Free Tier:**
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Custom domains (unlimited)
- ✅ Auto SSL certificates
- ✅ GitHub integration
- ✅ Edge CDN (global)

**Limits:**
- ⚠️ Serverless function execution: 100 GB-hours/month (not applicable to your static app)
- ⚠️ Build time: 6,000 minutes/month (more than enough)

**Your app is static HTML/JS** → No serverless functions → Should stay within free tier indefinitely.

---

## Next Steps After Deployment

1. **Monitor Analytics**
   - Set up Google Analytics 4 (GA4)
   - Track page views, filter usage, modal opens, profile exports

2. **Gather User Feedback**
   - Add feedback widget (e.g., Hotjar, Tally.so)
   - Create GitHub Discussions for feature requests

3. **SEO Optimization**
   - Submit to Google Search Console
   - Add structured data (Schema.org WebApplication type)
   - Create OG image for social sharing

4. **Content Marketing**
   - Create YouTube tutorial video (link from minimal3dp channel)
   - Write blog post on minimal3dp.com linking to tool
   - Share on Reddit (r/3Dprinting, r/functionalprint)

5. **Iterate Based on Data**
   - Analyze which filters users use most
   - Identify missing materials/properties
   - Add external reference data (Simplify3D, MatterHackers)

---

## Support

**Vercel Documentation:** https://vercel.com/docs  
**Vercel Support:** https://vercel.com/support  
**Project GitHub:** https://github.com/minimal3dp/m3dp-filament-recommendation-engine  
**m3dp Discord:** (Create channel for tool support)

---

**Last Updated:** November 20, 2025  
**Version:** 1.4.0  
**Deployment Target:** https://filament.minimal3dp.com
