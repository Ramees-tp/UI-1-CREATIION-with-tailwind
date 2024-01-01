import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './assets/Header'
import '../src/index.css'
import Content from './Content'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Content/>
    <Footer/>
  </React.StrictMode>,
)
