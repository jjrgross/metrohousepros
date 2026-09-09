# Switch Nameservers & Deploy - Step by Step

## ✅ Info Updated:
- Phone: (262) 425-5984
- Lead emails: jjrgross@gmail.com, freddyviera915@gmail.com

---

## PART 1: Switch Nameservers (10 minutes)

### Step 1: Add Domain to Cloudflare

1. **Go to Cloudflare Dashboard**
   - https://dash.cloudflare.com/
   - Log in with: jjrgross@gmail.com

2. **Add Site**
   - Click the **"+ Add a site"** button (top right)
   - Enter: **turnedkey.com**
   - Click **"Add site"**

3. **Select Plan**
   - Choose **"Free"** plan
   - Click **"Continue"**

4. **Review DNS Records**
   - Cloudflare will scan your existing GoDaddy DNS
   - Click **"Continue"** (we'll add Resend records in a moment)

5. **Get Cloudflare Nameservers**
   - Cloudflare will show you 2 nameservers, like:
   ```
   celine.ns.cloudflare.com
   phil.ns.cloudflare.com
   ```
   - **COPY THESE!** You'll need them for GoDaddy

---

### Step 2: Update Nameservers at GoDaddy

1. **Go to GoDaddy DNS Settings**
   - https://dcc.godaddy.com/control/portfolio/dns
   - Or: GoDaddy → My Products → DNS → Manage

2. **Find turnedkey.com**
   - Look for your domain in the list
   - Click on it or click **"Manage"**

3. **Change Nameservers**
   - Scroll down to **"Nameservers"** section
   - Click **"Change"** button
   - Select: **"I'll use my own nameservers"** or **"Custom"**
   
4. **Enter Cloudflare Nameservers**
   - Remove the GoDaddy nameservers (ns49, ns50)
   - Add the TWO nameservers from Cloudflare (from Step 1.5)
   - Click **"Save"**

5. **Confirm**
   - GoDaddy will warn you - that's OK!
   - Click **"Continue"** or **"Yes"**

⏱️ **Propagation time: 2-24 hours** (usually 2-4 hours)

---

### Step 3: Add Resend DNS Records in Cloudflare

1. **Back to Cloudflare Dashboard**
   - Go to: https://dash.cloudflare.com/
   - Click on **turnedkey.com**

2. **Go to DNS Settings**
   - Click **"DNS"** in the left sidebar
   - Click **"Records"**

3. **Add These 4 Records:**

**Record 1 - DKIM (from Resend):**
```
Click "+ Add record"
Type: TXT
Name: resend._domainkey
Content: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC6rt6aToSMlCsixGdfnHqDVFxTa15v7dRYYcJiNcArpXi6icJeWhTH6yHFzYhJk94Y7wjqDqtSVfMfmfhmFKhdm3YSclZayaoUZRGMYOFUKIFvbDOt6roW0DbQ2jOiRHEyVvtPZyXxYUX88LcNZEbKJ/Xv1OZ2OOdr+O0abZmrxQIDAQAB
TTL: Auto
Save
```

**Record 2 - SPF (rsend):**
```
Click "+ Add record"
Type: CNAME
Name: rsend
Target: rsend.forge.rmta.net
TTL: Auto
Save
```

**Record 3 - SPF (send):**
```
Click "+ Add record"
Type: CNAME
Name: send
Target: send.forge.rmta.net
TTL: Auto
Save
```

**Record 4 - DMARC:**
```
Click "+ Add record"
Type: TXT
Name: _dmarc
Content: v=DMARC1; p=none;
TTL: Auto
Save
```

---

## PART 2: Deploy to Cloudflare Pages (After DNS is active)

### Step 4: Get Your Cloudflare Credentials

**While waiting for DNS to propagate, get these:**

1. **API Token**
   - Go to: https://dash.cloudflare.com/profile/api-tokens
   - Click **"Create Token"**
   - Use template: **"Edit Cloudflare Pages"**
   - Click **"Continue to summary"** → **"Create Token"**
   - **COPY THE TOKEN** (you only see it once!)

2. **Account ID**
   - Go to: https://dash.cloudflare.com/
   - Click on any domain or the home icon
   - Look at **right sidebar** → find **"Account ID"**
   - Click the copy button

3. **Resend API Key**
   - Go to: https://resend.com/api-keys
   - Click **"Create API Key"**
   - Name: "TurnedKey Website"
   - Permission: "Sending access"
   - Click **"Add"**
   - **COPY THE KEY** (starts with `re_`)

---

### Step 5: I Deploy the Site! 🚀

**Once you provide me with:**
```
Cloudflare API Token: ___________________
Cloudflare Account ID: ___________________
Resend API Key: ___________________
```

**I will automatically:**

1. ✅ Create GitHub repo: `turnedkey-website`
2. ✅ Push all TurnedKey code
3. ✅ Create Cloudflare Pages project
4. ✅ Connect to GitHub for auto-deploy
5. ✅ Add environment variables:
   - `RESEND_API_KEY`
   - `LEADS_KV` namespace
6. ✅ Deploy the site
7. ✅ Connect turnedkey.com domain
8. ✅ Enable SSL (automatic)
9. ✅ Test lead form
10. ✅ Give you the live URL!

**Time estimate: 20-30 minutes**

---

## How Cloudflare Pages Deployment Works

### What is Cloudflare Pages?

Think of it like:
- **GitHub Pages** (hosts your HTML/CSS/JS)
- **+ Serverless Functions** (handles lead form API)
- **+ CDN** (fast globally)
- **+ SSL** (automatic HTTPS)
- **+ Custom Domain** (turnedkey.com)

### The Architecture:

```
Your Site Files (HTML/CSS/JS)
    ↓
GitHub Repository
    ↓ (auto-deploy on push)
Cloudflare Pages
    ↓
turnedkey.com (your domain)
    ↓
Lead Form Submission
    ↓
Cloudflare Function (/functions/api/leads.js)
    ↓
Resend Email API
    ↓
📧 Email to jjrgross@gmail.com + freddyviera915@gmail.com
```

### What You Get:

✅ **Hosting**: Free, unlimited bandwidth
✅ **SSL**: Automatic HTTPS certificate
✅ **CDN**: Fast loading worldwide
✅ **Functions**: Serverless API for lead forms
✅ **Auto-deploy**: Push to GitHub = instant deploy
✅ **Preview URLs**: Every PR gets a preview link
✅ **Analytics**: Built-in traffic stats
✅ **DDoS Protection**: Included

### Cost: $0/month

---

## Current Status Checklist

- [x] Phone number updated: (262) 425-5984
- [x] Email recipients updated: jjrgross@gmail.com, freddyviera915@gmail.com
- [x] Duplicate DMARC removed
- [ ] Domain added to Cloudflare
- [ ] Nameservers switched at GoDaddy
- [ ] Resend DNS records added in Cloudflare
- [ ] Cloudflare API credentials obtained
- [ ] Resend API key obtained
- [ ] Site deployed to Cloudflare Pages
- [ ] Domain connected
- [ ] Lead form tested

---

## Next Steps

**Right now:**
1. Add turnedkey.com to Cloudflare
2. Switch nameservers at GoDaddy
3. Add Resend DNS records in Cloudflare

**Then give me:**
- Cloudflare API Token
- Cloudflare Account ID  
- Resend API Key

**I'll handle:**
- Everything else! 🚀

---

## Need Help?

Stuck on any step? Let me know where you are and I'll guide you through it!
