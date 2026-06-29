document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'Wird gesendet...';
  status.className = 'form-status';

  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    const result = await response.json();

    if (result.success) {
      status.textContent = 'Vielen Dank! Ihre Nachricht wurde gesendet.';
      status.className = 'form-status success';
      form.reset();
    } else {
      status.textContent = 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie uns an.';
      status.className = 'form-status error';
    }
  } catch (err) {
    status.textContent = 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie uns an.';
    status.className = 'form-status error';
  } finally {
    submitBtn.disabled = false;
  }
});
