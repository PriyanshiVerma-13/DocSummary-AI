import { useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MainContent from './components/MainContent'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'



function App() {
  
  return (
    <>
      <div className="font-sana">
        <Header />
        <HeroSection />
        <MainContent  />
        <FeaturesSection />
        <Footer />

        </div>
    </>
  )
}

export default App
