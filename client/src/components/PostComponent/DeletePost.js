import React from 'react'
import { Button } from 'react-bootstrap';  
import Axios from "axios";

const DeletePost = (props) => {
    const {id,posts,setPosts} = props;

    const deletefunc = async () => {
        const reviews = Axios.get('http://localhost:5000/reviews/')
        .then(async (res) => {
            const data = await res.data; 
            console.log(data); 
            for (var x in  data)
            {
                if(data[x].post_id === id){
                    Axios.delete('http://localhost:5000/reviews/' + data[x]._id);
                    
                }
            }  


        }); 

        
        const res = await Axios.delete('http://localhost:5000/posts/' + id); 

        setPosts(posts.filter(post => post._id !== id)) 
        //console.log(reviews);
        //console.log("delete successfull");
    }

    return (
        <div>
            <Button className="btn btn-danger" onClick={() => deletefunc()}>
                Delete
            </Button>
        </div>
    )
}

export default DeletePost
