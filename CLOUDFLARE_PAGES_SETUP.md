# ✅ Ready to Deploy TurnedKey!

## Code is Ready at:
**Repository:** jjrgross/metrohousepros  
**Branch:** turnedkey-deploy

---

## 🚀 Cloudflare Pages Setup (5 minutes)

### Step 1: Create Pages Project

1. Go to: **https://dash.cloudflare.com/**
2. Click **"Workers & Pages"** in left sidebar
3. Click **"Create application"** button
4. Click **"Pages"** tab
5. Click **"Connect to Git"** button

---

### Step 2: Connect GitHub Repository

1. Click **"Connect GitHub"**
2. If asked, authorize Cloudflare to access your repos
3. Select your account: **jjrgross**
4. Find and select: **metrohousepros**
5. Click **"Begin setup"**

---

### Step 3: Configure Build Settings

```
Project name: turnedkey

Production branch: turnedkey-deploy

Framework preset: None

Build command: (leave empty)

Build output directory: dist

Root directory: (leave as /)
```

6. Click **"Save and Deploy"**

⏱️ First deployment takes 1-2 minutes

---

### Step 4: Add Environment Variables

After the first deploy completes:

1. Go to your **turnedkey** project
2. Click **"Settings"** tab
3. Click **"Environment variables"** in left menu
4. Click **"Add variables"** button
5. Select **"Production"** environment
6. Add this variable:

```
Variable name: RESEND_API_KEY
Value: [paste your Resend API key from https://resend.com/api-keys]
```

7. Click **"Save"**

---

### Step 5: Create KV Namespace for Leads

1. Go back to **Workers & Pages** main page
2. Click **"KV"** tab
3. Click **"Create namespace"** button
4. Namespace name: `turnedkey-leads`
5. Click **"Add"**

Now bind it to your project:

6. Go back to your **turnedkey** Pages project
7. Click **"Settings"** → **"Functions"** (in left menu)
8. Scroll to **"KV namespace bindings"** section
9. Click **"Add binding"** button
10. Add:
```
Variable name: LEADS_KV
KV namespace: turnedkey-leads
Environment: Production
```
11. Click **"Save"**

---

### Step 6: Add Custom Domain

1. In your **turnedkey** project, click **"Custom domains"** tab
2. Click **"Set up a custom domain"** button
3. Enter: **turnedkey.com**
4. Click **"Continue"**
5. Cloudflare will automatically configure DNS
6. Click **"Activate domain"**

Repeat for www:
7. Click **"Set up a custom domain"** again
8. Enter: **www.turnedkey.com**
9. Click **"Continue"**
10. Click **"Activate domain"**

---

## ✅ Your Site is Live!

After DNS propagates (5-10 minutes):
- **https://turnedkey.com** - Your live site!
- **https://www.turnedkey.com** - Also works!

---

## 🧪 Test Lead Form

1. Go to https://turnedkey.com
2. Scroll to lead form
3. Fill it out with test data
4. Submit
5. Check your email: jjrgross@gmail.com and freddyviera915@gmail.com

You should receive a beautifully formatted email with the lead! 📧

---

## 📊 What You Get

✅ **Live Site:** https://turnedkey.com  
✅ **SSL Certificate:** Automatic HTTPS  
✅ **CDN:** Fast loading worldwide  
✅ **Lead Forms:** Working with Resend email  
✅ **Auto-Deploy:** Push to turnedkey-deploy branch = instant update  
✅ **Preview Deploys:** Every commit gets a preview URL  

---

## 🔄 Future Updates

When you want to update the site:

1. Make changes to the `turnedkey-deploy` branch
2. Push to GitHub
3. Cloudflare automatically deploys!

Or use the Cloudflare dashboard to trigger manual deployments.

---

## 📞 Your Site Info

- **Phone:** (262) 425-5984
- **Emails:** jjrgross@gmail.com, freddyviera915@gmail.com
- **Domain:** turnedkey.com
- **Theme:** Blue/Purple gradient
- **Service Area:** Nationwide

---

## Need Help?

Let me know when:
- ✅ Cloudflare Pages is set up
- ✅ Domain is connected
- ✅ Lead form is tested

Then you're 100% live! 🎉
