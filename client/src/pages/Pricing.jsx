// import { useNavigate } from 'react-router-dom'
// import { Check, Zap, Shield, Users } from 'lucide-react'

// const plans = [
//   {
//     name: 'Free',
//     price: '₦0',
//     period: '/month',
//     description: 'Perfect for trying out Boundrix',
//     icon: Shield,
//     color: 'gray',
//     iconBg: 'bg-gray-100',
//     iconColor: 'text-gray-500',
//     badge: null,
//     buttonStyle: 'border border-gray-200 text-gray-700 hover:bg-gray-50',
//     features: [
//       '2 client projects',
//       '10 message analyses/month',
//       'Basic SOW parsing',
//       'Message history (7 days)',
//       'Suggested reply generator',
//       'Email support',
//     ],
//     notIncluded: [
//       'Unlimited analyses',
//       'Full message history',
//       'Team access',
//       'PDF export',
//     ]
//   },
//   {
//     name: 'Pro',
//     price: '₦3,500',
//     period: '/month',
//     description: 'For active freelancers with multiple clients',
//     icon: Zap,
//     color: 'purple',
//     iconBg: 'bg-purple-100',
//     iconColor: 'text-purple-600',
//     badge: 'Most Popular',
//     buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
//     features: [
//       'Unlimited client projects',
//       '100 message analyses/month',
//       'Full SOW parsing',
//       'Full message history',
//       'Suggested reply generator',
//       'Priority AI responses',
//       'Email support',
//     ],
//     notIncluded: [
//       'Team access',
//       'PDF export',
//     ]
//   },
//   {
//     name: 'Agency',
//     price: '₦8,000',
//     period: '/month',
//     description: 'For studios and small agencies',
//     icon: Users,
//     color: 'violet',
//     iconBg: 'bg-violet-100',
//     iconColor: 'text-violet-600',
//     badge: 'Best Value',
//     buttonStyle: 'bg-gray-900 hover:bg-gray-700 text-white',
//     features: [
//       'Unlimited client projects',
//       'Unlimited message analyses',
//       'Full SOW parsing',
//       'Full message history',
//       'Suggested reply generator',
//       'Priority AI responses',
//       'Team access (up to 3 members)',
//       'Export history as PDF',
//       'Priority support',
//     ],
//     notIncluded: []
//   }
// ]

// export default function Pricing({ standalone = false }) {
//   const navigate = useNavigate()

//   return (
//     <div className={standalone ? 'min-h-screen bg-white py-16 px-6 md:px-10' : 'py-16 md:py-24 px-6 md:px-10 bg-white'}>
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <p className="text-purple-600 text-sm font-semibold mb-2">Pricing</p>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
//             Simple, transparent pricing
//           </h2>
//           <p className="text-gray-500 max-w-md mx-auto">
//             Start free. Upgrade when you need more. Cancel anytime.
//           </p>
//         </div>

//         {/* Plans */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
//           {plans.map((plan, i) => (
//             <div
//               key={plan.name}
//               className={'relative bg-white rounded-3xl border-2 p-6 md:p-7 flex flex-col ' +
//                 (plan.name === 'Pro' ? 'border-purple-500 shadow-xl shadow-purple-100' : 'border-gray-100 shadow-sm')}
//             >
//               {/* Badge */}
//               {plan.badge && (
//                 <div className={'absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white ' +
//                   (plan.name === 'Pro' ? 'bg-purple-600' : 'bg-gray-900')}
//                 >
//                   {plan.badge}
//                 </div>
//               )}

//               {/* Icon & name */}
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={'w-10 h-10 rounded-xl flex items-center justify-center ' + plan.iconBg}>
//                   <plan.icon size={18} className={plan.iconColor} />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-gray-900">{plan.name}</h3>
//                   <p className="text-xs text-gray-400">{plan.description}</p>
//                 </div>
//               </div>

//               {/* Price */}
//               <div className="mb-6">
//                 <div className="flex items-end gap-1">
//                   <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
//                   <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
//                 </div>
//                 {plan.name !== 'Free' && (
//                   <p className="text-xs text-gray-400 mt-1">Billed monthly · Cancel anytime</p>
//                 )}
//               </div>

//               {/* Button */}
//               <button
//                 onClick={() => navigate('/signup')}
//                 className={'w-full py-3 rounded-full text-sm font-bold mb-6 transition-all ' + plan.buttonStyle}
//               >
//                 {plan.name === 'Free' ? 'Get Started Free' : 'Start ' + plan.name}
//               </button>

//               {/* Features */}
//               <div className="flex-1">
//                 <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">Included</p>
//                 <div className="space-y-2.5 mb-4">
//                   {plan.features.map(f => (
//                     <div key={f} className="flex items-start gap-2.5">
//                       <div className={'w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ' +
//                         (plan.name === 'Pro' ? 'bg-purple-100' : plan.name === 'Agency' ? 'bg-violet-100' : 'bg-gray-100')}
//                       >
//                         <Check size={10} className={plan.name === 'Pro' ? 'text-purple-600' : plan.name === 'Agency' ? 'text-violet-600' : 'text-gray-500'} />
//                       </div>
//                       <span className="text-sm text-gray-600">{f}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {plan.notIncluded.length > 0 && (
//                   <>
//                     <p className="text-xs text-gray-300 font-semibold uppercase tracking-wider mb-3">Not included</p>
//                     <div className="space-y-2.5">
//                       {plan.notIncluded.map(f => (
//                         <div key={f} className="flex items-start gap-2.5 opacity-40">
//                           <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
//                             <span className="text-gray-400 text-xs">×</span>
//                           </div>
//                           <span className="text-sm text-gray-400 line-through">{f}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* FAQ */}
//         <div className="mt-16 md:mt-20 max-w-2xl mx-auto">
//           <h3 className="text-xl font-bold text-gray-900 text-center mb-8">Common questions</h3>
//           <div className="space-y-4">
//             {[
//               { q: 'Can I cancel anytime?', a: 'Yes. You can cancel your subscription at any time. You keep access until the end of your billing period.' },
//               { q: 'How do I pay?', a: 'We use Paystack for secure Nigerian payments. You can pay with your debit card, bank transfer, or USSD.' },
//               { q: 'What counts as a message analysis?', a: 'Each time you paste a client message and click Analyse, that counts as one analysis.' },
//               { q: 'Can I upgrade or downgrade later?', a: 'Absolutely. You can switch plans at any time from your dashboard settings.' },
//               { q: 'Is my data safe?', a: 'Yes. Your SOW and messages are encrypted and never shared with third parties.' },
//             ].map((faq, i) => (
//               <div key={i} className="bg-gray-50 rounded-2xl p-5">
//                 <p className="font-semibold text-gray-900 mb-1 text-sm">{faq.q}</p>
//                 <p className="text-gray-500 text-sm">{faq.a}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-12 text-center">
//           <p className="text-gray-400 text-sm">Still not sure? <span onClick={() => navigate('/signup')} className="text-purple-600 font-semibold cursor-pointer hover:text-purple-800">Start free</span> — no credit card required.</p>
//         </div>

//       </div>
//     </div>
//   )
// }
