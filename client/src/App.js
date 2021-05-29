import React, { useState,useEffect } from 'react'; 
import Axios from "axios";
import './App.css'; 
import PostsComponent from './components/PostsComponent'; 
import { Button,Modal } from 'react-bootstrap'; 
import AddPost from './components/AddPost';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {

  const [Posts, setPosts] = useState([]);  
  const [Reviews,setReviews] = useState([]);
  
  
  
  useEffect(() => { 
    
    Axios.get('http://localhost:5000/posts')
    .then((response) => { 
      
      
      const Postsdata = response.data; 
      setPosts(Postsdata); 
      

      
    });  

    
    
  }, [])

  

  
  
  

  const PostsJson = JSON.stringify(Posts);
  return (
    
    <div className="App"> 
      
      <h1>Hello from app</h1>  
       
      <AddPost Posts={Posts} setPosts={setPosts} />
      <PostsComponent posts={Posts} setPosts={setPosts} />
      <p>
        {PostsJson}
      </p>
    </div>
  );
}

export default App;
