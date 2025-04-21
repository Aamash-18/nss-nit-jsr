import { lazy, StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, AnimatePresence } from 'framer-motion'
import './index.css'
import NSSLoader from './components/NSSLoader'

// Regular import for App component to handle loading separately
const App = lazy(() => import('./App'))

const Root = () => {
  const [loading, setLoading] = useState(true)
  const [appLoaded, setAppLoaded] = useState(false)

  useEffect(() => {
    // Preload the App component
    import('./App').then(() => {
      setAppLoaded(true)
    })

    // Ensure loader shows for minimum 5 seconds
    const timer = setTimeout(() => {
      if (appLoaded) {
        // Start transition only when app is actually loaded
        startTransition()
      } else {
        // If app isn't loaded yet, wait until it is
        const checkInterval = setInterval(() => {
          if (appLoaded) {
            clearInterval(checkInterval)
            startTransition()
          }
        }, 100)
      }
    }, 3000)

    const startTransition = () => {
      // Initiate a gradual transition
      setLoading(false)
    }

    return () => clearTimeout(timer)
  }, [appLoaded])

  return (
    <StrictMode>
      <div className="relative w-full h-full">
        {/* Cross-fade animation container */}
        <AnimatePresence>
          {loading && (
            <motion.div
              key="loader"
              className="absolute inset-0 z-20"
              initial={{ opacity: 1 }}
              exit={{ 
                opacity: 0,
                transition: { duration: 1.2, ease: "easeInOut" }
              }}
            >
              <NSSLoader />
            </motion.div>
          )}
        </AnimatePresence>

        {/* App with entrance animation - pre-loaded but initially invisible */}
        <motion.div 
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ 
            opacity: loading ? 0 : 1, 
            scale: loading ? 0.98 : 1,
            transition: { 
              duration: 1.5, 
              ease: "easeOut",
              delay: 0.3
            }
          }}
        >
          {appLoaded && <App />}
        </motion.div>
      </div>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)