import { useState } from 'react'
import MainPage from './components/MainPage'
import About from './components/About'
import Services from './components/Services'
import ClientReview from './components/ClientReview'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <div >
      <MainPage />
      <About />
      <Services />
      <ClientReview />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
