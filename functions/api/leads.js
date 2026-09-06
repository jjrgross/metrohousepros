const ADMIN_KEY = 'metro99';

// Email configuration - update with your email addresses
const EMAIL_CONFIG = {
  to: 'jjrgross@gmail.com', // Your email address to receive notifications
  from: 'leads@metrohousepros.com', // From address (must be verified with your email service)
  replyTo: '', // Will be set to the lead's email
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

function isAdmin(url) {
  return url.searchParams.get('manage') === ADMIN_KEY;
}

async function sendLeadEmail(lead) {
  // Format the email body
  const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0f2557; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
    .content { background: #f8fafc; padding: 25px; border: 1px solid #e2e8f0; border-top: none; }
    .field { margin-bottom: 15px; padding: 12px; background: white; border-radius: 5px; border-left: 3px solid #22c55e; }
    .label { font-weight: bold; color: #0f2557; margin-bottom: 5px; }
    .value { color: #1e293b; }
    .footer { margin-top: 20px; padding: 15px; text-align: center; font-size: 12px; color: #64748b; }
    .badge { display: inline-block; background: #22c55e; color: white; padding: 4px 12px; border-radius: 15px; font-size: 11px; font-weight: bold; text-transform: uppercase; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🏠 New Lead Submission</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">Metro House Pros</p>
    </div>
    <div class="content">
      <p style="font-size: 16px; margin-top: 0;"><strong>You have a new lead submission!</strong></p>
      
      <div class="field">
        <div class="label">👤 Name</div>
        <div class="value">${lead.name}</div>
      </div>
      
      <div class="field">
        <div class="label">📞 Phone</div>
        <div class="value"><a href="tel:${lead.phone}">${lead.phone}</a></div>
      </div>
      
      <div class="field">
        <div class="label">📧 Email</div>
        <div class="value"><a href="mailto:${lead.email}">${lead.email}</a></div>
      </div>
      
      ${lead.address ? `
      <div class="field">
        <div class="label">🏡 Property Address</div>
        <div class="value">${lead.address}</div>
      </div>
      ` : ''}
      
      ${lead.timeline ? `
      <div class="field">
        <div class="label">⏰ Timeline</div>
        <div class="value">${lead.timeline}</div>
      </div>
      ` : ''}
      
      ${lead.propertyCondition ? `
      <div class="field">
        <div class="label">🔧 Property Condition</div>
        <div class="value">${lead.propertyCondition}</div>
      </div>
      ` : ''}
      
      ${lead.occupancy ? `
      <div class="field">
        <div class="label">🏠 Occupancy</div>
        <div class="value">${lead.occupancy}</div>
      </div>
      ` : ''}
      
      ${lead.listedWithAgent ? `
      <div class="field">
        <div class="label">📋 Listed with Agent?</div>
        <div class="value">${lead.listedWithAgent}</div>
      </div>
      ` : ''}
      
      ${lead.additionalNotes ? `
      <div class="field">
        <div class="label">📝 Additional Notes</div>
        <div class="value">${lead.additionalNotes}</div>
      </div>
      ` : ''}
      
      <div style="margin-top: 25px; padding: 15px; background: #dbeafe; border-radius: 5px; text-align: center;">
        <p style="margin: 0 0 10px 0; font-weight: bold;">Quick Actions</p>
        <a href="tel:${lead.phone}" style="display: inline-block; background: #0f2557; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">📞 Call Now</a>
        <a href="mailto:${lead.email}" style="display: inline-block; background: #22c55e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">📧 Email</a>
      </div>
    </div>
    <div class="footer">
      <p>This lead was submitted on ${new Date(lead.createdAt).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
      <p>Manage your leads at <a href="https://metrohousepros.com/admin">metrohousepros.com/admin</a></p>
    </div>
  </div>
</body>
</html>
  `.trim();

  const plainTextBody = `
NEW LEAD SUBMISSION - Metro House Pros

Name: ${lead.name}
Phone: ${lead.phone}
Email: ${lead.email}
${lead.address ? `Property Address: ${lead.address}` : ''}
${lead.timeline ? `Timeline: ${lead.timeline}` : ''}
${lead.propertyCondition ? `Property Condition: ${lead.propertyCondition}` : ''}
${lead.occupancy ? `Occupancy: ${lead.occupancy}` : ''}
${lead.listedWithAgent ? `Listed with Agent: ${lead.listedWithAgent}` : ''}
${lead.additionalNotes ? `\nAdditional Notes:\n${lead.additionalNotes}` : ''}

Submitted: ${new Date(lead.createdAt).toLocaleString()}

Manage leads: https://metrohousepros.com/admin
  `.trim();

  // Using MailChannels API (free for Cloudflare Workers)
  try {
    const emailPayload = {
      personalizations: [
        {
          to: [{ email: EMAIL_CONFIG.to }],
          reply_to: { email: lead.email, name: lead.name },
          dkim_domain: 'metrohousepros.com',
          dkim_selector: 'mailchannels',
        },
      ],
      from: {
        email: EMAIL_CONFIG.from,
        name: 'Metro House Pros Leads',
      },
      subject: `🏠 New Lead: ${lead.name} - ${lead.phone}`,
      content: [
        {
          type: 'text/plain',
          value: plainTextBody,
        },
        {
          type: 'text/html',
          value: emailBody,
        },
      ],
    };

    console.log('Attempting to send email to:', EMAIL_CONFIG.to);
    
    const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    const responseText = await response.text();
    
    if (!response.ok) {
      console.error('MailChannels API error:', response.status, responseText);
      return false;
    }
    
    console.log('Email sent successfully via MailChannels');
    return true;
  } catch (error) {
    console.error('Error sending email:', error.message, error.stack);
    return false;
  }
}

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  
  // Only admins can view leads
  if (!isAdmin(url)) {
    return json({ error: 'Unauthorized' }, 401);
  }

  const id = url.searchParams.get('id');
  const leads = (await context.env.DEALS_KV.get('leads', { type: 'json' })) || [];

  if (id) {
    const lead = leads.find((l) => l.id === id);
    if (!lead) return json({ error: 'Not found' }, 404);
    return json(lead);
  }

  // Return all leads sorted by newest first
  return json(leads);
}

export async function onRequestPost(context) {
  const url = new URL(context.request.url);
  const lead = await context.request.json();

  // Validate required fields
  if (!lead.name || !lead.phone || !lead.email) {
    return json({ error: 'name, phone, and email are required' }, 400);
  }

  const leads = (await context.env.DEALS_KV.get('leads', { type: 'json' })) || [];
  
  const newLead = {
    id: Date.now().toString(),
    name: lead.name,
    phone: lead.phone,
    email: lead.email,
    address: lead.address || '',
    condition: lead.condition || '',
    timeline: lead.timeline || '',
    propertyCondition: lead.propertyCondition || '',
    occupancy: lead.occupancy || '',
    listedWithAgent: lead.listedWithAgent || '',
    additionalNotes: lead.additionalNotes || '',
    status: 'new', // new, contacted, qualified, closed
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  leads.unshift(newLead);
  await context.env.DEALS_KV.put('leads', JSON.stringify(leads));
  
  // Send email notification (don't block on email sending)
  let emailSent = false;
  let emailError = null;
  try {
    emailSent = await sendLeadEmail(newLead);
    if (!emailSent) {
      emailError = 'Email sending returned false - check Cloudflare logs';
    }
  } catch (error) {
    console.error('Email notification failed:', error);
    emailError = error.message;
    // Continue even if email fails - lead is still saved
  }
  
  return json({
    ...newLead,
    emailSent,
    emailError
  }, 201);
}

export async function onRequestPut(context) {
  const url = new URL(context.request.url);
  
  // Only admins can edit leads
  if (!isAdmin(url)) {
    return json({ error: 'Unauthorized' }, 401);
  }

  const updates = await context.request.json();
  if (!updates.id) return json({ error: 'id is required' }, 400);

  const leads = (await context.env.DEALS_KV.get('leads', { type: 'json' })) || [];
  const idx = leads.findIndex((l) => l.id === updates.id);
  
  if (idx === -1) return json({ error: 'Not found' }, 404);

  leads[idx] = { 
    ...leads[idx], 
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  await context.env.DEALS_KV.put('leads', JSON.stringify(leads));
  return json(leads[idx]);
}

export async function onRequestDelete(context) {
  const url = new URL(context.request.url);
  
  // Only admins can delete leads
  if (!isAdmin(url)) {
    return json({ error: 'Unauthorized' }, 401);
  }

  const id = url.searchParams.get('id');
  if (!id) return json({ error: 'id is required' }, 400);

  const leads = (await context.env.DEALS_KV.get('leads', { type: 'json' })) || [];
  const filtered = leads.filter((l) => l.id !== id);
  
  await context.env.DEALS_KV.put('leads', JSON.stringify(filtered));
  return json({ success: true });
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
