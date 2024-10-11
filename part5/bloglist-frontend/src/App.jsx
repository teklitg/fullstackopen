import { useState, useEffect } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';
import logInService from './services/login';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");

  // Check local storage for logged-in user on initial load
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
     // blogService.setToken(user.token);  // Set token for authenticated requests
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

      // Save user to local storage to keep login persistent
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(returnedUser));
      
      // blogService.setToken(returnedUser.token);  // Set token for authenticated requests
      
      setUsername('');  // Clear input fields after successful login
      setPassword('');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem('loggedBlogAppUser');  // Clear user from local storage on logout
  };

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
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
      <h2>blogs</h2>
      <div>
        {`${user.name} logged in`} 
        <button onClick={handleLogout}>Logout</button>
      </div>
      {blogs.map(blog => 
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  );
};

export default App;
