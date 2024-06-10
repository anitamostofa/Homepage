import React, { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import ReferencePage from './pages/ReferencePage'
import references from './components/references.json'
import './styles.css'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'))
    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode)
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', JSON.stringify(newMode))
      return newMode
    })
  }

  const routes = useRoutes([
    { path: '/', element: <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> },
    { path: '/referenzen/:id', element: <ReferencePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} references={references} /> }
  ])

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {routes}
      <Footer />
    </div>
  )
}

export default App
