import { ThemeProvider } from 'flowbite-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FlowbiteThemeComponent from './flowbite-theme.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={FlowbiteThemeComponent}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
