import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { hexWithAlpha } from './utils'

type ThemeType = 'light' | 'dark'

type ThemeWithSwitcher = {
  setTheme: (theme: ThemeType) => void
  toggle: () => void
  currentTheme: ThemeType
}

const Context = React.createContext<ThemeWithSwitcher>({
  setTheme: () => undefined,
  toggle: () => undefined,
  currentTheme: 'light',
})

const ThemeProvider = Context.Provider

const doesUserPreferDarkMode = () => {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
  return prefersDarkScheme.matches
}

const retrieveFromLocal = (): ThemeType | undefined => {
  const currentTheme = localStorage.getItem('theme')
  switch (currentTheme) {
    case 'light':
    case 'dark':
      return currentTheme
    default:
      undefined
  }
}

export const ThemeSwitcher = (props: PropsWithChildren<{}>) => {
  const [currentTheme, setTheme] = useState<ThemeType>('light')

  useEffect(() => {
    const themeInLocalStorage = retrieveFromLocal()
    if (themeInLocalStorage != null) {
      setTheme(themeInLocalStorage)
    } else {
      setTheme(doesUserPreferDarkMode() ? 'dark' : 'light')
    }
  }, [])

  const contextValue = useMemo<ThemeWithSwitcher>(
    () => ({
      setTheme: (theme: ThemeType) => {
        localStorage.setItem('theme', theme)
        setTheme(theme)
      },
      toggle: () => {
        setTheme((prev) => {
          const newTheme = prev === 'light' ? 'dark' : 'light'
          localStorage.setItem('theme', newTheme)
          return newTheme
        })
      },
      currentTheme,
    }),
    [setTheme, currentTheme]
  )

  return (
    <Context.Provider value={contextValue}>
      <div className={currentTheme}>{props.children}</div>
    </Context.Provider>
  )
}

export const useThemeSwitcher = () => useContext(Context)
