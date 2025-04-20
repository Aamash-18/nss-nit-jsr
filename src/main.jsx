import { lazy, StrictMode , Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NSSLoader from './components/NSSLoader'
const App = lazy(() => import('./App'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<NSSLoader />}>
      <App />
    </Suspense>
  </StrictMode>,
)
