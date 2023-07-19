const loginFormHandler = async (event) => {
  event.preventDefault();

  const user_email = document.querySelector('#email-login').value.trim();
  const user_password = document.querySelector('#password-login').value.trim();

  if (user_email && user_password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user_email, user_password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector('#username-signup').value.trim();
  const user_email = document.querySelector('#email-signup').value.trim();
  const user_password = document.querySelector('#password-signup').value.trim();

  if (user_name && user_email && user_password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ user_name, user_email, user_password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.addEventListener('submit', (event) => {
  const element = event.target;

  if (element.matches('.login-form')) {
    loginFormHandler(event);
  }

  if (element.matches('.signup-form')) {
    signupFormHandler(event);
  }
});
