const ADMIN_KEY = 'metro99';

// Email configuration
const EMAIL_CONFIG = {
  to: ['jjrgross@gmail.com', 'freddyviera915@gmail.com'],
  from: 'leads@metrohousepros.com',
  resendApiKey: '', // Will use RESEND_API_KEY env var if empty
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

async function sendLeadEmail(lead, context) {
  const apiKey = context.env.RESEND_API_KEY || EMAIL_CONFIG.resendApiKey;
  
  if (!apiKey) {
    return { success: false, error: 'No Resend API key configured. Get one free at resend.com' };
  }

  const emailBody = `<!DOCTYPE html>
<html>
<head><style>body{font-family:Arial,sans-serif;line-height:1.6;color:#333}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:#0f2557;color:white;padding:20px;text-align:center;border-radius:5px 5px 0 0}.content{background:#f8fafc;padding:25px;border:1px solid #e2e8f0;border-top:none}.field{margin-bottom:15px;padding:12px;background:white;border-radius:5px;border-left:3px solid #22c55e}.label{font-weight:bold;color:#0f2557;margin-bottom:5px}.value{color:#1e293b}.footer{margin-top:20px;padding:15px;text-align:center;font-size:12px;color:#64748b}</style></head>
<body><div class="container"><div class="header"><h1 style="margin:0">🏠 New Lead Submission</h1><p style="margin:5px 0 0 0;opacity:0.9">Metro House Pros</p></div><div class="content"><p style="font-size:16px;margin-top:0"><strong>You have a new lead submission!</strong></p><div class="field"><div class="label">👤 Name</div><div class="value">${lead.name}</div></div><div class="field"><div class="label">📞 Phone</div><div class="value"><a href="tel:${lead.phone}">${lead.phone}</a></div></div><div class="field"><div class="label">📧 Email</div><div class="value"><a href="mailto:${lead.email}">${lead.email}</a></div></div>${lead.address ? `<div class="field"><div class="label">🏡 Property Address</div><div class="value">${lead.address}</div></div>` : ''}${lead.timeline ? `<div class="field"><div class="label">⏰ Timeline</div><div class="value">${lead.timeline}</div></div>` : ''}${lead.propertyCondition ? `<div class="field"><div class="label">🔧 Property Condition</div><div class="value">${lead.propertyCondition}</div></div>` : ''}${lead.occupancy ? `<div class="field"><div class="label">🏠 Occupancy</div><div class="value">${lead.occupancy}</div></div>` : ''}${lead.listedWithAgent ? `<div class="field"><div class="label">📋 Listed with Agent?</div><div class="value">${lead.listedWithAgent}</div></div>` : ''}${lead.additionalNotes ? `<div class="field"><div class="label">📝 Additional Notes</div><div class="value">${lead.additionalNotes}</div></div>` : ''}<div style="margin-top:25px;padding:15px;background:#dbeafe;border-radius:5px;text-align:center"><p style="margin:0 0 10px 0;font-weight:bold">Quick Actions</p><a href="tel:${lead.phone}" style="display:inline-block;background:#0f2557;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;margin:5px">📞 Call Now</a><a href="mailto:${lead.email}" style="display:inline-block;background:#22c55e;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;margin:5px">📧 Email</a></div></div><div class="footer"><p>Submitted ${new Date(lead.createdAt).toLocaleString()}</p><p>Manage leads at <a href="https://metrohousepros.com/admin">metrohousepros.com/admin</a></p></div></div></body></html>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `Metro House Pros <${EMAIL_CONFIG.from}>`,
        to: [EMAIL_CONFIG.to],
        reply_to: lead.email,
        subject: `🏠 New Lead: ${lead.name} - ${lead.phone}`,
        html: emailBody,
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      return { success: false, error: `Resend error: ${result.message || 'Unknown error'}` };
    }
    
    return { success: true, emailId: result.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  
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

  return json(leads);
}

export async function onRequestPost(context) {
  const url = new URL(context.request.url);
  const lead = await context.request.json();

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
    status: 'new',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  leads.unshift(newLead);
  await context.env.DEALS_KV.put('leads', JSON.stringify(leads));
  
  const emailResult = await sendLeadEmail(newLead, context);
  
  return json({
    ...newLead,
    emailSent: emailResult.success,
    emailError: emailResult.error || null,
    emailId: emailResult.emailId || null
  }, 201);
}

export async function onRequestPut(context) {
  const url = new URL(context.request.url);
  
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
