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


  // Comment drop down section

  document.addEventListener("DOMContentLoaded", function() {
    var commentBtn = document.getElementById("comment-btn");
    var commentsDrop = document.getElementById("comments-drop");

    commentBtn.addEventListener("click", function() {
      if (commentsDrop.style.display === "block") {
        commentsDrop.style.display = "none";
      } else {
        commentsDrop.style.display = "block";
      }
    });
  });

const newCommentHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector('post-id').value.trim();
  const comment_text = document.querySelector('#comment-text').value.trim();

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

