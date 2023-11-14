import React, { useEffect, useState } from 'react'
import Header from '../partials/Header'
import { ScrollRestoration, useLocation } from 'react-router-dom';
import Articles from './Home/Articles';
import axios from 'axios';
import API from './../api/Api'

export default function AllPosts() {
    const title = "MonBlog";
    const [link,setLink]=useState("")
    const location = useLocation()
    const [post,setPost] = useState([]);
    
    useEffect(()=>{
        API.get("allposts").then(response =>{
          setPost(response.data)
        })
        setLink(location.pathname)
    },[location])
  return (
    <>
        <Header title={title} link={link.substring(1)} />
        <Articles articles={post}/>
    </>
  )
}
