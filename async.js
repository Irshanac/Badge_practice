async function saveUserData(userId) {
    try {
      const user = await getUserData(userId);
      const posts = await getPosts(user);
      const comments = await getComments(posts);
      const response = await saveData(comments);
      console.log("Data saved!");
    } catch (error) {
      console.error(error);
    }
  }
  
  saveUserData(userId);
  