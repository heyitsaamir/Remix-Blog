import ReactDOMServer from 'react-dom/server'
import { RemixServer } from 'remix'
import type { EntryContext } from 'remix'
import { ServerStyleSheet } from 'styled-components'
import StylesContext from './StylesContext'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const sheet = new ServerStyleSheet()
  let markup = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StylesContext.Provider value={null}>
        <RemixServer context={remixContext} url={request.url} />
      </StylesContext.Provider>
    )
  )

  const styles = sheet.getStyleTags()
  sheet.seal()
  markup = markup.replace('__STYLES__', styles)

  responseHeaders.set('Content-Type', 'text/html')

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
