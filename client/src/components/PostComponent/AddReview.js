import React,{ useState } from 'react';
import {
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    Form, 
    FormGroup,
    Container, 
    Label, 
    Input
} from 'react-bootstrap'; 
import axios from 'axios';

const AddReview = (props) => { 

    const [AddedReviewID,setAddedReviewID] = useState();
    const [show, setShow] = useState(false); 

  //const[AddedPost,setAddedPost] = useState({}); 
  
  //const[CurrentReviews,setCurrentReviews] = useState(props.reviews); 
  const[Username,setUsername] = useState(''); 
   
  const[Comment,setComment] = useState(''); 
  const[Score,setScore] = useState(0);
  //const[DateCreated,setDateCreated] = useState(new Date()); 

  var today = new Date();

  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    

  const onChangeUsername = (e) => { 

    setUsername(e.target.value)
} 
  
  const onChangeComment = (e) => { 

      setComment(e.target.value)
  } 
  const onChangeScore = (e) => {
      setScore(e.target.value)
  }

  const handleClose = () => setShow(false);
const handleShow = () => setShow(true); 
const SubmitPost = async (e) => { 
    e.preventDefault();
    const Review = {
         
        username: Username, 
        post_id: props.id ,
        comment: Comment, 
        score: Score, 
        date: date, 
        
    }   
    /*console.log(Review);
    console.log(props.reviews);
    const CurrentReviews = [...props.reviews,Review]; 
    console.log(CurrentReviews);*/
    axios.post('http://localhost:5000/reviews/add',Review) 
      .then(response =>  {
       
        
        console.log(response.data._id); 
        //setAddedReviewID(response.data._id); 
        //console.log(AddedReviewID);
        axios.patch('http://localhost:5000/posts/update/' + props.id , { "reviews": [...props.reviews,{Original_Id: response.data._id ,username: Username, post_id: props.id ,comment: Comment, score: Score, date: date,
      }
        ] });
        window.location.reload();
      })
      .catch(error => console.log(error)); 
      
      
      
    /*axios.patch('http://localhost:5000/posts/update/' + props.id , { "reviews": [...props.reviews,{
        Original_Id: AddedReviewID,
        username: Username, 
        post_id: props.id ,
        comment: Comment, 
        score: Score, 
        date: date,
    }] });*/
   
    //axios.get('http://localhost:5000/reviews/')
    
    //
    //
}


    return (
        <div>
        <button onClick={()=>(console.log(props.reviews))}>
        click
    </button>
        <Button className="EDIT btn btn-outline-info btn-sm" variant="primary" onClick={handleShow}>
        Add Review
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header> 
      <Container>
          <Form classname="container" onSubmit={SubmitPost}>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter title" value={Username} onChange={onChangeUsername} />
                 
              </Form.Group> 
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>comment</Form.Label>
                  <Form.Control type="text" placeholder="Enter title" value={Comment} onChange={onChangeComment} />
                 
              </Form.Group> 

              <Form.Group controlId="formBasicEmail">
                  <Form.Label>score</Form.Label>
                  <Form.Control type="number" placeholder="Enter title" value={Score} onChange={onChangeScore} />
                 
              </Form.Group>

              

             
              
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
      </Container>
      

      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  
        </div>
    )
}

export default AddReview
