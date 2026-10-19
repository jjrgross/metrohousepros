# Push TurnedKey Code to Your GitHub Repo

## ✅ Ready to Deploy!

Your code is ready with:
- ✅ Phone: (262) 425-5984
- ✅ Emails: jjrgross@gmail.com, freddyviera915@gmail.com  
- ✅ Lead form handler configured
- ✅ Blue theme styling
- ✅ All TurnedKey branding

---

## 🚀 Quick Push Commands

Run these commands in your terminal:

```bash
# Navigate to workspace
cd /workspace

# Add your turnedkey repo as a new remote
git remote add turnedkey https://github.com/jjrgross/turnedkey.git

# Push from our branch to your repo's main branch
git push turnedkey cursor/create-turnedkey-site-4a22:main

# Done! Code is now in your turnedkey repo
```

---

## 🔐 If Authentication Fails

If git asks for credentials, use:
- Username: `jjrgross`
- Password: Use a **Personal Access Token** (not your GitHub password)

**To create a token:**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Classic"
3. Name it: "TurnedKey Deployment"
4. Select scopes: `repo` (check the box)
5. Click "Generate token"
6. Copy and use as password

---

## ✅ Verify Push Worked

After pushing, check:
- https://github.com/jjrgross/turnedkey
- You should see all the files: dist/, functions/, etc.

---

## Next: Connect to Cloudflare Pages

Once code is pushed, follow these steps in Cloudflare:

### 1. Create Pages Project
1. Go to: https://dash.cloudflare.com/
2. Click **"Workers & Pages"**
3. Click **"Create application"**
4. Click **"Pages"** tab
5. Click **"Connect to Git"**

### 2. Connect GitHub
1. Click **"Connect GitHub"**
2. Select account: **jjrgross**
3. Choose: **turnedkey**
4. Click **"Begin setup"**

### 3. Configure
```
Project name: turnedkey
Production branch: main
Build command: (leave empty)
Build output directory: dist
```
Click **"Save and Deploy"**

### 4. Add Environment Variables
After first deploy:
1. Go to **Settings** → **Environment variables**
2. Add for **Production**:
   ```
   Name: RESEND_API_KEY
   Value: [your key from https://resend.com/api-keys]
   ```

### 5. Create KV Namespace
1. **Workers & Pages** → **KV** → **Create namespace**
2. Name: `turnedkey-leads`
3. Go back to Pages project → **Settings** → **Functions**
4. **KV namespace bindings** → **Add binding**:
   ```
   Variable name: LEADS_KV
   KV namespace: turnedkey-leads
   ```

### 6. Add Custom Domain
1. **Custom domains** tab
2. **Set up a custom domain**
3. Add: `turnedkey.com`
4. Add: `www.turnedkey.com`

---

## Need Help?

Let me know if:
- Authentication fails
- Push doesn't work
- Need help with Cloudflare Pages setup

Otherwise, run those git commands and then set up in Cloudflare! 🚀
