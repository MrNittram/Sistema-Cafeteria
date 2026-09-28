import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

async function iniciar() {
  if (
  import.meta.env.DEV ||
  import.meta.env.VITE_ENABLE_MSW === 'true'
) {
  const { worker } = await import('./mocks/browser.js')

  await worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: { url: '/mockServiceWorker.js' },
  })
}

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

iniciar().catch((error) => {
  console.error('Error al iniciar la aplicación:', error)
  root.render(
    <p>No se pudo iniciar la aplicación. Revisa la consola.</p>
  )
})
