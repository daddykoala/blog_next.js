import '@/styles/globals.css'
import Container from '@/component/container/Container'


//j'imlport le composant container et je l'englobe autour de tout les autres composants(un peu comme un provider)

//les pagesProps sont les props qui sont passées par nextjs.
export default function App({ Component, pageProps }) {
  return (
    <Container>

      <Component {...pageProps} />
    </Container>
    
  )
}
