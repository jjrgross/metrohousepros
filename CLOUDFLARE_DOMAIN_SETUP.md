# TurnedKey.com - Cloudflare Setup Guide

## Current Status
- ✅ Domain registered: turnedkey.com (GoDaddy)
- ✅ Resend account ready: jjrgross@gmail.com
- ⚠️ Using GoDaddy nameservers (needs to change to Cloudflare)

---

## Step 1: Add Domain to Cloudflare (5 minutes)

1. Go to: https://dash.cloudflare.com/
2. Log in with: jjrgross@gmail.com
3. Click **"+ Add a site"**
4. Enter: **turnedkey.com**
5. Click **"Add site"**
6. Choose **"Free"** plan
7. Click **"Continue"**

Cloudflare will scan your existing DNS records.

---

## Step 2: Review & Import DNS Records

Cloudflare will show all your current GoDaddy DNS records. 

**Keep these records:**
- ✅ A record: @ → Parked (or we'll change this later)
- ✅ CNAME: www → turnedkey.com

**ADD these Resend records** (from your screenshot):

### DKIM Record:
```
Type: TXT
Name: resend._domainkey
Content: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC6rt6aToSMlCsixGdfnHqDVFxTa15v7dRYYcJiNcArpXi6icJeWhTH6yHFzYhJk94Y7wjqDqtSVfMfmfhmFKhdm3YSclZayaoUZRGMYOFUKIFvbDOt6roW0DbQ2jOiRHEyVvtPZyXxYUX88LcNZEbKJ/Xv1OZ2OOdr+O0abZmrxQIDAQAB
TTL: Auto
```

### SPF Records (from screenshot):
```
Type: CNAME
Name: rsend
Target: rsend.forge.rmta.net
TTL: Auto
```

```
Type: CNAME
Name: send
Target: send.forge.rmta.net
TTL: Auto
```

### DMARC (optional but recommended):
```
Type: TXT
Name: _dmarc
Content: v=DMARC1; p=none;
TTL: Auto
```

**REMOVE/DON'T ADD:**
- ❌ The duplicate DMARC record (the quarantine one from GoDaddy)
- ❌ Old _domainconnect record (not needed)
- ❌ NS records (Cloudflare handles these)

---

## Step 3: Update Nameservers at GoDaddy

After adding the site to Cloudflare, you'll see:

**Cloudflare Nameservers (something like):**
```
celine.ns.cloudflare.com
phil.ns.cloudflare.com
```

**Now update at GoDaddy:**

1. Go to: https://dcc.godaddy.com/control/portfolio/dns
2. Find **turnedkey.com**
3. Click **"DNS"** or **"Manage DNS"**
4. Scroll to **"Nameservers"** section
5. Click **"Change"**
6. Select **"I'll use my own nameservers"**
7. Enter Cloudflare's nameservers (from step above)
8. Click **"Save"**

⏱️ **This takes 2-24 hours to propagate** (usually ~2 hours)

---

## Step 4: Verify in Cloudflare

1. Back in Cloudflare dashboard
2. Click **"Done, check nameservers"**
3. Cloudflare will check periodically
4. You'll get an email when it's active

---

## Step 5: While Waiting - Get Your Credentials

While DNS propagates, grab these:

### Cloudflare API Token:
https://dash.cloudflare.com/profile/api-tokens
- Create token → "Edit Cloudflare Pages" template

### Cloudflare Account ID:
- Dashboard → Right sidebar

### Resend API Key:
https://resend.com/api-keys
- Create API Key → "TurnedKey Website" → "Sending access"

---

## Final DNS Records (What You'll Have in Cloudflare)

```
Type    Name                    Content/Target              TTL
----    ----                    --------------              ---
TXT     resend._domainkey       p=MIGfMA0GCS...            Auto
CNAME   rsend                   rsend.forge.rmta.net       Auto
CNAME   send                    send.forge.rmta.net        Auto
TXT     _dmarc                  v=DMARC1; p=none;          Auto
CNAME   www                     turnedkey.com              Auto
(A/AAAA records will be added by Cloudflare Pages)
```

---

## Why Move to Cloudflare?

**Benefits:**
- ✅ Free SSL certificate (automatic)
- ✅ CDN (faster site globally)
- ✅ DDoS protection
- ✅ Better DNS management
- ✅ Cloudflare Pages integration
- ✅ Free email routing (optional)
- ✅ Page Rules & redirects
- ✅ Analytics included

**Still keep at GoDaddy:**
- Domain registration (renewal)
- That's it! Everything else moves to Cloudflare

---

## Once Nameservers Are Updated

I will:
1. ✅ Create Cloudflare Pages project
2. ✅ Deploy TurnedKey site
3. ✅ Connect turnedkey.com domain
4. ✅ Configure Resend email
5. ✅ Test lead forms
6. ✅ Site goes live!

---

## Need Help?

Let me know when you:
- Add domain to Cloudflare
- Update nameservers at GoDaddy
- Have your API credentials ready

I'll handle the rest! 🚀
