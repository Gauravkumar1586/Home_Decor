import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ContextData from './Context/ContextData'
import GalleryContext from './Context/GalleryContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <ContextData>
      <App />
      </ContextData>
    
  </React.StrictMode>
)
