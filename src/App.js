import React from 'react'
import "./assets/css/index.css"
import { BrowserRouter, ScrollRestoration} from 'react-router-dom'
import Router from './components/router/Router'

export default function App() {

   
  return (
      <BrowserRouter>
        <Router/>

      </BrowserRouter>
        
  )
}
