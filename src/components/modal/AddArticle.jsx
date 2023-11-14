import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal, Spinner} from 'react-bootstrap'
import Api from '../api/Api';
import { toast } from 'react-toastify';

export default function AddArticle(props) {
    const [posts,setPosts]=useState({});
    const [loading,setloading]=useState(false)
    const handleSubmit = async ()=>{
        setloading(true)
        let response = await Api.post("postsArticle",posts).then(res=>res.data);
        toast.success(`${response.success}`,{
            position:toast.POSITION.TOP_CENTER
        })
        props.hide();
        props.update();
        setloading(false);
        setPosts({})
    }

    const handleChange= (e)=>{
        setPosts({...posts,[e.target.name]:e.target.value})
    }
    return (
        <>
        <Modal show={props.show} onHide={props.hide}>
            <Modal.Header closeButton>
                <Modal.Title>Add Posts</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FloatingLabel
                        controlId='title'
                        label="title"
                        className='mb-3'
                    >
                        <Form.Control type='text' name='title' value={posts.title} placeholder='your title' onChange={handleChange} />
                    </FloatingLabel>
                    <FloatingLabel
                         controlId='author'
                         label="author"
                         className='mb-3'
                    >
                        <Form.Control type='text' name='author' value={posts.author} placeholder='your author'  onChange={handleChange} />
                    </FloatingLabel>
                    <FloatingLabel
                         controlId='description'
                         label="description"
                         className='mb-3'
                    >
                        <Form.Control as='textarea' name='description' value={posts.description} placeholder='your description' style={{height:'200px'}}  onChange={handleChange} />
                    </FloatingLabel>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.hide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {loading ? (<><Spinner animation='border' size='sm'/>saving...</>) : 'Save Changes'}
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
