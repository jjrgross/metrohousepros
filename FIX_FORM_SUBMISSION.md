# Fix Form Submission Error - TurnedKey

The form submission error is happening because two things need to be configured in Cloudflare Pages:

## 1. Add RESEND_API_KEY Environment Variable

1. Go to Cloudflare dashboard: `dash.cloudflare.com`
2. Navigate to **Workers & Pages** → **turnedkey**
3. Click the **Settings** tab
4. Scroll to **Environment Variables**
5. Click **Add Variable**
6. Add:
   - **Variable name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (get it from resend.com/api-keys)
   - **Environment**: Production
7. Click **Save**

## 2. Bind the KV Namespace

1. In the same **Settings** page
2. Scroll to **Functions**
3. Under **KV namespace bindings**, click **Add binding**
4. Add:
   - **Variable name**: `LEADS_KV` (must be exactly this)
   - **KV namespace**: Select `turnedkey-leads` (the one you created)
5. Click **Save**

## 3. Redeploy the Site

After adding both the environment variable and KV binding:

1. Go to the **Deployments** tab
2. Find the latest deployment
3. Click the **︙** (three dots menu)
4. Click **Retry deployment**

OR just make a small change to any file in GitHub and commit it to trigger a new deployment.

## 4. Test the Form

Once the deployment finishes:
1. Go to turnedkey.com
2. Fill out the form completely
3. Click "Get My Cash Offer"
4. You should see: "Thank you! Your cash offer request has been submitted..."

## Getting Your Resend API Key

1. Go to: https://resend.com/api-keys
2. Log in with your account (jjrgross@gmail.com)
3. Click **Create API Key**
4. Give it a name like "TurnedKey Production"
5. Copy the key (starts with `re_...`)
6. Paste it into the RESEND_API_KEY environment variable in Cloudflare

---

## What Changed in the Form

The new form now collects:
- ✅ Name
- ✅ Property Address
- ✅ Property Condition (1-10 dropdown)
- ✅ Timeline (dropdown with options like "ASAP", "30 days", etc.)
- ✅ Is it listed with an agent? (Yes/No/Previously listed)
- ✅ Phone Number
- ✅ Email Address

All leads will be:
1. Saved to the KV database
2. Emailed to jjrgross@gmail.com and freddyviera915@gmail.com
3. Accessible at turnedkey.com/api/leads?manage=turned99
