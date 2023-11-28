const dummy = (blogs) => {
    
    return 1
  }
  
  const totalLikes=(blogPosts)=> {
    let total = 0;
  
    for (let i = 0; i < blogPosts.length; i++) {
      const post = blogPosts[i];
      total += post.likes;
    }
  
    return total;
  }
  module.exports = {
    dummy,
    totalLikes 
  }