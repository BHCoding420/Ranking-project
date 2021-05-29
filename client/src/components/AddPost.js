import React, { useState,useEffect } from 'react';  
import Axios from "axios";
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

const AddPost = (props) => {
  const [show, setShow] = useState(false); 

  //const[AddedPost,setAddedPost] = useState({}); 
  
  const[Title,setTitle] = useState(''); 
  const[Uploader,setUploader] = useState(''); 
  const[Id,setId] = useState(); 
  const[Comment,setComment] = useState(''); 
  const[Score,setScore] = useState(0);
  //const[DateCreated,setDateCreated] = useState(new Date()); 

  var today = new Date();

  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  const onChangeTitle = (e) => { 

      setTitle(e.target.value)
  }  

  const onChangeUploader = (e) => { 

    setUploader(e.target.value)
} 
  
  const onChangeComment = (e) => { 

      setComment(e.target.value)
  } 
  const onChangeScore = (e) => {
      setScore(e.target.value)
  }

const handleClose = () => setShow(false);
const handleShow = () => setShow(true); 
const SubmitPost = (e) => { 
    e.preventDefault();
    const Post = {
        title: Title, 
        creator: Uploader, 
        //Id: Id,
        description: Comment, 
        score: Score, 
        date: date, 
        reviews: []
    }  
    //props.setPosts([...props.Posts,Post]);

    axios.post('http://localhost:5000/posts/add',Post) 
      .then(response => console.log(response))
      .catch(error => console.log(error)); 
    window.location.reload()
}

  return (
    <>
      <Button className="EDIT btn btn-outline-info btn-sm" variant="primary" onClick={handleShow}>
          Add post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> 
        <Container>
            <Form classname="container" onSubmit={SubmitPost}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={Title} onChange={onChangeTitle} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Uploader</Form.Label>
                    <Form.Control type="text" placeholder="Your name" value={Uploader} onChange={onChangeUploader} />
                </Form.Group> 

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Score</Form.Label>
                    <Form.Control type="number" placeholder="your score" min="0" max="10" value={Score} onChange={onChangeScore} />
                </Form.Group> 

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Your name" value={Comment} onChange={onChangeComment} />
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
    </>
  );
}

export default AddPost
