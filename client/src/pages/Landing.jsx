import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, AlertCircle, Pencil, Copy, Menu, X, Check, Zap, Users, Shield, ChevronDown, Upload, MessageSquare, CheckCircle } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const faqs = [
  { q: 'What is Boundra and why should I care?', a: 'Scope creep is when clients gradually ask for more work than what was originally agreed. It costs freelancers time and money — often without extra pay.' },
  { q: 'What file formats does Boundra support for SOWs?', a: 'You can paste your SOW as plain text directly into the app. PDF and Word upload support is coming soon.' },
  { q: 'Is my contract data safe and private?', a: 'Yes. Your SOW and client messages are encrypted and never shared with third parties or used for AI training.' },
  { q: 'How accurate is the AI at detecting out-of-scope requests?', a: 'Very accurate. The AI reads your entire SOW and cross-references every client message against it. It flags borderline cases too, not just obvious violations.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Cancel anytime from your dashboard. You keep access until the end of your billing period with no penalties.' },
  { q: 'Can I customise the suggested replies?', a: 'Absolutely. The suggested reply is a starting point — you can edit it before sending to match your tone and relationship with the client.' },
]

const plans = [
  {
    name: 'Free',
    price: '₦0',
    description: 'Perfect for trying out Boundra',
    icon: Shield,
    badge: null,
    buttonStyle: 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50',
    features: ['2 client projects', '10 message analyses/month', 'Basic SOW parsing', 'Message history (7 days)', 'Suggested reply generator'],
  },
  {
    name: 'Pro',
    price: '₦3,500',
    description: 'For active freelancers',
    icon: Zap,
    badge: 'Most Popular',
    buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
    features: ['Unlimited projects', '100 message analyses/month', 'Full SOW parsing', 'Full message history', 'Priority AI responses', 'Email support'],
  },
  {
    name: 'Agency',
    price: '₦8,000',
    description: 'For studios and agencies',
    icon: Users,
    badge: 'Best Value',
    buttonStyle: 'bg-gray-900 hover:bg-gray-700 text-white',
    features: ['Unlimited projects', 'Unlimited analyses', 'Full SOW parsing', 'Full message history', 'Team access (3 members)', 'PDF export', 'Priority support'],
  }
]

