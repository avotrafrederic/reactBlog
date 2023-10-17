import React from 'react'
import MyNavbar from './components/partials/MyNavbar'
import Home from './components/pages/Home'
import "./assets/css/index.css"
import MyFooter from './components/partials/MyFooter'
export default function App() {
    const title = "MonBlog"
  return (
    <>
        <MyNavbar title={title}/>
        <Home title={title}/>
        <MyFooter/>
    </>
  )
}
