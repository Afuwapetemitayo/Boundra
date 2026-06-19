import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="font-bold text-xl text-purple-600">ScopeGuard</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Welcome back</h2>
          <p className="text-gray-500 text-sm mt-1">Log in to your account</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <input
          className="w-full border border-gray-200 p-3 rounded-lg mb-3 outline-none focus:border-purple-400 text-gray-900"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
        />
        <input
          className="w-full border border-gray-200 p-3 rounded-lg mb-5 outline-none focus:border-purple-400 text-gray-900"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={e => setForm({...form, password: e.target.value})}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg font-semibold"
        >
          Login
        </button>

        <p className="text-gray-500 text-center text-sm mt-5">
          No account?{' '}
          <span onClick={() => navigate('/signup')} className="text-purple-600 cursor-pointer font-medium">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  )
}