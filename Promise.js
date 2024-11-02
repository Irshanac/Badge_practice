getUserData(userId)
  .then(user => getPosts(user))
  .then(posts => getComments(posts))
  .then(comments => saveData(comments))
  .then(response => console.log("Data saved!"))
  .catch(error => console.error(error));
