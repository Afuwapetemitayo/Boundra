import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, Mail, MessageCircle, Send, CheckCircle, Phone } from 'lucide-react'
import axios from 'axios'

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    try{
        await axios.post('https://localhost:5000/api/contact', form)
        setSent(true)
    } catch(err){
        alert('failed to send message. Please try again.')
    }
      setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif" }}>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Shield size={16} className="text-white" />
          </div>
          <span className="font-bold text-gray-900 text-lg">Boundrix</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/login')} className="text-sm text-gray-500 font-medium hover:text-gray-900">Login</button>
          <button onClick={() => navigate('/signup')} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold">Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: '#f8f7ff' }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}></div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="text-purple-600 text-sm font-semibold mb-2 uppercase tracking-wider">Contact Us</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">We'd love to hear from you</h1>
          <p className="text-gray-500 text-base md:text-lg">Have a question, suggestion, or just want to say hi? Send us a message and we'll get back to you as soon as possible.</p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">

          {/* Left - contact info */}
          <div className="md:w-80 shrink-0">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">Get in touch</h2>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Email us</p>
                  {/* <p className="text-gray-400 text-sm mt-0.5">hello@Boundrix.app</p> */}
                  <p className="text-gray-400 text-xs mt-0.5">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">WhatsApp</p>
                  <p className="text-gray-400 text-sm mt-0.5">+234 800 000 0000</p>
                  <p className="text-gray-400 text-xs mt-0.5">Mon – Fri, 9am – 6pm WAT</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Follow us</p>
              {/* <div className="flex gap-3">
                {[
                  { icon: Twitter, label: 'Twitter', color: 'bg-blue-50 text-blue-500 hover:bg-blue-100' },
                  { icon: Instagram, label: 'Instagram', color: 'bg-pink-50 text-pink-500 hover:bg-pink-100' },
                  { icon: Linkedin, label: 'LinkedIn', color: 'bg-blue-50 text-blue-700 hover:bg-blue-100' },
                ].map(s => (
                  <button key={s.label} className={'w-10 h-10 rounded-xl flex items-center justify-center transition-colors ' + s.color}>
                    <s.icon size={16} />
                  </button>
                ))}
              </div> */}
              <div className="flex gap-3">
                {[
                    { icon: Phone, label: 'Phone', color: 'bg-purple-50 text-purple-500 hover:bg-purple-100' },
                    { icon: MessageCircle, label: 'WhatsApp', color: 'bg-green-50 text-green-500 hover:bg-green-100' },
                    { icon: Mail, label: 'Email', color: 'bg-blue-50 text-blue-500 hover:bg-blue-100' },
                ].map(s => (
                    <button key={s.label} className={'w-10 h-10 rounded-xl flex items-center justify-center transition-colors ' + s.color}>
                    <s.icon size={16} />
                    </button>
                ))}
                </div>
            </div>

            {/* FAQ prompt */}
            <div className="mt-10 bg-purple-50 rounded-2xl p-5 border border-purple-100">
              <p className="font-bold text-gray-900 text-sm mb-1">Check our FAQ first</p>
              <p className="text-gray-500 text-xs mb-3">Most questions are already answered there.</p>
              <button
                onClick={() => navigate('/#faq')}
                className="text-purple-600 text-xs font-bold hover:text-purple-800"
              >
                View FAQ →
              </button>
            </div>
          </div>

          {/* Right - form */}
          <div className="flex-1">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Message sent!</h3>
                <p className="text-gray-500 mb-6 max-w-sm">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="text-purple-600 font-semibold text-sm hover:text-purple-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
                <h2 className="text-xl font-extrabold text-gray-900 mb-6">Send us a message</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs text-gray-500 font-semibold mb-1 block uppercase tracking-wider">Full Name</label>
                    <input
                      className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-purple-400 text-gray-900 text-sm transition-colors"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold mb-1 block uppercase tracking-wider">Email Address</label>
                    <input
                      className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-purple-400 text-gray-900 text-sm transition-colors"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-xs text-gray-500 font-semibold mb-1 block uppercase tracking-wider">Subject</label>
                  <select
                    className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-purple-400 text-gray-900 text-sm transition-colors"
                    value={form.subject}
                    onChange={e => setForm({...form, subject: e.target.value})}
                  >
                    <option value="">Select a subject</option>
                    <option>General question</option>
                    <option>Billing & subscription</option>
                    <option>Technical issue</option>
                    <option>Feature request</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="text-xs text-gray-500 font-semibold mb-1 block uppercase tracking-wider">Message</label>
                  <textarea
                    className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-purple-400 text-gray-900 text-sm h-36 resize-none transition-colors"
                    placeholder="Tell us what's on your mind..."
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading || !form.name || !form.email || !form.message}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-gray-400 text-xs text-center mt-4">We typically reply within 24 hours on business days.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3 bg-white">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center">
            <Shield size={12} className="text-white" />
          </div>
          <span className="font-bold text-gray-900 text-sm">Boundrix</span>
        </div>
        <p className="text-gray-300 text-xs">AI-powered scope protection for freelancers · © 2026 Boundrix</p>
      </footer>

    </div>
  )
}
