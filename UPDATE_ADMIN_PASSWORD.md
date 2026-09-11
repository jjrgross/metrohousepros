# Update Admin Password to "turned99"

## Quick Fix - Update One File:

You need to update the `functions/api/leads.js` file in your turnedkey repo.

### Method 1: GitHub Web Editor (Easiest!)

1. Go to: https://github.com/jjrgross/turnedkey/blob/main/functions/api/leads.js
2. Click the **pencil icon** (Edit this file) on the right
3. Find line 3: `const ADMIN_KEY = 'turnedkey2026';`
4. Change it to: `const ADMIN_KEY = 'turned99';`
5. Scroll down, click **"Commit changes"**
6. Cloudflare will auto-deploy the update!

### Method 2: Replace the Whole File

I've updated the file here: `/workspace/functions/api/leads.js`

You can:
1. Download it
2. Upload to replace the one in your GitHub repo

---

## After Update:

**Admin login will be:**
- URL: https://turnedkey.com/admin
- Password: `turned99`

The page will ask for `?manage=turned99` in the URL.

---

## How Admin Login Works:

Go to: `https://turnedkey.com/admin?manage=turned99`

The `?manage=turned99` parameter authenticates you as admin!

---

**Use Method 1 (GitHub web editor) - it's the fastest!** 🚀
