const subjects = new Map([
  ['contact', 'Nieuw contactbericht via de website'],
  ['offerte', 'Nieuwe offerteaanvraag via de website'],
]);

export default async (request) => {
  if (request.method !== 'POST') {
    return new Response(null, { status: 405, headers: { Allow: 'POST' } });
  }

  if (request.headers.get('Origin') !== new URL(request.url).origin) {
    return new Response(null, { status: 403 });
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const { form, email, message } = data ?? {};
  if (!subjects.has(form) ||
      typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      typeof message !== 'string' || !message.trim() || message.length > 20000) {
    return new Response(null, { status: 400 });
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL) {
    console.error('Missing Resend configuration');
    return new Response(null, { status: 503 });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + RESEND_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: ['offerte@huismanwandafwerking.nl'],
        reply_to: email.trim(),
        subject: subjects.get(form),
        text: message,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);
      const errorName = typeof error?.name === 'string' && /^[a-z_]{1,60}$/.test(error.name)
        ? error.name
        : 'unknown_error';
      console.error('Resend rejected the request', response.status, errorName);
      return new Response(null, { status: 502 });
    }
    return new Response(null, { status: 204 });
  } catch {
    console.error('Resend request failed');
    return new Response(null, { status: 502 });
  }
};
