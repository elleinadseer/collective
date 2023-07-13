const postEl = document.getElementById('posts');
const refreshButton = document.getElementById('post-btn');

// Invoked by the buttonHandler function to fetch posts from the data store
const getPosts = async () => {
  const result = await fetch('/api/posts', {
    method: 'GET',
  });
  const json = await result.json();
  return json;
};

// Invoked by the forEach() method in the buttonHandler function to properly set up each post to be rendered to the index.html page
const renderPost = (post) => {
  const cardEl = document.createElement('div');
  const cardBodyEl = document.createElement('div');
  const cardBodyTitle = document.createElement('div');

  cardEl.classList.add('card', 'p-5');
  cardBodyEl.classList.add('card-body', 'p-5');
  cardBodyTitle.classList.add('card-header', 'card-title', 'link');

  cardBodyTitle.innerHTML = `<a href=${post.url}>${post.post}</a>`;
  cardBodyEl.innerText = post.definition;
  postEl.appendChild(cardBodyTitle);
  postEl.appendChild(cardBodyEl);
};

// Event Listener calls this method to invoke the getposts function and render each returned 'post' to the test.html page
const buttonHandler = () =>
  getPosts().then((response) => response.forEach((item) => renderPost(item)));

// Event Listener invoked when the refresh button is clicked
refreshButton.addEventListener('click', buttonHandler);


// -----------------------

// Get references to the necessary elements
const likeCountElement = document.getElementById('likeCount');
const likeButton = document.getElementById('likeButton');

// Function to update the like count
const updateLikeCount = async () => {
  try {
    // Send a request to the back-end to increment the like count
    const response = await fetch('/api/like', {
      method: 'POST',
    });

    // Check if the request was successful
    if (response.ok) {
      // Update the like count display with the new value returned from the server
      const { count } = await response.json();
      likeCountElement.textContent = count;
    }
  } catch (error) {
    console.error('Error updating like count:', error);
  }
};

// Attach a click event listener to the like button
likeButton.addEventListener('click', updateLikeCount);