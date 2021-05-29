import React from 'react'
import DeleteReview from './DeleteReview';
import UpdateComment from './UpdateComment';

const ReviewsComponent = (props) => {

    const reviews = props.reviews; 
    let counter = 0;
    //console.log(reviews[0]);
    return (
        <div className="ReviewsComp">
            <h5> here are the comments: </h5> 
            {reviews.map((review) => (
                    <div key={counter} > 
                        <DeleteReview reviews={reviews} reviewID={review.Original_Id} postID={review.post_id} /> 
                        <p>{review.Original_Id}</p> 
                        <div className="Stickydiv" >
                            <h2>{counter = counter+1}-{review.username}</h2> 
                            <UpdateComment reviews={reviews} ElementToEdit="username" postid={props.postid} />
                                
                        </div> 
                        <br></br>
                        <div className="Stickydiv">
                            <h1> {review.comment}</h1> 
                            <UpdateComment reviews={reviews} ReviewToEdit={review} />
                        </div>  
                        <br></br>
                        <div className="Stickydiv">
                            <h1> {review.score}</h1> 
                            <UpdateComment reviews={reviews} ReviewToEdit={review} />
                        </div>
                        
                        

                        <div>
                        
                        </div> 


                        
                        
                        
                        
                          
                        
                        <br /> 
                        
                    </div> 
                    
                    ))}
        </div>
        
    )
}

export default ReviewsComponent
