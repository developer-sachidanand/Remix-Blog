import { Outlet, LiveReload, Link, Links, Meta} from 'remix';
import globalStylesheetUrl from '~/styles/global.css';

export const links = () => [{rel: "stylesheet", href: globalStylesheetUrl }]

export const meta = () => {
  const description = "A cool blog built with Remix"
  const keywords = "remix, react, javascript"
  return {
    description,
    keywords,
  }
}

export default function app() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html>
      <head>
        <Links />
        <Meta />
        <title>{ title ? title : 'My Remix Blog'}</title>
      </head>
      <body>
        { children }
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <>
      <nav className='navbar'>
        <Link to="/" className="logo">
          Remix
        </Link>
        <ul className='nav'>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        {children}
      </div>
    </>
  )
}

export function ErrorBoundary({ error }) {
  console.log(error)
  return (
      <Document>
        <Layout>
          <h1>Error</h1>
          <p>{error.message}</p>
        </Layout>
      </Document>
  )
}