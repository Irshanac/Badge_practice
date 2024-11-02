getUserData(userId, function(user) {
    getPosts(user, function(posts) {
      getComments(posts, function(comments) {
        saveData(comments, function(response) {
          console.log("Data saved!");
        });
      });
    });
  });
  