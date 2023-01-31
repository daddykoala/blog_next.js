import '@/styles/globals.css'
import Container from '@/component/container/Container'

export default function App({ Component, pageProps }) {
  return (
    <Container>

      <Component {...pageProps} />
    </Container>
    
  )
}
