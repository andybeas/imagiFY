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
          <img src='/test1.png' alt="logo" className='w-13 h-10 object-contain' />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-semibold text-white px-5 py-2.5 rounded-lg 
             bg-gradient-to-r from-teal-600 to-emerald-500 
             shadow-md hover:shadow-lg hover:scale-[1.03] 
             transition-all duration-200 ease-in-out flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create
        </Link>

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