import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import { useContext } from "react";
import StylesContext from "./StylesContext";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  const styles = useContext(StylesContext);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {process.env.NODE_ENV === "development" ? 
          styles !== null && (<style dangerouslySetInnerHTML={{ __html:`</style>${styles}<style>` }} /> ) : styles
        }
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <Link to="/posts">Posts</Link>
      </body>
    </html>
  );
}
