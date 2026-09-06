# Email Notification Setup

When a new lead submits the contact form, an email notification will be sent automatically.

## Current Configuration

The email notification system is configured in `/functions/api/leads.js`:

```javascript
const EMAIL_CONFIG = {
  to: 'info@metrohousepros.com',        // Your email to receive notifications
  from: 'leads@metrohousepros.com',     // From address
  replyTo: '',                           // Auto-set to lead's email
};
```

## Email Service

The system uses **MailChannels** (free for Cloudflare Workers/Pages). No API key required!

### Important: Domain Verification

For emails to send successfully from your domain, you need to:

1. **Add SPF Record** to your DNS:
   ```
   Type: TXT
   Name: @
   Value: v=spf1 include:relay.mailchannels.net ~all
   ```

2. **Add DKIM Records** (recommended for better deliverability):
   - MailChannels will work without DKIM, but adding it improves reliability
   - See: https://support.mailchannels.com/hc/en-us/articles/4565898358413

### Alternative Email Services

If you prefer to use a different email service, you can modify the `sendLeadEmail()` function to use:

- **SendGrid**: https://sendgrid.com/
- **Mailgun**: https://www.mailgun.com/
- **Resend**: https://resend.com/
- **AWS SES**: https://aws.amazon.com/ses/

## What's Included in the Email

Each notification includes:
- ✅ Lead's contact information (name, phone, email)
- ✅ Property details (address, condition, occupancy)
- ✅ Timeline and agent status
- ✅ Any additional notes
- ✅ Quick action buttons (Call, Email)
- ✅ Link to admin panel
- ✅ Reply-to automatically set to lead's email

## Testing

1. Submit a test lead through your contact form
2. Check your inbox at the configured email address
3. Check spam folder if you don't see it immediately

## Troubleshooting

**Emails not arriving?**
1. Verify SPF record is added to your domain's DNS
2. Check Cloudflare dashboard > Workers & Pages > Your project > Logs
3. Ensure the `to` email address is correct in the config
4. Check your spam/junk folder

**Want to receive at multiple addresses?**

Update the config to:
```javascript
const EMAIL_CONFIG = {
  to: 'email1@example.com,email2@example.com',  // Comma-separated
  from: 'leads@metrohousepros.com',
  replyTo: '',
};
```

Then update the email sending code to split addresses:
```javascript
to: EMAIL_CONFIG.to.split(',').map(email => ({ email: email.trim() })),
```

## Support

For MailChannels issues: https://support.mailchannels.com/
