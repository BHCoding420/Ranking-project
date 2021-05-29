import axios from 'axios';
import { Button } from 'bootstrap';
import React from 'react';


const DeleteReview = (props) => { 

    const deleteReviewfunc = async () => { 
        const NewReviews =  props.reviews.filter(review => review.Original_Id !== props.reviewID);  
        //console.log(props.reviewID); 
        //console.log(NewReviews);
        //console.log(NewReviews)
        //const res1 = await Axios.delete('http://localhost:5000/reviews/' + props.reviewID);  
        console.log(props.postID);
        axios.delete('http://localhost:5000/reviews/' + props.reviewID) 
        .then(response =>  {console.log(response)
          axios.patch('http://localhost:5000/posts/update/' + props.postID , { "reviews": NewReviews });
          window.location.reload();
        })
        .catch(error => console.log(error));
        
        
        
        //const res2 = await Axios.patch('http://localhost:5000/posts/update/' + props.postID , { "reviews": NewReviews });

        
        //console.log(props.reviews); 
         
        //console.log(props.postID);
    }

    return (
        <div>
            <button onClick={()=>deleteReviewfunc()}>
                delete review
            </button>
        </div>
    )
}

export default DeleteReview
