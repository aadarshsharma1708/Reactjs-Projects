import { useEffect, useState } from 'react'


import { ThemeProvider } from './contexts/theme'
import './App.css'
// import { darkTheme, lightTheme, themeMode} from './themes/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/card'

function App() {
  const [themeMode, setThemeMode] = useState('light') // State to manage the current theme mode
  const lightTheme = () => {
    setThemeMode('light') // Function to set the theme to light
  }
  const darkTheme = () => {
    setThemeMode('dark') // Function to set the theme to dark
  }

  //actual change in theme
  useEffect(()=>{ 
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]) // Effect to update the HTML class based on the theme mode

  return (

    <ThemeProvider value = { {themeMode, darkTheme, lightTheme} }>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeButton/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
  </ThemeProvider>

  )
}

export default App
