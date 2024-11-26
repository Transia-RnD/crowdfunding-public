import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { XrplProvider } from './context/Xrpl/XrplContext'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <XrplProvider>
        <App />
      </XrplProvider>
    </BrowserRouter>
  </StrictMode>,
)
