import React, { useCallback, useEffect, useState } from 'react'
import { Card, Spinner} from 'react-bootstrap'
import Api from '../api/Api';
import { toast,ToastContainer } from 'react-toastify';
import { ConfirmToast } from 'react-confirm-toast';
import AddArticle from '../modal/AddArticle';

export default function AdminPosts() {
    const [posts,setPosts] = useState([]);
    const [counter,setCounter] =useState(0);
    const [show,setShow] =useState(false);
    const handleClose = ()=>setShow(false);
    const handleShow =()=>setShow(true);
    const Increment =()=>setCounter(counter+1);
    const [isLoading,setIsLoading] = useState(true);
    let fetchData = useCallback(async ()=>{
        let response = await Api.get('allposts').then(res => res.data);
        setPosts(response);
        setIsLoading(false)
    },[]);

    useEffect(()=>{
        fetchData();
    },[fetchData,counter])


    let deletePosts = async (id)=>{
        let res = await Api.delete(`deleteArticle/${id}`).then(response => response.data)
        toast.success(`${res.success}`,{
            position:toast.POSITION.TOP_CENTER
        })
        Increment();
    }
  return (
    <>
   <Card className='bg-dark text-white my-1'>
        <Card.Header className='d-flex flex-row justify-content-between align-items-center'>
            <h5 className='text-sm'>Articles</h5>
            <button className='btn btn-warning' onClick={handleShow}>Add</button>
        </Card.Header>
        <Card.Body>
            {
                isLoading ? <Spinner animation='border'/> : (
                    <div className='table-responsive'>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>title</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>auteur</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((element,index) =>{
                            return(
                                <tr key={element.id}>
                                    <th scope='row'>{index + 1 }</th>
                                    <td>{element.title}</td>
                                    <td>{element.description.slice(0,50) +'...'}</td>
                                    <td>{element.author}</td>
                                    <td className='d-flex flex-row'>
                                        <button className='btn btn-info btn-sm mx-2'>voir</button>
                                        <button className='btn btn-success btn-sm'>Edit</button>
                                        <ConfirmToast customFunction={()=>{deletePosts(element.id)}} asModal={true} message='Voulez-vous continuer? cette action est irréversible' theme='snow' customCancel='annuler' customConfirm='continuer' showCloseIcon={false}>
                                            <button className='btn btn-danger btn-sm mx-2'>Delete</button>
                                        </ConfirmToast>
                                        
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
                )
            }
            
        </Card.Body>
   </Card>
   <ToastContainer/>
   <AddArticle show={show} hide={handleClose} update={Increment}/>
   </>
  )
}
