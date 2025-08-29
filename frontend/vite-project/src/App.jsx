import { useState } from 'react'
import './App.css'
import Header from './components/header'
import HeroSection from './components/heroSection'
import MainContent from './components/mainContent'
import FeaturesSection from './components/featuresSection'
import Footer from './components/footer'


function App() {

  return (
    <>
      <div className="font-sana">
        <Header />
        <HeroSection />
        <MainContent />
        <FeaturesSection />
        <Footer />
        

        </div>
    </>
  )
}

export default App
