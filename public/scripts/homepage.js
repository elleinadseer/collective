const logoutHandler = async (event) => {
  event.preventDefault();

  const response = await fetch('/api/users/logout', {
    method: 'POST',
    body: '',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to logout');
  }
};

const newPostHandler = async (event) => {
  event.preventDefault();

  const post_content = document.querySelector('#post-text').value.trim();

  if (post_content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ post_content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('#logout-button')
  .addEventListener('click', logoutHandler);

document
  .querySelector('#post-button')
  .addEventListener('click', newPostHandler);
