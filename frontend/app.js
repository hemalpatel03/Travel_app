document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert('User registered successfully');
    } else {
        alert('Error registering user');
    }
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert('User logged in successfully');
        window.location.href = "/travel-app/tourly/index.html";
    } else {
        alert('Error logging in');
    }
});

document.getElementById('logoutButton').addEventListener('click', async () => {
    const response = await fetch('/api/auth/logout');
    if (response.ok) {
        alert('User logged out successfully');
    } else {
        alert('Error logging out');
    }
});
