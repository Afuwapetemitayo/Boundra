// import { useNavigate } from 'react-router-dom'
// import { Zap, Check, Users } from 'lucide-react'

// export default function PricingBanner() {
//   const navigate = useNavigate()

//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 mb-6">
//       <div className="flex items-center gap-2 mb-4">
//         <Zap size={16} className="text-purple-500" />
//         <h3 className="font-bold text-gray-900">Your Plan</h3>
//         <span className="ml-auto text-xs bg-gray-100 text-gray-500 font-semibold px-2 py-1 rounded-full">Free</span>
//       </div>

//       <div className="bg-purple-50 rounded-xl p-4 mb-4">
//         <div className="flex justify-between items-center mb-2">
//           <p className="text-xs text-gray-500 font-medium">Message Analyses</p>
//           <p className="text-xs text-purple-600 font-bold">3 / 10 used</p>
//         </div>
//         <div className="w-full bg-purple-100 rounded-full h-2">
//           <div className="bg-purple-600 h-2 rounded-full" style={{ width: '30%' }}></div>
//         </div>
//         <p className="text-xs text-gray-400 mt-2">7 analyses remaining this month</p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
//         <div className="border border-purple-200 rounded-xl p-4 bg-purple-50/50">
//           <div className="flex items-center gap-2 mb-2">
//             <Zap size={14} className="text-purple-600" />
//             <p className="font-bold text-gray-900 text-sm">Pro</p>
//             <span className="ml-auto text-xs font-bold text-purple-600">₦3,500/mo</span>
//           </div>
//           <div className="space-y-1.5 mb-3">
//             {['Unlimited projects', '100 analyses/month', 'Full history'].map(f => (
//               <div key={f} className="flex items-center gap-1.5">
//                 <Check size={11} className="text-purple-500 shrink-0" />
//                 <span className="text-xs text-gray-600">{f}</span>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={() => navigate('/pricing')}
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-xs font-bold"
//           >
//             Upgrade to Pro
//           </button>
//         </div>

//         <div className="border border-gray-200 rounded-xl p-4">
//           <div className="flex items-center gap-2 mb-2">
//             <Users size={14} className="text-gray-600" />
//             <p className="font-bold text-gray-900 text-sm">Agency</p>
//             <span className="ml-auto text-xs font-bold text-gray-600">₦8,000/mo</span>
//           </div>
//           <div className="space-y-1.5 mb-3">
//             {['Unlimited analyses', 'Team access', 'PDF export'].map(f => (
//               <div key={f} className="flex items-center gap-1.5">
//                 <Check size={11} className="text-gray-400 shrink-0" />
//                 <span className="text-xs text-gray-600">{f}</span>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={() => navigate('/pricing')}
//             className="w-full bg-gray-900 hover:bg-gray-700 text-white py-2 rounded-lg text-xs font-bold"
//           >
//             Upgrade to Agency
//           </button>
//         </div>
//       </div>

//       <p className="text-xs text-gray-400 text-center">
//         Secure payments via Paystack · Cancel anytime
//       </p>
//     </div>
//   )
// }
