// pages/_app.js
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-primary">
      <Component {...pageProps} />
    </div>
  )
}