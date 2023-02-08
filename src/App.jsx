import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'

function LightIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
      />
    </svg>
  )
}

function DarkIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
      />
    </svg>
  )
}

function Button({ onClick, children, className }) {
  console.log(className)
  return (
    <button
      className={[
        'px-4 py-2.5 rounded-md focus:ring-4 focus:ring-blue-700/10 inline-flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors',
        className,
      ].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState(0)

  const changeTheme = theme => {
    localStorage.theme = theme
    switchTheme()
    setTheme(theme)
  }

  const switchTheme = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setTheme('light')
    }
  }

  useEffect(() => {
    switchTheme()
  }, [])

  return (
    <section className='w-full h-screen grid place-content-center'>
      <div className='max-w-md mx-auto px-4'>
        <h1 className='text-lg font-semibold text-slate-800 tracking-wider dark:text-slate-100'>RAN - UI</h1>
        <p className='text-slate-400 text-sm tracking-widest leading-relaxed mt-2'>
          RAN merupakan sebuah platform download anime gratis yang disediakan oleh kami untuk kebutuhan para wibu-wibu yang ingin menonton anime
          tetapi tidak mampu untuk berlangganan pada situs ANIME berbayar.
        </p>

        <div className='space-x-3 mt-5'>
          <Button className={theme === 'light' ? 'bg-blue-700 text-white' : 'text-blue-700'} onClick={() => changeTheme('light')}>
            <LightIcon />
          </Button>
          <Button className={theme === 'dark' ? 'bg-blue-700 text-white' : 'text-blue-700'} onClick={() => changeTheme('dark')}>
            <DarkIcon />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default App
