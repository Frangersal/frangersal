import './index.css'
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Rendimiento from './components/Rendimiento'
import { LanguageProvider } from './context/LanguageContext'

const AppFrangersal = () => {

  return (
    <LanguageProvider>
        <Body />
        <Footer />
        <Rendimiento />
    </LanguageProvider>
  )
}

export default AppFrangersal

