const logoutHandler = async (event) => {
  event.preventDefault();

  const response = await fetch("/api/users/logout", {
    method: "POST",
    body: "",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to logout");
  }
};

const logoutButton = document.querySelector("#logout-button");
if (logoutButton) {
  logoutButton.addEventListener("click", logoutHandler);
}

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

function onLikePost(postId, element) {
  fetch(`/api/posts/like/${postId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        document.getElementById(`likes-${postId}`).innerHTML = data.likes;

        element.onclick = null;
      });
      // document.location.reload();
    } else {
      alert("Failed to like post");
    }
  });
}

function onLikeComment(commentId, element) {
  fetch(`/api/comments/like/${commentId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        document.getElementById(`likes-${commentId}`).innerHTML = data.likes;

        element.onclick = null;
      });
      // document.location.reload();
    } else {
      alert("Failed to like comment");
    }
  });
}

function onNewPost() {
  console.log("new post");
  const postText = document.getElementById("post-text").value.trim();

  if (postText) {
    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        post_title: postText,
        post_content: postText,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to create post");
      }
    });
  }
}

function onSelectTag() {
  const selectedTag = document.getElementById("tag-select").value;
  if (selectedTag) {
    const postTextEl = document.getElementById("post-text");
    const postText = postTextEl.value.trim();
    postTextEl.value = `${postText} ${selectedTag} `;
  }
}

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click', () => {
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});


  /*/ Comment drop down section
  const commentBtn = document.getElementById("comment-btn");
  const commentsDrop = document.getElementById("comments-drop");

  commentBtn.addEventListener("click", function() {
  if (commentsDrop.style.display === "block") {
    commentsDrop.style.display = "none";
  } else {
    commentsDrop.style.display = "block";
  } } ) */