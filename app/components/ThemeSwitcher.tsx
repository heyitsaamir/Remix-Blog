import classNames from 'classnames'
import React, {
  PropsWithChildren,
  RefForwardingComponent,
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

type ThemeKeys = 'BG' | 'TextColor'
type Theme = Record<ThemeKeys, string>

const LIGHT: Theme = {
  BG: 'bg-slate-50',
  TextColor: 'text-slate-700',
}

const DARK: Theme = {
  BG: 'dark:bg-slate-700',
  TextColor: 'dark:text-slate-50',
}

const CURRENT_THEME_MAP: Record<ThemeType, Theme> = {
  dark: DARK,
  light: LIGHT,
}

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
      <div className={currentTheme}>
        <div
          className={classNames(
            'min-h-screen min-w-screen',
            Object.values(CURRENT_THEME_MAP[currentTheme]).flat()
          )}
        >
          {props.children}
        </div>
      </div>
    </Context.Provider>
  )
}

export const useThemeSwitcher = () => useContext(Context)

export const ThemeSwitchButton = () => {
  const { toggle } = useThemeSwitcher()

  return (
    <button
      onClick={toggle}
      className="hover:dark:text-slate-50 hover:text-slate-900 text-amber-400 text-lg"
    >
      <i className="fa-solid fa-sun"></i>
    </button>
  )
}