export default function Landing() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  useReveal()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif" }}>

      {/* ========== DARK HERO ========== */}
      <div className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #0d0a1a 30%, #0a0d1f 60%, #050a0f 100%)' }}
      >
        {/* Mesh blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}></div>
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-64 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

        {/* Navbar */}
        <nav className="relative z-50 flex justify-between items-center px-6 md:px-12 py-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Shield size={16} className="text-white" />
            </div>
            <span className="font-bold text-white text-lg">Boundra</span>
          </div>
          <div className="hidden md:flex items-center gap-7">
            <span onClick={() => scrollTo('how-it-works')} className="text-sm text-white/60 cursor-pointer hover:text-white font-medium transition-colors">How it works</span>
            <span onClick={() => scrollTo('why')} className="text-sm text-white/60 cursor-pointer hover:text-white font-medium transition-colors">Why Boundra</span>
            <span onClick={() => scrollTo('pricing')} className="text-sm text-white/60 cursor-pointer hover:text-white font-medium transition-colors">Pricing</span>
            <span onClick={() => scrollTo('faq')} className="text-sm text-white/60 cursor-pointer hover:text-white font-medium transition-colors">FAQ</span>
            <button onClick={() => navigate('/login')} className="text-sm text-white/70 font-medium hover:text-white transition-colors">Login</button>
            <button onClick={() => navigate('/signup')} className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">Get Started →</button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white/70 hover:text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden relative z-40 border-b border-white/10 px-6 py-4 flex flex-col gap-4" style={{ background: 'rgba(10,10,20,0.97)', backdropFilter: 'blur(20px)' }}>
            <span onClick={() => scrollTo('how-it-works')} className="text-sm text-white/70 font-medium cursor-pointer py-1">How it works</span>
            <span onClick={() => scrollTo('why')} className="text-sm text-white/70 font-medium cursor-pointer py-1">Why Boundra</span>
            <span onClick={() => scrollTo('pricing')} className="text-sm text-white/70 font-medium cursor-pointer py-1">Pricing</span>
            <span onClick={() => scrollTo('faq')} className="text-sm text-white/70 font-medium cursor-pointer py-1">FAQ</span>
            <span onClick={() => navigate('/login')} className="text-sm text-white/70 font-medium cursor-pointer py-1">Login</span>
            <button onClick={() => navigate('/signup')} className="bg-purple-600 text-white px-4 py-3 rounded-full text-sm font-semibold text-center mt-1">Get Started →</button>
          </div>
        )}

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 w-full">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

              {/* Left */}
              <div className="flex-1 min-w-0 text-center md:text-left">
                <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-purple-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></span>
                  AI-powered scope protection for freelancers
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 tracking-tight">
                  Stop Losing Money<br />
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #a78bfa, #60a5fa, #34d399)' }}>
                    to Scope Creep.
                  </span>
                </h1>
                <p className="text-base md:text-lg text-white/60 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                  Upload your Statement of Work, paste any client message, and get an instant AI verdict with a professional reply — in seconds.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-8">
                  <button onClick={() => navigate('/signup')} className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 px-7 py-3.5 rounded-full text-sm font-bold shadow-lg transition-all">
                    Get started free →
                  </button>
                  <button onClick={() => scrollTo('how-it-works')} className="w-full sm:w-auto text-sm text-white/60 hover:text-white font-medium border border-white/20 bg-white/5 px-5 py-3.5 rounded-full transition-all">
                    See how it works ↓
                  </button>
                </div>
                {/* <p className="text-white/30 text-xs">No credit card required. Free plan includes 10 scope checks/month.</p> */}
              </div>

              {/* Right card */}
              <div className="flex-1 min-w-0 w-full">
                <div className="rounded-3xl p-px shadow-2xl shadow-purple-900/30" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.5), rgba(99,102,241,0.3), rgba(59,130,246,0.2))' }}>
                  <div className="bg-gray-950 rounded-3xl p-5 md:p-6 border border-white/5">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      <span className="ml-2 text-xs text-white/20 font-mono">Boundra.app — Project: Brand Identity</span>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 mb-3 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Mail size={12} className="text-white/30" />
                        <p className="text-xs text-white/30 font-medium">Client message · WhatsApp</p>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">"Can you also redesign our Instagram highlights while you're at it? It won't take long..."</p>
                    </div>
                    <div className="bg-red-950/60 rounded-2xl p-4 mb-3 border border-red-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle size={12} className="text-red-400" />
                        <p className="text-xs font-bold text-red-400 tracking-widest">OUTSIDE SCOPE</p>
                      </div>
                      <p className="text-white/50 text-sm">Instagram highlights redesign was not included in your SOW. This is a new deliverable.</p>
                    </div>
                    <div className="bg-purple-950/60 rounded-2xl p-4 border border-purple-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Pencil size={12} className="text-purple-400" />
                        <p className="text-xs text-purple-400 font-medium">Suggested reply</p>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">"That's a great idea — highlights aren't in our current agreement, but I can send a quick quote as an add-on."</p>
                      <div className="mt-3 flex justify-end">
                        <span className="text-xs text-purple-400 font-semibold bg-purple-900/40 border border-purple-500/20 px-3 py-1 rounded-full cursor-pointer flex items-center gap-1.5">
                          <Copy size={10} /> Copy reply
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, white)' }}></div>
      </div>

      {/* ========== LIGHT SECTIONS ========== */}

      {/* Trust bar */}
      <div className="bg-white py-8 px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-300 text-xs font-semibold uppercase tracking-widest mb-5">Trusted by freelancers in these communities</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {['Layer Master', 'Freelance Hub NG', 'Design Circle', 'Dev Community NG', 'Creative Guild'].map(name => (
              <span key={name} className="text-gray-300 font-bold text-sm">{name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Why Boundra - left text, right visual */}
      <div id="why" className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

            {/* Left */}
            <div className="flex-1 reveal">
              <p className="text-purple-600 text-sm font-semibold mb-2 uppercase tracking-wider">Why Boundra</p>
              <h2 className="text-3x1 md:text-4xl font-extrabold text-gray-900 mb-4">Your work.Your terms.</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">Most freelancers lose money to scope creep. Boundra gives you the confidence to push back — professionally.</p>

              <div className="space-y-6">
                {[
                  { icon: Zap, color: 'bg-purple-100', iconColor: 'text-purple-600', title: 'Instant AI analysis', desc: 'Get a scope verdict in under 5 seconds. No more second-guessing or overthinking.' },
                  { icon: Shield, color: 'bg-green-100', iconColor: 'text-green-600', title: 'Professional tone', desc: 'AI-generated replies that maintain relationships while protecting your boundaries.' },
                  { icon: CheckCircle, color: 'bg-yellow-100', iconColor: 'text-yellow-600', title: 'Privacy first', desc: 'Your contracts and messages are never stored or used for training. Encrypted end-to-end.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ' + item.color}>
                      <item.icon size={18} className={item.iconColor} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visuals */}
            <div className="flex-1 reveal">
              <div className="grid grid-cols-2 gap-3">
                {/* Big image top left */}
                <div className="col-span-1 rounded-2xl overflow-hidden bg-gray-100 h-48">
                  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop" alt="Developer working" className="w-full h-full object-cover" />
                </div>
                {/* Stat card top right */}
                <div className="col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col justify-between">
                  <div>
                    <p className="text-4xl font-extrabold text-gray-900">87%</p>
                    <p className="text-gray-400 text-xs mt-1">of freelancers experience scope creep on every project</p>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-4">
                    <div className="bg-red-400 h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
                {/* Testimonial bottom left */}
                <div className="col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Temi A.</p>
                      <p className="text-xs text-gray-400">Graphic Designer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">"Saved me from 3 scope creep situations in my first week. Game changer."</p>
                  <div className="flex gap-0.5 mt-2">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-xs">★</span>)}
                  </div>
                </div>
                {/* Big image bottom right */}
                <div className="col-span-1 rounded-2xl overflow-hidden bg-gray-100 h-40">
                  <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&grayscale" alt="Designer working" className="w-full h-full object-cover grayscale" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* How it works - 3 cards */}
      <div id="how-it-works" className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: '#f8f7ff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 reveal">
            <p className="text-purple-600 text-sm font-semibold mb-2 uppercase tracking-wider">How it works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Three steps to protect your scope.</h2>
            <p className="text-gray-500 max-w-lg">No more awkward conversations. Let AI handle the boundary-setting so you can focus on delivering great work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                icon: Upload,
                iconBg: 'bg-purple-600',
                title: 'Upload your SOW',
                desc: 'Drop in your Statement of Work, contract, or project brief. Boundra parses the scope in seconds.',
                img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop',
              },
              {
                num: '02',
                icon: MessageSquare,
                iconBg: 'bg-orange-500',
                title: 'Paste the message',
                desc: "Copy the client's request — WhatsApp, email, or DM. AI compares it against your documented scope.",
                img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop',
              },
              {
                num: '03',
                icon: CheckCircle,
                iconBg: 'bg-teal-500',
                title: 'Get your verdict',
                desc: 'Receive an instant in-scope or out-of-scope verdict with a professional, copy-ready reply.',
                img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
              },
            ].map((step, i) => (
              <div key={i} className={'bg-white rounded-3xl p-6 border border-gray-100 shadow-sm reveal reveal-delay-' + i}>
                <div className={'w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ' + step.iconBg}>
                  <step.icon size={20} className="text-white" />
                </div>
                <p className="text-purple-600 text-xs font-bold mb-2">{step.num}</p>
                <h3 className="font-extrabold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{step.desc}</p>
                <div className="rounded-xl overflow-hidden bg-gray-100 h-36">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-purple-600 text-sm font-semibold mb-2 uppercase tracking-wider">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Simple, transparent pricing</h2>
            <p className="text-gray-500 max-w-md mx-auto">Start free. Upgrade when you need more. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((plan, i) => (
              <div key={plan.name}
                className={'relative bg-white rounded-3xl border-2 p-6 md:p-7 flex flex-col reveal reveal-delay-' + i +
                  (plan.name === 'Pro' ? ' border-purple-500 shadow-xl shadow-purple-100' : ' border-gray-100')}
              >
                {plan.badge && (
                  <div className={'absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white ' + (plan.name === 'Pro' ? 'bg-purple-600' : 'bg-gray-900')}>
                    {plan.badge}
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className={'w-10 h-10 rounded-xl flex items-center justify-center ' + (plan.name === 'Pro' ? 'bg-purple-100' : 'bg-gray-100')}>
                    <plan.icon size={18} className={plan.name === 'Pro' ? 'text-purple-600' : 'text-gray-600'} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-xs text-gray-400">{plan.description}</p>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-gray-400 text-sm mb-1">/month</span>
                  </div>
                </div>
                <button onClick={() => navigate('/signup')} className={'w-full py-3 rounded-full text-sm font-bold mb-5 transition-all ' + plan.buttonStyle}>
                  {plan.name === 'Free' ? 'Get Started Free' : 'Start ' + plan.name}
                </button>
                <div className="space-y-2.5 flex-1">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-2.5">
                      <div className={'w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ' + (plan.name === 'Pro' ? 'bg-purple-100' : 'bg-gray-100')}>
                        <Check size={10} className={plan.name === 'Pro' ? 'text-purple-600' : 'text-gray-500'} />
                      </div>
                      <span className="text-sm text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ - two column */}
      <div id="faq" className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: '#f8f7ff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">

            {/* Left */}
            <div className="md:w-80 shrink-0 reveal">
              <p className="text-purple-600 text-sm font-semibold mb-2 uppercase tracking-wider">FAQ</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Common questions.</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Everything you need to know about Boundra and how it protects your freelance work.</p>
              <div className="rounded-2xl overflow-hidden h-52 bg-gray-200">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop" alt="Freelancers working" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right accordion */}
            <div className="flex-1">
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className={'bg-white rounded-2xl border border-gray-100 overflow-hidden reveal reveal-delay-' + (i % 3)}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left"
                    >
                      <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={'transition-transform duration-300 shrink-0 ' + (openFaq === i ? 'rotate-180 text-purple-600' : 'text-gray-300')}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 md:px-6 pb-5 border-t border-gray-50">
                        <p className="text-gray-500 text-sm leading-relaxed pt-4">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-gray-400 text-sm">Still have questions? <span className="text-purple-600 font-semibold cursor-pointer hover:text-purple-800">Contact us</span></p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA - dark */}
      <div className="py-16 md:py-24 px-6 md:px-12 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 40%, #0a0d1f 100%)' }}
      >
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="absolute top-0 left-1/4 w-48 h-48 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}></div>
          <div className="relative z-10 reveal">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white/60 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Zap size={12} className="text-purple-400" />
              Ready to protect your scope?
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Stop Losing Money to <span className="text-purple-400">Scope Creep.</span>
            </h2>
            <p className="text-white/50 mb-8 text-base max-w-md mx-auto">Join thousands of freelancers who protect their boundaries and get paid for every hour of work they deliver.</p>
            <button onClick={() => navigate('/signup')} className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-full font-bold text-sm shadow-xl transition-all">
              Get started free →
            </button>
            {/* <p className="text-white/30 text-xs mt-4">No credit card required. Free plan includes 10 scope checks/month.</p> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3 bg-white">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center">
            <Shield size={14} className="text-white" />
          </div>
          <span className="font-bold text-gray-900 text-sm">Boundra</span>
        </div>
        <div className="flex items-center gap-6">
          <span onClick={() => scrollTo('how-it-works')} className="text-gray-400 text-xs cursor-pointer hover:text-gray-600 transition-colors">How it works</span>
          <span onClick={() => scrollTo('why')} className="text-gray-400 text-xs cursor-pointer hover:text-gray-600 transition-colors">Why Boundra</span>
          <span onClick={() => scrollTo('pricing')} className="text-gray-400 text-xs cursor-pointer hover:text-gray-600 transition-colors">Pricing</span>
          <span onClick={() => scrollTo('faq')} className="text-gray-400 text-xs cursor-pointer hover:text-gray-600 transition-colors">FAQ</span>
          <span onClick={() => navigate('/login')} className="text-gray-400 text-xs cursor-pointer hover:text-gray-600 transition-colors">Login</span>
        </div>
        <p className="text-gray-300 text-xs">AI-powered scope protection for freelancers · © 2026 Boundra</p>
      </footer>

    </div>
  )
}
