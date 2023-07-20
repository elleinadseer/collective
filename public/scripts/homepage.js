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

function onLikePost(postId, element) {
  fetch(`/api/posts/like/${postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        document.getElementById(`likes-${postId}`).innerHTML = data.likes;

        element.onclick = null;
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
  const tag_name = document
    .querySelector('#tag-select')
    .value.trim()
    .replace('#', '');

  if (post_content && tag_name) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ post_content, tag_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create post');
    }
  } else {
    alert("Your post is either empty or you haven't selected a tag");
  }
};

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click', () => {
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});

const newCommentHandler = async (postId) => {

  const post_id = `${postId}`;
  const comment_text = document.querySelector('#cmnt-text').value.trim();

  if (post_id && comment_text) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ post_id, comment_text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('#logout-button')
  .addEventListener('click', logoutHandler);

document
  .querySelector('#post-button')
  .addEventListener('click', newPostHandler);
