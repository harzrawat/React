import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ChildrenKey from './components/ChildrenKey.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <ChildrenKey/>
    <App/>
  </>
    
)
