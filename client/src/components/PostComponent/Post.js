import React from 'react';
import './Post.css'; 
import { Button } from 'react-bootstrap'; 
import UpdateComponent from './UpdateComponent'; 
import AddReview from './AddReview';



const Post = (props) => {
    return (
        <div className="POST container">
                        
                               
                               <h1>{props.id}</h1>
                                <div className="d-flex w-100 justify-content-between">
                                    <div className="Stickydiv">
                                        <h1 className="PostTitle">{props.title}</h1> 
                                        <UpdateComponent id={props.id}  Elt={props.title} tobeUpdated="title" /> 
                                        
                                    </div>
                                
                                    
                                    <div>
                                        <div className="Stickydiv">
                                            <h5 className="Uploader" >Uploaded by : {props.creator}</h5> 
                                            <UpdateComponent id={props.id}  Elt={props.creator} tobeUpdated="creator" />
                                            
                                        </div> 
                                        <br/>
                                        <div className="Stickydiv">
                                            <h6 className="score">score: {props.score}</h6> 
                                            <UpdateComponent id={props.id}  Elt={props.score} tobeUpdated="score" />
                                            
                                        </div> 
                                        
                                        
                                    </div> 
                                  
                                </div>                   
                                

                                
                                
                                
                                <h3 className="Description">description : {props.description} 
                                <UpdateComponent id={props.id}  Elt={props.description} tobeUpdated="description" />
                                </h3>  
                                <AddReview reviews={props.reviews} id={props.id} />
                                
                                
                                
                                
                        
                        
        </div>
    )
}

export default Post
