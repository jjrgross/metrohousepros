const ADMIN_KEY = 'metro99';

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
  
  return json(newLead, 201);
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
