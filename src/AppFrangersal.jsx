import './index.css'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Rendimiento from './components/Rendimiento'
import { LanguageProvider } from './context/LanguageContext'

const AppFrangersal = () => {

  return (
    <LanguageProvider>
        <Header />
        <Body />
        <Footer />
        <Rendimiento />
    </LanguageProvider>
  )
}

export default AppFrangersal

