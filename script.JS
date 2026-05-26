// ─── LOGIN ────────────────────────────────────────────────────
document.getElementById("loginForm")?.addEventListener("submit", async function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message  = document.getElementById("message");

  try {
    const res  = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();

    message.style.color = data.success ? 'green' : 'red';
    message.textContent = data.message;
  } catch(e) {
    message.style.color = 'red';
    message.textContent = 'Error al conectar con el servidor';
  }
});

// ─── REGISTER ─────────────────────────────────────────────────
document.getElementById("registerForm")?.addEventListener("submit", async function(event) {
  event.preventDefault();

  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;
  const message  = document.getElementById("reg-message");

  try {
    const res  = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();

    message.style.color = data.success ? 'green' : 'red';
    message.textContent = data.message;
  } catch(e) {
    message.style.color = 'red';
    message.textContent = 'Error al conectar con el servidor';
  }
});