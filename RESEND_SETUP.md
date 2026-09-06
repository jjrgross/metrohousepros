# Resend Email Setup (Final Step!)

## Why Resend?

MailChannels was being difficult. Resend is:
- ✅ Free (3,000 emails/month free tier)
- ✅ Reliable and modern
- ✅ Works perfectly with Cloudflare
- ✅ Takes 5 minutes to set up

## Setup Instructions:

### Step 1: Create Resend Account (2 minutes)

1. Go to: https://resend.com/signup
2. Sign up with your email
3. Verify your email

### Step 2: Add Your Domain (2 minutes)

1. In Resend dashboard, click **"Domains"**
2. Click **"Add Domain"**
3. Enter: **metrohousepros.com**
4. Resend will show you DNS records to add
5. Add those records in Cloudflare DNS (you know how now!)

### Step 3: Get API Key (1 minute)

1. In Resend, click **"API Keys"**
2. Click **"Create API Key"**
3. Name it: "Metro House Pros Website"
4. Permission: **"Sending access"**
5. Click **"Add"**
6. **Copy the API key** (starts with `re_`)

### Step 4: Add API Key to Cloudflare (2 minutes)

1. Go to Cloudflare: https://dash.cloudflare.com/
2. Click **Workers & Pages**
3. Click **metro-house-pros**
4. Click **"Settings"** tab
5. Scroll to **"Environment variables"**
6. Click **"Add variables"** (for Production)
7. Variable name: `RESEND_API_KEY`
8. Value: Paste your API key from step 3
9. Click **"Save"**

### Step 5: Test!

1. Wait 2 minutes for changes to deploy
2. Submit a test lead on your website
3. **Check your email!** 📧

## That's It!

Once you complete these steps, email notifications will work reliably!

## Need Help?

Let me know if you get stuck on any step.
