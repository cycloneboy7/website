const form = document.getElementById('login-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // add your own logic to validate the username and password
  if (username === 'admin' && password === 'password') {
    alert('Login successful!');
  } else {
    alert('Login failed!');
  }
});
