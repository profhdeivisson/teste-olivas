import Header from './components/Header'
import About from './components/About'
import Performance from './components/Performance'
import ButtonWhatsapp from './components/ButtonWhatsapp'
import SEO from './components/SEO'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Blog from './components/Blog'

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <ButtonWhatsapp />
      <SEO />
      <Performance />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
