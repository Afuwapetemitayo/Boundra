import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ProjectDetail from './pages/ProjectDetail'
import Pricing from './pages/Pricing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/pricing" element={<Pricing standalone={true} />} />
    </Routes>
  )
}

export default App