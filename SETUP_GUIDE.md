# TurnedKey Properties - Complete Setup Guide

## 🌐 How to View the Site

### Option 1: View Locally with Python Server (Easiest)
```bash
cd /workspace/dist
python3 -m http.server 8000
```
Then open: `http://localhost:8000`

### Option 2: View Locally with Node/npx
```bash
cd /workspace/dist
npx serve .
```

### Option 3: Open HTML Directly
Simply open `/workspace/dist/index.html` in your browser
(Note: Some features may not work without a server)

---

## 📋 Information Needed for Complete Setup

Please provide the following information for each service:

---

### 1️⃣ GITHUB SETUP

**What I need:**
- [ ] GitHub username/organization for the new repo
- [ ] Repository name preference (e.g., "turnedkey-website")
- [ ] Should it be public or private?
- [ ] Do you want GitHub Actions for auto-deployment?

**Optional:**
- GitHub Personal Access Token (if you want me to create the repo)

---

### 2️⃣ LEAD FORM EMAILS

**Choose your email service:**

#### Option A: Resend (Recommended - Modern, Developer-Friendly)
- [ ] Resend API Key
- [ ] Verified domain (turnedkey.com) or use onboarding@resend.dev
- [ ] Email address to receive leads (e.g., leads@turnedkey.com)
- [ ] Optional: CC email addresses

#### Option B: SendGrid
- [ ] SendGrid API Key
- [ ] Verified sender email
- [ ] Recipient email for leads

#### Option C: AWS SES
- [ ] AWS Access Key ID
- [ ] AWS Secret Access Key
- [ ] AWS Region
- [ ] Verified email address

#### Option D: Mailgun
- [ ] Mailgun API Key
- [ ] Mailgun Domain
- [ ] Recipient email

**Current Setup:**
- Lead forms currently point to `/api/leads` endpoint
- Need to set up Cloudflare Pages Function or external API

---

### 3️⃣ CLOUDFLARE PAGES HOSTING

**What I need:**

**Account Info:**
- [ ] Cloudflare account email
- [ ] Cloudflare API Token (with Pages edit permissions)
- [ ] Cloudflare Account ID

**To get your Cloudflare API Token:**
1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use "Edit Cloudflare Pages" template
4. Copy the token

**To get your Account ID:**
1. Go to Cloudflare Dashboard
2. Select your account
3. Find "Account ID" in the right sidebar

**Project Settings:**
- [ ] Project name (e.g., "turnedkey-properties")
- [ ] Production branch (usually "main")
- [ ] Build command: (none needed - static site)
- [ ] Build output directory: `dist`

---

### 4️⃣ DOMAIN SETUP (turnedkey.com)

**What I need:**

**Option A: Domain registered with Cloudflare**
- [ ] Confirm domain is already in your Cloudflare account
- [ ] I'll configure DNS automatically

**Option B: Domain registered elsewhere (GoDaddy, Namecheap, etc.)**
- [ ] Domain registrar name
- [ ] Access to DNS settings
- [ ] You'll need to update nameservers to Cloudflare:
  ```
  celine.ns.cloudflare.com
  phil.ns.cloudflare.com
  ```

**Domain Status:**
- [ ] Is turnedkey.com already registered?
- [ ] Is it in your Cloudflare account?
- [ ] Do you need to purchase it?

---

### 5️⃣ GOOGLE ANALYTICS & TAG MANAGER

**What I need:**

**Google Analytics:**
- [ ] Google Analytics Property ID (replace G-TURNEDKEY123)
- [ ] Or should I create a new GA4 property?

**Google Tag Manager:**
- [ ] GTM Container ID (replace GTM-TURNEDKEY1)
- [ ] Or should I create a new container?

**To create new ones:**
1. Google Analytics: https://analytics.google.com/
2. Google Tag Manager: https://tagmanager.google.com/

---

### 6️⃣ BUSINESS INFORMATION

**Update these placeholders:**

- [ ] **Phone Number**: Currently "(888) 555-KEYS"
  - Real phone: _______________
  
- [ ] **Email Address**: Currently "hello@turnedkey.com"
  - Confirm or change: _______________
  
- [ ] **Business Name**: Currently "TurnedKey Properties"
  - Confirm or change: _______________
  
- [ ] **Service Areas**: Currently "Nationwide"
  - Confirm or specify states: _______________

- [ ] **Hours**: Currently 7am-9pm, 7 days/week
  - Confirm or change: _______________

---

## 🚀 DEPLOYMENT STEPS (What I'll Do)

Once you provide the information above, I will:

### Step 1: GitHub Repository
- Create new repository for TurnedKey
- Push all code
- Set up branch protection (optional)
- Configure GitHub Actions for auto-deploy (optional)

### Step 2: Lead Form Email Integration
- Create Cloudflare Pages Function at `/functions/api/leads.js`
- Integrate with your chosen email service (Resend/SendGrid/etc)
- Add environment variables for API keys
- Test lead submission

### Step 3: Cloudflare Pages Deployment
- Connect GitHub repo to Cloudflare Pages
- Configure build settings
- Deploy to production
- Set up automatic deployments on git push

### Step 4: Domain Configuration
- Add turnedkey.com to Cloudflare Pages project
- Configure DNS records:
  - A/AAAA records for root domain
  - CNAME for www subdomain
  - MX records for email (if needed)
  - TXT records for email verification
- Set up SSL certificate (automatic with Cloudflare)
- Enable HTTPS redirect

### Step 5: Analytics Setup
- Update Google Analytics ID
- Update Google Tag Manager ID
- Configure tracking events
- Test analytics tracking

### Step 6: Final Configuration
- Update all placeholder values
- Test lead form submissions
- Verify email delivery
- Check mobile responsiveness
- Test all pages and links
- Run SEO validation

---

## 📝 QUICK START FORM

**Copy and fill this out:**

```
GITHUB:
- Username/Org: _______________
- Repo name: _______________
- Public/Private: _______________

CLOUDFLARE:
- Account Email: _______________
- API Token: _______________
- Account ID: _______________

DOMAIN:
- Domain status: [registered/need to register]
- In Cloudflare? [yes/no]
- Registrar: _______________

EMAIL SERVICE:
- Provider: [Resend/SendGrid/SES/Mailgun]
- API Key: _______________
- Send to email: _______________

GOOGLE:
- Create new GA4? [yes/no]
- If no, Property ID: _______________
- Create new GTM? [yes/no]
- If no, Container ID: _______________

BUSINESS:
- Phone: _______________
- Email: _______________
- Confirm nationwide service: [yes/no]
```

---

## 🔒 SECURITY NOTES

- All API keys will be stored as Cloudflare environment variables
- Never commit API keys to GitHub
- SSL/TLS will be automatic via Cloudflare
- Email API keys should have minimal permissions

---

## ⏱️ ESTIMATED SETUP TIME

- GitHub setup: 5 minutes
- Email integration: 15 minutes
- Cloudflare deployment: 10 minutes
- Domain configuration: 10-30 minutes
- Testing: 15 minutes

**Total: ~1 hour** (assuming all credentials are ready)

---

## 🆘 HELP & SUPPORT

If you don't have accounts for any of these services:
1. I can guide you through creating them
2. Some offer free tiers (Cloudflare Pages, Resend)
3. I can suggest alternatives

Let me know what you need help with!
