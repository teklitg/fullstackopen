import { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from './components/Blog';
import blogService from './services/blogs';
import logInService from './services/login';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationStyle, setNotificationStyle] = useState({});  // New state for dynamic styles

  // Check local storage for logged-in user on initial load
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);

      setUser(user);
    }
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await blogService.getAll();
        setBlogs(blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      username,
      password
    };
  
    try {
      const returnedUser = await logInService.logIn(credentials);
      setUser(returnedUser);
  
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(returnedUser));
      
      setUsername('');  // Clear input fields after successful login
      setPassword('');
    } catch (error) {
      console.error('Login failed:', error);
      setNotification("Wrong username or password");
      setNotificationStyle({
        color: 'red',
        border: '2px solid red',
        padding: '10px',
        marginBottom: '10px'
      });
  
      // Clear the notification after 5 seconds
      setTimeout(() => {
        setNotification('');
      }, 5000);
    }
  };
  

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem('loggedBlogAppUser');  // Clear user from local storage on logout
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const newBlog = {
        title,
        author,
        url,
      };
  
      // Call the create function from blogService
      const createdBlog = await blogService.create({ datas: newBlog, token: user.token });
  
      // Add the newly created blog to the list
      setBlogs([...blogs, createdBlog]);
  
      // Clear input fields after successful post
      setTitle('');
      setAuthor('');
      setUrl('');
  
      // Set notification for successful post
      setNotification(`A new blog "${createdBlog.title}" by ${createdBlog.author} added`);
      setNotificationStyle({
        color: 'green',
        border: '2px solid green',
        padding: '10px',
        marginBottom: '10px',
      });
  
      // Clear notification after 5 seconds
      setTimeout(() => {
        setNotification("");
      }, 5000);
  
    } catch (error) {
      console.error("Error posting blog:", error);
  
      // Set red notification for failed post
      setNotification("Failed to post blog");
      setNotificationStyle({
        color: 'red',
        border: '2px solid red',
        padding: '10px',
        marginBottom: '10px',
      });
  
      // Clear notification after 5 seconds
      setTimeout(() => {
        setNotification('');
      }, 5000);
    }
  };
  
  
  

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        {notification && (
            <div style={notificationStyle}> {/* Dynamic styling applied */}
              {notification}
            </div>
          )}
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>Blogs</h2>
      <div>
        {`${user.name} logged in`} 
        <button onClick={handleLogout}>Logout</button>
        <form onSubmit={handlePost}>
          <h2>Create New</h2>
          {notification && (
            <div style={notificationStyle}> {/* Dynamic styling applied */}
              {notification}
            </div>
          )}
          <label>
            Title: 
            <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text" />
          </label>
          <br />
          <label>
            Author:
            <input 
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text" />
          </label>
          <br />
          <label>
            URL: 
            <input 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              type="text" />
          </label>
          <br />
          <button>Create</button>
        </form>
      </div>

      {blogs.map(blog => 
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  );
};

export default App;
