import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { MetaFunction } from 'remix'
import { useContext } from 'react'
import StylesContext from './StylesContext'
import { Layout, Main, Nav } from './components/Layout'
import { Logo } from './components/Logo'
import { ThemeSwitcher } from './components/ThemeSwitcher'

export const meta: MetaFunction = () => {
  return { title: 'Aamir Jawaid' }
}

export const links = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap',
    },
  ]
}

export default function App() {
  const styles = useContext(StylesContext)
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {process.env.NODE_ENV === 'development'
          ? styles !== null && (
              <style
                dangerouslySetInnerHTML={{ __html: `</style>${styles}<style>` }}
              />
            )
          : styles}
      </head>
      <body style={{ margin: 0 }}>
        <Layout>
          <Nav>
            <Logo />
            <ul>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
          </Nav>
          <Main>
            <ThemeSwitcher>
              <Outlet />
            </ThemeSwitcher>
          </Main>
        </Layout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
