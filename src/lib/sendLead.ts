export async function sendLead(form: 'contact' | 'offerte', email: string, message: string) {
  const response = await fetch('/.netlify/functions/send-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ form, email, message }),
  });

  if (!response.ok) {
    throw new Error('Form submission failed');
  }
}
