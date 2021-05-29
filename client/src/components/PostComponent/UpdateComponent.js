import React,{useState} from 'react'
import { Button,Modal,Form,Container } from 'react-bootstrap';
import axios from 'axios'; 
import './Post.css'; 
import { FaEdit } from 'react-icons/fa';

const UpdateComponent = (props) => { 

    const Elt = props.Elt;
    const [Element,setElement] = useState() 
    const [show, setShow] = useState(false); 
    const handleShow = () => {
        setShow(true);
    } 
    const handleClose = () => {
        setShow(false);
    } 
    const onChangeElement = (e) => { 

        setElement(e.target.value)
    }

    const SubmitPost = async (e) => {
        e.preventDefault(); 
        console.log(Element); 
        const res = await axios.patch('http://localhost:5000/posts/update/' + props.id , { [props.tobeUpdated]: Element });

        console.log(res.data); 
        window.location.reload();
    }
    return (
        <div>
            <span className="EDIT" variant="primary" onClick={handleShow}>
                <FaEdit/>
            </span> 
            
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> 
        <Container>
            <Form classname="container" onSubmit={SubmitPost}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>{props.tobeUpdated}</Form.Label>
                    <Form.Control type="text" placeholder={Elt} value={Element} onChange={onChangeElement} />
                    
                </Form.Group>

                
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
        

       
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        
      </Modal>
        </div>
    )
}

export default UpdateComponent
