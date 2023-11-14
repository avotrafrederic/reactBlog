import React from 'react'
import { Route, Routes, ScrollRestoration } from 'react-router-dom'
import Home from '../pages/Home'
import Base from '../layouts/Base'
import AllPosts from '../pages/AllPosts'
import Posts from './../pages/Posts/Posts'
import Admin from '../layouts/Admin'
import AdminPosts from '../admin/AdminPosts'
import Dashboard from '../admin/Dashboard'

export default function Router() {
  return (
    <Routes>
        
        <Route path='' element={<Base/>}>
            <Route path='' element={<Home/>}></Route>
            <Route path='myposts' element={<AllPosts/>}></Route>
            <Route path='myposts/:id' element={<Posts/>}></Route>
        </Route>
        <Route path='admin' element={<Admin/>}>
            <Route path='posts' element={<AdminPosts/>}></Route>
            <Route path='dashboard' element={<Dashboard/>}></Route>
        </Route>
    </Routes>
  )
}
