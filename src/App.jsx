import React from 'react'
import Markdown from './components/Markdown'
import './App.css'
import Heading from './components/Heading'
import Footer from './components/Footer'
export default function App() {
  return (
    <div className='flex flex-col justify-center align-center'>
      <Heading/>
    <div className='flex w-screen justify-center'>
    <Markdown/>      
    </div>
    <Footer/>
    </div>
  )
}
