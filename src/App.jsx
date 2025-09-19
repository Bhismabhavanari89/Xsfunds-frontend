import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Banner from './components/Banner'
import Advantages from './components/Advantages'
import Growth from './components/Growth'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import StockvsFd from './components/StockvsFd'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Banner/>
              <About/>
              <Advantages/>
              <Growth/>
              <ContactForm/>
            </>
          } />
          <Route path="/stockvsfd" element={<StockvsFd />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App
