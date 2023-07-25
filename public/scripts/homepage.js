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

function onLikeComment(commentId, element) {
  fetch(`/api/comments/like/${commentId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        document.getElementById(`likes-${commentId}`).innerHTML = data.likes;

        element.onclick = null;
      });
      // document.location.reload();
    } else {
      alert('Failed to like comment');
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
const openModals = document.querySelectorAll('.open');
const closeModals = document.querySelectorAll('.close');

openModals.forEach((openModal, index) => {
  openModal.addEventListener('click', () => {
    const modal = document.querySelectorAll('.modal')[index];
    modal.showModal();
  });
});

closeModals.forEach((closeModal, index) => {
  closeModal.addEventListener('click', () => {
    const modal = document.querySelectorAll('.modal')[index];
    modal.close();
  });
});

const newCommentHandler = async (postId) => {
  const post_id = `${postId}`;
  const comment_text = document
    .querySelector(`#cmnt-text-${postId}`)
    .value.trim();

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

function lightFunction() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

// Function to hide comment posting elements if a user is not logged in
// Necessary because conditionally rendering these elements in handlebars wouldn't work
const updateCommentElementVisibility = () => {
  
  const logged_in = document.body.getAttribute('data-logged-in');

  // Check if the user is logged in and hide the comment input and button if not
  const commentElementsToHide = document.querySelectorAll('.comment-hidden');
  commentElementsToHide.forEach((element) => {
    if (!logged_in) {
      element.style.display = 'none'
    }
  });
};

document.addEventListener('DOMContentLoaded', updateCommentElementVisibility);


document
  .querySelector('#logout-button')
  .addEventListener('click', logoutHandler);

document
  .querySelector('#post-button')
  .addEventListener('click', newPostHandler);