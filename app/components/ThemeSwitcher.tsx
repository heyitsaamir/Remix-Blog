import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
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

const GlobalStyle = createGlobalStyle`
  html {
    --main-width: 720px;
    --gap: 24px;
    --radius: 8px;

    @media screen and (max-width: 768px) {
      --gap: 14px;
    }
  }

  body {
    background-color: ${(props) => props.theme.colors.background};

    h1,
    h2,
    h3 {
      font-family: "Roboto Slab", serif;
    }
  }

  a {
    font-weight: 400;
    color: ${(props) => props.theme.colors.primaryBrand};
  }
  a:hover {
    color: ${(props) => hexWithAlpha(props.theme.colors.primaryBrand, 0.7)};
  }
`

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
  const [currentTheme, setTheme] = useState<ThemeType>('dark')

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
  const theme = useMemo(
    () => (currentTheme === 'light' ? lightTheme : darkTheme),
    [currentTheme]
  )
  return (
    <Context.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {props.children}
      </ThemeProvider>
    </Context.Provider>
  )
}

export const useThemeSwitcher = () => useContext(Context)
