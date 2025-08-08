import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppFrangersal from './AppFrangersal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppFrangersal />
  </StrictMode>,
)
