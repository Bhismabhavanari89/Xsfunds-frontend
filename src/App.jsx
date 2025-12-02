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
import FAQ from './components/faqs'
import TermsAndConditions from './components/TermsAndConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import BlogHomePage from './components/BlogHomePage'
import BlogPage from './components/Blogs/BlogPage'
import WorldClock from './components/WorldClock'

function App() {

  return (
    <>
    <Router>
      <Header />
      <WorldClock/>
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
          <Route path="/faqs" element={<FAQ/>} />
          <Route path="/tandc" element={<TermsAndConditions/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/blogs" element={<BlogHomePage/>} />
          <Route path="/blog" element={<BlogPage/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App
