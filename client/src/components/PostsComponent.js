import React from 'react'
import ReviewsComponent from './ReviewsComponent'; 
import Post from './PostComponent/Post'; 
import DeletePost from './PostComponent/DeletePost';

//import './PostsComponent.css'; 
const PostsComponent = (props) => {
    const data = props.posts; 
    const setdata = props.setPosts; 
    //const reviews = data.reviews; 

    
    return (
        <div className="PostDiv">
                
                <ol > 
                    {data.map((post) => (
                    <li className="specificPostDiv" key={post._id}  > 

                        

                        <Post id={post._id} title = {post.title} creator = {post.creator} score= {post.score} description = {post.description} reviews = {post.reviews}  />
                        
                         
                        
                        <ReviewsComponent postid={post._id} reviews={post.reviews} /> 
                        
                        <DeletePost id={post._id} posts={data} setPosts={setdata}  /> 
                        <hr /> 
                        <br />
                    </li>
                    ))}
                </ol> 
        </div>
    )
}

export default PostsComponent
