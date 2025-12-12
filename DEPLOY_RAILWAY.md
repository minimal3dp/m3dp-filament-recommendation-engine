# FDM Filament Recommendation Engine - Railway.app Deployment Guide

**Complete step-by-step instructions for deploying to Railway.app**

---

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Railway.app Account Setup](#railwayapp-account-setup)
3. [Deployment via GitHub Integration](#deployment-via-github-integration)
4. [Custom Domain Configuration](#custom-domain-configuration)
5. [Verification & Testing](#verification--testing)
6. [Troubleshooting](#troubleshooting)
7. [Post-Deployment Maintenance](#post-deployment-maintenance)

---

## Pre-Deployment Checklist

Before deploying, ensure the following:

- [ ] **GitHub Account**: Logged in and repository is accessible
- [ ] **Railway.app Account**: Created and verified (sign up at https://railway.app)
- [ ] **Git Repository**: All changes committed to `main` branch
- [ ] **App Version**: Update version if needed (currently v1.5.0)
- [ ] **Environment**: No uncommitted changes (`git status` shows clean)
- [ ] **Testing**: Verified app loads correctly locally (`index.html` in browser)

### Quick Pre-Flight Check

```bash
# Ensure clean working directory
git status

# Verify main branch is up to date
git log --oneline -1

# Check for any uncommitted changes
git diff --stat
```

---

## Railway.app Account Setup

### Step 1: Create/Login to Railway.app

1. Visit https://railway.app
2. Click **"Sign Up"** (or "Sign In" if you already have an account)
3. Choose **"Continue with GitHub"** for seamless integration
4. Authorize Railway.app to access your GitHub account
5. Click **"Create Account"** to confirm

### Step 2: Create a New Railway Project

1. In the Railway dashboard, click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. You'll be prompted to authorize GitHub if not already done

---

## Deployment via GitHub Integration

### Step 3: Select Repository

1. After authorizing GitHub, you'll see a list of your repositories
2. Search for **`m3dp-filament-recommendation-engine`**
3. Click the repository to select it
4. Click **"Deploy Now"**

### Step 4: Configure Deployment Settings

Railway will auto-detect this is a static site. Configure as follows:

#### Build Configuration
- **Framework Detection**: Railway will detect it as a **Static Site**
- **Build Command**: Leave empty (not needed for static sites)
- **Start Command**: Leave empty (Railway serves static files)
- **Install Command**: Leave empty

#### Environment Variables
For this static site, no environment variables are required. However, you can add:

```
ENVIRONMENT=production
```

(Optional - not used by the app but useful for tracking)

### Step 5: Deploy

1. Click **"Deploy"**
2. Railway will:
   - Fetch the repository
   - Build the deployment
   - Deploy the site to a temporary Railway domain
3. Monitor progress in the deployment logs
4. Once complete, you'll see a green checkmark

---

## Custom Domain Configuration

### Step 6: Add Custom Domain (if using subdomain)

If you plan to use `filament.minimal3dp.com`:

#### Option A: Railway Custom Domain

1. In your Railway project dashboard, find the **"Settings"** tab
2. Scroll to **"Domains"** section
3. Click **"+ Add Domain"**
4. Enter your custom domain: `filament.minimal3dp.com`
5. Railway will provide DNS instructions

#### Option B: Point Existing Domain

If you already own `minimal3dp.com`:

1. Go to your DNS provider (GoDaddy, Namecheap, CloudFlare, etc.)
2. Create a **CNAME record**:
   - **Name**: `filament`
   - **Type**: `CNAME`
   - **Value**: `<your-railway-domain>` (Railway will provide this)
   - **TTL**: 3600 (default)

3. Wait for DNS propagation (typically 5-30 minutes)
4. Verify domain is working by visiting `https://filament.minimal3dp.com`

#### Option C: Use Railway's Default Domain

If you don't need a custom domain, Railway provides:
- **Format**: `<project-name>-production.<random-id>.railway.app`
- Use this for testing before setting up custom domain

---

## Verification & Testing

### Step 7: Verify Deployment

#### Check Railway Dashboard
1. Navigate to your project in Railway
2. Click **"Deployments"** tab
3. Verify the latest deployment shows **"Success"** (green checkmark)
4. Note the deployment URL (either Railway default or your custom domain)

#### Test the Application

1. **Open the deployment URL in browser**
   ```
   https://filament.minimal3dp.com  (or Railway default URL)
   ```

2. **Verify Core Functionality**
   - [ ] Page loads without errors
   - [ ] Header displays correctly with v1.5.0 version
   - [ ] Filter panel appears on left side
   - [ ] Material cards render in results section
   - [ ] Material count displays (should show 29 materials)

3. **Test Interactive Features**
   - [ ] Click a material card → modal opens
   - [ ] Modal displays all sections:
     - Print Settings (with new bed surface field)
     - Mechanical Properties
     - Material Characteristics
     - Annealing Guide (if applicable)
   - [ ] Close modal → works correctly
   - [ ] Filters respond in real-time
   - [ ] Search functionality works

4. **Test Exports** (in modal)
   - [ ] Cura export button works
   - [ ] PrusaSlicer export button works
   - [ ] OrcaSlicer export button works
   - [ ] Simplify3D export button works

5. **Check Footer**
   - [ ] Links work correctly
   - [ ] Railway referral link present and active
   - [ ] Version shows 1.5.0

6. **Browser Console Check**
   - Open DevTools (F12)
   - Check **"Console"** tab
   - Verify no red errors appear

### Step 8: Performance & Metrics

#### Check PageSpeed Insights
1. Visit https://pagespeed.web.dev/
2. Enter your deployment URL
3. Verify:
   - **Performance**: >90 score expected
   - **Core Web Vitals**: All green
   - **Mobile-Friendly**: Yes

#### Monitor Railway Metrics
1. In Railway dashboard, click **"Monitoring"** tab
2. Check:
   - **CPU Usage**: Should be minimal for static site
   - **Memory**: Should remain constant
   - **Request Count**: Monitor for traffic patterns
   - **Latency**: Should be <100ms

---

## Troubleshooting

### Issue: Deployment Failed

**Symptom**: Red X mark on deployment

**Solutions**:
1. Check deployment logs:
   - Click failing deployment → "View Logs"
   - Look for error messages
2. Common causes:
   - Invalid `railway.json` (delete if present)
   - Missing files (ensure `index.html` exists in root)
   - Path issues (verify file references are correct)

**Fix**:
```bash
# Ensure index.html is in repository root
ls -la index.html

# Commit any missing files
git add index.html
git commit -m "Ensure index.html in repo root"
git push origin main
```

### Issue: Custom Domain Not Resolving

**Symptom**: Domain shows connection timeout or error

**Solutions**:
1. Verify CNAME record is set correctly:
   ```bash
   nslookup filament.minimal3dp.com
   ```
   Should resolve to Railway's DNS

2. Check DNS propagation:
   - Visit https://www.whatsmydns.net
   - Enter your domain
   - Verify CNAME propagated globally

3. Wait for TTL expiration (up to 24 hours)

4. In Railway dashboard, verify:
   - Domain is listed under "Domains"
   - Status shows "Active"

### Issue: Assets Not Loading (404 errors)

**Symptom**: CSS/Images not loading, page looks broken

**Causes**: Path issues in HTML file

**Fix**:
1. Check file paths in `index.html`:
   - All paths should be relative (no leading `/`)
   - Example: `src="scripts/script.js"` ✅
   - Not: `src="/scripts/script.js"` ❌

2. Verify static files are committed:
   ```bash
   git ls-files | grep -E "\.(css|js|png|jpg)$"
   ```

3. Deploy again:
   ```bash
   git push origin main  # This triggers automatic redeploy
   ```

### Issue: Slow Loading or Timeouts

**Symptom**: Page takes >5 seconds to load, or connection times out

**Solutions**:
1. Check Railway service status:
   - Visit https://status.railway.app

2. Verify CDN availability:
   - The app uses Tailwind CSS via CDN
   - Verify CDN is accessible from your location

3. Clear browser cache:
   - Press Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
   - Clear all cache and reload

---

## Post-Deployment Maintenance

### Step 9: CI/CD Pipeline Setup

#### Enable Automatic Deployments

Railway automatically deploys when you push to `main`. To verify:

1. Go to Railway project **"Settings"**
2. Click **"Repository"**
3. Verify:
   - Branch: `main`
   - **"Deploy on push"**: Enabled

Now whenever you push to main:
```bash
git push origin main  # Automatically triggers deployment
```

### Step 10: Monitoring & Analytics

#### Enable Railway Analytics
1. In Railway dashboard, **"Settings"** → **"Monitoring"**
2. Enable **"Enable Service Analytics"**
3. This provides insights into:
   - Request volume
   - Response times
   - Error rates
   - CPU/Memory usage

#### Google Analytics (Optional)
To track user behavior:

1. Create/Login to Google Analytics
2. Create new property for your domain
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to `index.html` in `<head>` section:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Step 11: Update Documentation

Update relevant files after successful deployment:

#### README.md
Add deployment info:
```markdown
## Deployment

- **Platform**: [Railway.app](https://railway.com?referralCode=7BPriG)
- **URL**: https://filament.minimal3dp.com
- **Branch**: `main` (auto-deploys on push)
```

#### .github/DEPLOYMENT_STATUS.md (Optional)
Create status file:
```markdown
# Deployment Status

| Aspect | Status | Last Updated |
|--------|--------|--------------|
| Production | ✅ Live | [DATE] |
| Platform | Railway.app | [DATE] |
| Domain | filament.minimal3dp.com | [DATE] |
| SSL/TLS | ✅ Active | [DATE] |
| Uptime | 99.9% | [WEEK] |
```

---

## Quick Reference Commands

### Deployments

```bash
# Push changes (triggers auto-deploy)
git push origin main

# View deployment history
git log --oneline --decorate

# Rollback to previous version (if needed)
# In Railway dashboard: go to Deployments → select previous → click "Redeploy"
```

### Monitoring

```bash
# Check git status before pushing
git status

# Verify latest commit
git log -1 --stat

# View remote branches
git branch -r
```

---

## Success Checklist

After following this guide, verify:

- [x] Railway project created
- [x] GitHub repository connected
- [x] Initial deployment successful
- [x] Custom domain configured (if applicable)
- [x] All tests passing
- [x] Performance metrics acceptable
- [x] Documentation updated
- [x] Team notified of new deployment URL
- [x] Railway referral link in footer active

---

## Additional Resources

- **Railway Docs**: https://docs.railway.app
- **Railway CLI**: https://docs.railway.app/cli/install
- **Static Site Deployment**: https://docs.railway.app/guides/static-sites
- **Custom Domains**: https://docs.railway.app/guides/custom-domains

---

## Support

If you encounter issues:

1. **Check Railway Status**: https://status.railway.app
2. **Railway Community**: https://discord.gg/railway
3. **GitHub Issues**: Post in repository issues
4. **Railway Support**: https://railway.app/support

---

**Last Updated**: December 12, 2025  
**Version**: 1.5.0  
**Platform**: Railway.app  
**Status**: Production Ready ✅
