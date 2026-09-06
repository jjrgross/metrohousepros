# DNS Configuration Instructions

## Add SPF Record for Email Notifications

To enable email notifications for lead submissions, you need to add an SPF record to your domain's DNS settings.

### Step-by-Step Instructions:

1. **Log in to Cloudflare**
   - Go to https://dash.cloudflare.com/
   - Select your account

2. **Select Your Domain**
   - Click on `metrohousepros.com` from your domains list

3. **Go to DNS Settings**
   - Click on the "DNS" tab in the left sidebar
   - Click "Records" if not already selected

4. **Add New TXT Record**
   - Click the "+ Add record" button
   - Fill in the following details:

   ```
   Type: TXT
   Name: @
   Content: v=spf1 include:relay.mailchannels.net ~all
   TTL: Auto
   ```

5. **Save the Record**
   - Click "Save"
   - The record may take a few minutes to propagate

### Verify the Record

After adding the record, you can verify it's working:

**Option 1: Online Tool**
- Visit: https://mxtoolbox.com/spf.aspx
- Enter: metrohousepros.com
- Check that it shows the MailChannels SPF record

**Option 2: Command Line**
```bash
nslookup -type=txt metrohousepros.com
```

You should see the SPF record in the results.

### Test Email Notifications

Once the DNS record is added:

1. Go to https://metrohousepros.com
2. Fill out the contact/lead form
3. Submit the form
4. Check your email at **jjrgross@gmail.com** (check spam folder too!)

### The DNS Record You're Adding:

```
v=spf1 include:relay.mailchannels.net ~all
```

**What this means:**
- `v=spf1` - SPF version 1
- `include:relay.mailchannels.net` - Authorizes MailChannels to send email on your behalf
- `~all` - Soft fail for other servers (recommended for compatibility)

### Alternative: If You Already Have an SPF Record

If you already have an SPF record, DON'T create a second one. Instead, add MailChannels to your existing record:

**Example - if your current SPF is:**
```
v=spf1 include:_spf.google.com ~all
```

**Update it to:**
```
v=spf1 include:_spf.google.com include:relay.mailchannels.net ~all
```

### Troubleshooting

**Emails not arriving after adding DNS record:**
1. Wait 10-15 minutes for DNS propagation
2. Check spam/junk folder
3. Verify the SPF record is correct using the verification steps above
4. Try submitting another test lead

**Need Help?**
If you encounter any issues, check the Cloudflare DNS dashboard or contact Cloudflare support.
