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
import { Logo } from './components/Logo'
import mainStyles from '~/styles/app.css'
import { ThemeSwitchButton, ThemeSwitcher } from './components/ThemeSwitcher'

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
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Whisper&display=swap',
    },
    { rel: 'stylesheet', href: mainStyles },
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script
          src="https://kit.fontawesome.com/2c7b494e80.js"
          crossorigin="anonymous"
        ></script>
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeSwitcher>
          <div className="fixed bottom-10 right-10">
            <ThemeSwitchButton />
          </div>
          <div className="container mx-auto px-10 py-24">
            <div className="flex divide-x-2 divide-gray-100">
              <aside className="flex-initial w-1/5 pr-10">
                <Logo />
                <ul className="pt-3 list-none">
                  <li className="mx-0">
                    <Link to="/posts">Posts</Link>
                  </li>
                </ul>
              </aside>
              <main className="flex-initial w-4/5 pl-10 max-w-screen-lg">
                <Outlet />
              </main>
            </div>
          </div>
        </ThemeSwitcher>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
