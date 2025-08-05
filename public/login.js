document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const messageDiv = document.getElementById('message');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    messageDiv.textContent = '';

    if (!email || !password) {
      messageDiv.style.color = 'red';
      messageDiv.textContent = 'All fields are required!';
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Login successful!';
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // or any page you redirect to
      } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = data.message || 'Login failed';
      }

    } catch (err) {
      console.error('Login error:', err);
      messageDiv.style.color = 'red';
      messageDiv.textContent = 'Something went wrong. Please try again.';
    }
  });
});
