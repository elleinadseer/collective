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

function onLikePost(postId) {
  fetch(`/api/posts/like/${postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        document.getElementById(`likes-${postId}`).innerHTML = data.likes;
      });
      // document.location.reload();
    } else {
      alert('Failed to like post');
    }
  });
}

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

function onSelectTag() {
  const selectedTag = document.getElementById('tag-select').value;
  if (selectedTag) {
    const postTextEl = document.getElementById('post-text');
    const postText = postTextEl.value.trim();
    postTextEl.value = `${postText} ${selectedTag} `;
  }
}

document
  .querySelector('#post-button')
  .addEventListener('click', newPostHandler);

document
  .querySelector('#logout-button')
  .addEventListener('click', logoutHandler);
