document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const messageDiv = document.getElementById('message');

  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    messageDiv.textContent = '';

    if (!name || !email || !phone || !password) {
      messageDiv.style.color = 'red';
      messageDiv.textContent = 'All fields are required!';
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await response.json();

      if (response.ok) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Signup successful! Redirecting...';
        setTimeout(() => {
          window.location.href = '/login.html'; // change to your login path
        }, 2000);
      } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = data.message || 'Signup failed';
      }
    } catch (err) {
      console.error('Signup error:', err);
      messageDiv.style.color = 'red';
      messageDiv.textContent = 'Something went wrong. Please try again.';
    }
  });
});
