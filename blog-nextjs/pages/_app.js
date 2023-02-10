
import 'bootstrap/dist/css/bootstrap.min.css'



//j'imlport le composant container et je l'englobe autour de tout les autres composants(un peu comme un provider)

//les pagesProps sont les props qui sont passées par nextjs.
export default function App({ Component, pageProps }) {
  return (

      <Component {...pageProps} />
    
  )
}
