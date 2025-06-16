import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Dashboard from './pages/admin/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          {/* public routes */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          {/* Other routes */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
