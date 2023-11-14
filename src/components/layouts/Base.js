import React, { useEffect, useState } from 'react'
import MyNavbar from './../partials/MyNavbar'
import MyFooter from './../partials/MyFooter'
import { Outlet } from 'react-router-dom'
export default function Base() {
    const title = "MonBlog"
    const [isScroll,setScroll]=useState(false)
    const handleScroll = (e)=>{
        if(window.scrollY > 70){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    useEffect(()=>{window.onscroll=handleScroll},[])
  return (
    <>
        <MyNavbar title={title} isScroll={isScroll}/>
        <Outlet/>
        <MyFooter/>
    </>
  )
}
