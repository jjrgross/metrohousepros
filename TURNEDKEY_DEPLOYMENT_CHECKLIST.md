# TurnedKey Properties - Deployment Checklist

## 📋 Quick Information Collection

Please provide the following to complete the setup:

---

## 1. 🔑 CLOUDFLARE SETUP

**I need from you:**
```
Cloudflare Account Email: _____________________
Cloudflare API Token: _____________________
Cloudflare Account ID: _____________________
```

**How to get these:**
- **API Token**: https://dash.cloudflare.com/profile/api-tokens
  - Click "Create Token" → Use "Edit Cloudflare Pages" template
- **Account ID**: Go to Cloudflare dashboard → Right sidebar shows Account ID

---

## 2. 📧 EMAIL SETUP (Resend - Already have this working!)

**I need from you:**
```
Resend API Key: _____________________
Email to receive leads: _____________________
Additional CC emails (optional): _____________________
```

**How to get Resend API Key:**
1. Go to https://resend.com/ (create account if needed - it's free!)
2. Click "API Keys" in sidebar
3. Click "Create API Key"
4. Name it "TurnedKey Website"
5. Permission: "Sending access"
6. Copy the key (starts with `re_`)

**Verify domain with Resend:**
1. In Resend dashboard → "Domains"
2. Add "turnedkey.com"
3. Add the DNS records Resend shows you (I'll help with this)

---

## 3. 🌐 DOMAIN STATUS

**Tell me:**
```
Is turnedkey.com already registered? [YES / NO / NEED TO BUY]

If YES:
  - Current registrar: _____________________
  - Is it in Cloudflare already? [YES / NO]
  - Do you have access to DNS settings? [YES / NO]

If NO/NEED TO BUY:
  - Want to register through Cloudflare? [YES / NO]
  - Approximate budget: _____________________
```

---

## 4. 📊 GOOGLE ANALYTICS

**Choose one:**

**Option A: Create New (Recommended)**
```
☐ YES, create new Google Analytics 4 property for TurnedKey
☐ YES, create new Google Tag Manager container for TurnedKey
```

**Option B: Use Existing**
```
Google Analytics ID: G-_____________________
Google Tag Manager ID: GTM-_____________________
```

**I can create new ones for you if you provide:**
- Google account email you want to use

---

## 5. 📞 BUSINESS INFORMATION

**Update these placeholders:**

```
Business Name: [TurnedKey Properties] ✓ or change to: _____________________

Phone Number: _____________________
(Currently placeholder: (888) 555-KEYS)

Primary Email: _____________________
(Currently: hello@turnedkey.com)

Service Areas: [Nationwide USA] ✓ or specify states: _____________________

Business Hours: [7am-9pm, 7 days/week] ✓ or change to: _____________________
```

---

## 6. 🎯 GITHUB REPOSITORY

**Tell me:**
```
Create new repo for TurnedKey? [YES / NO]

If YES:
  - Your GitHub username/org: _____________________
  - Repo name preference: [turnedkey-website] or _____________________
  - Make it private? [YES / NO]

If NO:
  - Keep it in metrohousepros repo? [YES / NO]
```

---

## ⚡ WHAT HAPPENS NEXT

Once you provide the above information, I will:

### Phase 1: Code Updates (5 minutes)
- ✅ Update phone number from placeholder
- ✅ Update email addresses
- ✅ Configure Resend email integration for TurnedKey
- ✅ Update Google Analytics IDs
- ✅ Create lead form API function

### Phase 2: Cloudflare Deployment (10 minutes)
- ✅ Create Cloudflare Pages project for TurnedKey
- ✅ Deploy the site
- ✅ Add Resend API key to environment variables
- ✅ Set up KV namespace for lead storage
- ✅ Test lead form functionality

### Phase 3: Domain Configuration (15 minutes)
- ✅ Add turnedkey.com to Cloudflare
- ✅ Configure DNS records
- ✅ Add Resend email verification records
- ✅ Set up SSL certificate (automatic)
- ✅ Enable HTTPS redirect
- ✅ Configure www redirect

### Phase 4: Testing & Launch (10 minutes)
- ✅ Test lead form submission
- ✅ Verify email delivery
- ✅ Check mobile responsiveness
- ✅ Test all page links
- ✅ Verify analytics tracking
- ✅ SEO validation

**Total time: ~40 minutes** (once I have all info)

---

## 💰 COST BREAKDOWN

**Free Services:**
- Cloudflare Pages: FREE (unlimited sites)
- Cloudflare DNS: FREE
- Cloudflare SSL: FREE
- Resend Email: FREE (up to 3,000 emails/month)
- Google Analytics: FREE
- Google Tag Manager: FREE
- GitHub (public repo): FREE

**Paid Items:**
- Domain (turnedkey.com): ~$12-15/year (if not already owned)
- GitHub (private repo): FREE with personal account
- Resend (if >3k emails/month): $20/month

**Estimated Monthly Cost: $0-20** (depending on email volume)

---

## 🚀 VIEW THE SITE NOW

The TurnedKey site is currently running locally:

**If you have access to the terminal:**
- Open browser to: `http://localhost:8080`

**To view files directly:**
- Open: `/workspace/dist/index.html` in any browser

---

## 📝 SIMPLIFIED FORM - COPY & FILL OUT

```
==========================================
TURNEDKEY SETUP - FILL OUT & SEND BACK
==========================================

CLOUDFLARE:
Email: _____________________
API Token: _____________________
Account ID: _____________________

RESEND:
API Key: _____________________
Lead emails go to: _____________________

DOMAIN:
turnedkey.com status: [registered / need to buy]
In Cloudflare? [yes / no]

BUSINESS:
Phone: _____________________
Email: _____________________

GOOGLE:
Create new GA4/GTM? [yes / no]

==========================================
```

---

## 🆘 QUESTIONS?

**Don't have Cloudflare account?**
- I'll guide you through creating one (it's free!)

**Don't have Resend account?**
- I'll help you set it up (free tier is generous!)

**Don't own turnedkey.com yet?**
- I can help you register it through Cloudflare

**Not sure about any step?**
- Just ask! I'm here to help with everything

---

## 📞 READY TO START?

Send me the information above and I'll have TurnedKey live in under an hour! 🚀
