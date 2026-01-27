import { useEffect } from 'react'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  useEffect(() => {
    // Automatically redirect to dashboard on first load
    document.title = 'My Portfolio Dashboard';
  }, []);

  return <Dashboard />
}

export default App
