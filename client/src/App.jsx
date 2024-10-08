import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import { imagiFY } from './assets'
import { CreatePost, Homepage } from './pages'
import Footer from './components/Footer'
// import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <img src='/test1.png' alt="logo" className='w-13 h-10 object-contain'/>
        </Link>
        <Link to="/create-post" className='font-inter font-medium bg-[#006769] text-white px-4 py-2 rounded-md'>Create</Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App