import { useEffect } from "react";
import Quote from "../components/Quote";

function Home() {


  const selectTheme = (value) => {
    localStorage.setItem('theme', value)

    const html = document.querySelector('html')

    html.classList.add(localStorage.getItem('theme'))

    if(value == "dark") {
      html.classList.remove('light')
    } else {
      html.classList.remove('dark')
    }
  }

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.removeItem('theme')
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-700">
      <div className="w-5/12">
        <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg mb-6 flex items-center justify-between">
          <div className="antialiased font-semibold text-lg text-gray-800 dark:text-white">Switcher</div>
          <div>
            <button onClick={() => selectTheme('light')} className="bg-yellow-300 hover:bg-yellow-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-yellow-200 px-2 py-1 rounded text-gray-800 inline-flex mr-2">Light</button>
            <button onClick={() => selectTheme('dark')} className="bg-gray-200 hover:bg-black dark:bg-black px-2 py-1 rounded text-white inline-flex">Dark</button>
          </div>
        </div>
        <Quote/>
      </div>
    </div>
  )
}

export default Home
