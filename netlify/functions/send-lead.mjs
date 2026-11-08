const fail = (status, reason) => new Response(JSON.stringify({ reason }), {
  status,
  headers: { 'Content-Type': 'application/json' },
});

const subjects = new Map([
  ['contact', 'Nieuw contactbericht via de website'],
  ['offerte', 'Nieuwe offerteaanvraag via de website'],
]);

const confirmations = new Map([
  ['contact', 'Bedankt voor uw bericht. Wij nemen binnen 24 uur contact met u op.'],
  ['offerte', 'Bedankt voor uw offerteaanvraag. Wij nemen binnen 24 uur contact met u op.'],
]);

const confirmationSubjects = new Map([
  ['contact', 'Wij hebben uw bericht ontvangen'],
  ['offerte', 'Wij hebben uw offerteaanvraag ontvangen'],
]);

export default async (request) => {
  if (request.method !== 'POST') {
    return new Response(null, { status: 405, headers: { Allow: 'POST' } });
  }

  if (request.headers.get('Origin') !== new URL(request.url).origin) {
    return fail(403, 'origin_mismatch');
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

  const RESEND_API_KEY = process.env.RESEND_API_KEY?.trim();
  const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL?.trim();
  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL) {
    console.error('Missing Resend configuration');
    return fail(503, 'missing_config');
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
      const detail = typeof error?.message === 'string' ? error.message.toLowerCase() : '';
      const field = ['api key', 'reply_to', 'reply-to', 'from', 'recipient', 'subject', 'text']
        .find((name) => detail.includes(name));
      console.error('Resend rejected the request', response.status, errorName, field ?? 'unspecified');
      return fail(502, 'resend_' + errorName + '_' + (field ?? 'unspecified'));
    }

    try {
      const confirmation = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + RESEND_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: RESEND_FROM_EMAIL,
          to: [email.trim()],
          reply_to: 'offerte@huismanwandafwerking.nl',
          subject: confirmationSubjects.get(form),
          text: confirmations.get(form) +
            '\n\nBelt u liever direct? Bel ons op 078-3690154.' +
            '\n\nUw gegevens:\n\n' + message +
            '\n\nMet vriendelijke groet,\nHuisman Wandafwerking',
        }),
      });
      if (!confirmation.ok) {
        console.error('Confirmation email rejected', confirmation.status);
      }
    } catch {
      console.error('Confirmation email failed');
    }

    return new Response(null, { status: 204 });
  } catch {
    console.error('Resend request failed');
    return fail(502, 'resend_unreachable');
  }
};
