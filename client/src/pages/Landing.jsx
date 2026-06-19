import { useNavigate } from 'react-router-dom'
import { FileText, Search, MessageSquare, FolderOpen, Mail, AlertCircle, Pencil, Copy } from 'lucide-react'
import useReveal from '../hooks/useReveal'

export default function Landing() {
  const navigate = useNavigate()
  useReveal()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fafaf8' }}>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <span className="font-bold text-gray-900 text-lg">ScopeGuard</span>
        </div>
        <div className="flex items-center gap-6">
          <span onClick={() => scrollTo('how-it-works')} className="text-sm text-gray-500 cursor-pointer hover:text-gray-900 font-medium">How it works</span>
          <span onClick={() => scrollTo('why')} className="text-sm text-gray-500 cursor-pointer hover:text-gray-900 font-medium">Why ScopeGuard</span>
          <button onClick={() => navigate('/login')} className="text-sm text-gray-600 font-medium hover:text-gray-900">Login</button>
          <button onClick={() => navigate('/signup')} className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium">Get Started →</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, #f3e8ff 0%, #ede9fe 20%, #e0e7ff 45%, #dbeafe 70%, #f0fdf4 100%)',
        }}
      >
        {/* Blob decorations */}
        <div className="absolute top-10 left-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute top-32 right-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-violet-200 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-100 rounded-full blur-2xl opacity-40"></div>

        <div className="max-w-7xl mx-auto px-10 py-24 relative z-10 w-full">
          <div className="flex items-center gap-16">

            {/* Left text */}
            <div className="flex-1 min-w-0 animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Built for Freelancers
              </div>

              <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
                Stop scope Creep<br />
                <span className="text-purple-600">Before it Costs You.</span>
              </h1>

              <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                Upload your Statement of Work, paste any client message, and get an instant AI verdict with a professional reply — in seconds.
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-gray-900 hover:bg-gray-700 text-white px-7 py-3 rounded-full text-sm font-semibold shadow-lg"
                >
                  Start for free →
                </button>
                <button
                  onClick={() => scrollTo('how-it-works')}
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full border border-white/80"
                >
                  See how it works ↓
                </button>
              </div>
            </div>
            {/* Right card */}
            <div className="flex-1 min-w-0 animate-fade-up">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Live example</p>

                    <div className="bg-gray-50 rounded-2xl p-4 mb-3 border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                        <Mail size={14} className="text-gray-400" />
                        <p className="text-xs text-gray-400 font-medium">Client message</p>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">"Can you also redesign our Instagram highlights while you're at it? It won't take long..."</p>
                    </div>

                    <div className="bg-red-50 rounded-2xl p-4 mb-3 border border-red-100">
                    <div className="flex items-center gap-2 mb-2">
                        <AlertCircle size={14} className="text-red-500" />
                        <p className="text-xs font-bold text-red-500 tracking-widest">OUTSIDE SCOPE</p>
                    </div>
                    <p className="text-gray-600 text-sm">Instagram highlights redesign was not included in your SOW. This is a new deliverable.</p>
                    </div>

                    <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
                    <div className="flex items-center gap-2 mb-2">
                        <Pencil size={14} className="text-purple-500" />
                        <p className="text-xs text-purple-500 font-medium">Suggested reply</p>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">"That's a great idea — highlights aren't in our current agreement, but I can send a quick quote for that as an add-on."</p>
                    <div className="mt-3 flex justify-end">
                        <span className="text-xs text-purple-500 font-semibold bg-purple-100 px-3 py-1 rounded-full cursor-pointer flex items-center gap-1">
                        <Copy size={11} /> Copy reply
                        </span>
                    </div>
                    </div>
                </div>
                </div>

          </div>
        </div>
      </div>

      {/* Why section */}
      <div id="why" className="relative overflow-hidden py-24" style={{ backgroundColor: '#f5f3ff' }}>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-100 rounded-full blur-2xl opacity-40"></div>

        <div className="max-w-6xl mx-auto px-10 relative z-10">
          <div className="mb-14">
            <p className="text-purple-600 text-sm font-semibold mb-2">Why ScopeGuard</p>
            <h2 className="text-4xl font-bold text-gray-900">Your work. Your terms.</h2>
            <p className="text-gray-500 mt-3 max-w-md">Most freelancers lose money to scope creep. ScopeGuard gives you the confidence to push back — professionally.</p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white p-7 rounded-2 xl shadow-sm border border-purple-50 reveal reveal-delay-1">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <FileText size={20} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Upload your SOW once</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Paste your agreement and ScopeGuard reads every deliverable, revision limit, and boundary automatically.</p>
            </div>
            <div className="bg-white p-7 rounded-2 xl shadow-sm border border-purple-50 reveal reveal-delay-2">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Search size={20} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Instant scope verdict</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Paste any client message and get an instant analysis — within scope, borderline, or outside scope.</p>
              </div>
            <div className="bg-white p-7 rounded-2 xl shadow-sm border border-purple-50 reveal reveal-delay-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare size={20} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Reply with confidence</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Get a professional, firm reply you can send immediately. Never sound rude, never back down.</p>
            </div>
            <div className="bg-white p-7 rounded-2 xl shadow-sm border border-purple-50 reveal reveal-delay-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <FolderOpen size={20} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Full message history</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Every analysed message is saved per project. Build a paper trail effortlessly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div id="how-it-works" className="relative overflow-hidden py-24 bg-white">
        <div className="absolute top-10 right-10 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-6xl mx-auto px-10 relative z-10">
          <div className="mb-14">
            <p className="text-purple-600 text-sm font-semibold mb-2">How it works</p>
            <h2 className="text-4xl font-bold text-gray-900">Three steps, under a minute.</h2>
            <p className="text-gray-500 mt-3">No complicated setup. Just paste and go.</p>
          </div>

          <div className="space-y-8 max-w-2xl">
            <div className="flex gap-6 items-start reveal reveal-delay-1">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0">01</div>
              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Create a project and upload your SOW</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Give your project a name, add your client, and paste your Statement of Work. ScopeGuard reads and understands every term.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start reveal reveal-delay-1">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0">02</div>
              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Paste the client message</h3>
                <p className="text-gray-500 text-sm leading-relaxed">When a client sends you something suspicious, paste it in. ScopeGuard checks it against your agreement instantly.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start reveal reveal-delay-1">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0">03</div>
              <div className="pt-2">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">Copy the reply and send</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Get a verdict and a ready-to-send professional reply. Copy it, paste it in WhatsApp or email, done.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-10">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl p-20 text-center"
          style={{
            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 30%, #3b82f6 60%, #22c55e 100%)',
        }}
        >
          <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-300 opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute top-0 right-1/4 w-48 h-48 bg-green-200 opacity-10 rounded-full blur-2xl"></div>

          <div className="relative z-10 reveal">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">Get started today</p>
            <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">Ready to guard your scope?</h2>
            <p className="text-white/80 mb-10 text-lg max-w-md mx-auto">Join freelancers who stopped letting clients push their boundaries.</p>
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-sm shadow-2xl"
            >
              Start for free →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-10 py-6 flex justify-between items-center bg-white">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <span className="font-semibold text-gray-900 text-sm">ScopeGuard</span>
        </div>
        <p className="text-gray-400 text-xs">AI-powered scope protection for freelancers · © 2026 ScopeGuard</p>
      </footer>

    </div>
  )
}