import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import AISection from './components/AISection'
import CoursesSection from './components/CoursesSection'
import TrustedCompanies from './components/TrustedCompanies'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Categories />
      <AISection />
      <CoursesSection />
      <TrustedCompanies />
    </div>
  )
}

export default App
