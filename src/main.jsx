import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import AppFrangersal from './AppFrangersal.jsx'
import codeBgUrl from './assets/img/code.webp?url'
import codeBgDarkUrl from './assets/img/code-dark.webp?url'

// El fondo de .body-container(-dark) se aplica vía CSS background-image, así que el
// navegador no lo descubre hasta renderizar; precargarlo aquí adelanta esa descarga y
// mejora el LCP. Usamos la misma lógica que Body.jsx para saber cuál imagen se usará.
const storedDarkMode = localStorage.getItem('fgsm-dark-mode');
const isDarkMode = storedDarkMode === null ? true : storedDarkMode === 'true';
const preloadLink = document.createElement('link');
preloadLink.rel = 'preload';
preloadLink.as = 'image';
preloadLink.fetchPriority = 'high';
preloadLink.href = isDarkMode ? codeBgDarkUrl : codeBgUrl;
document.head.appendChild(preloadLink);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppFrangersal />
  </StrictMode>,
)
