import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

export const parseSOW = async (sowText) => {
  const prompt = "You are a contract analyst. Extract deliverables, revisions, timeline, payment terms, and out of scope items from this SOW. Return ONLY valid JSON with keys: deliverables, revisions, timeline, paymentTerms, outOfScope. No explanation, no markdown.\n\nSOW:\n" + sowText

  const result = await model.generateContent(prompt)
  const text = result.response.text()
  const clean = text.replace(/``` JSON|```/g, ``). trim()
  return JSON.parse(clean)
}

export const analyseMessage = async (sowSummary, clientMessage) => {
  const prompt = "You are a freelance communication assistant. Here is the SOW summary: " + JSON.stringify(sowSummary) + "\n\nClient message: " + clientMessage + "\n\nReturn ONLY valid JSON with keys: verdict (within_scope/borderline/outside_scope), explanation, suggestedReply. No explanation, no markdown."

  const result = await model.generateContent(prompt)
  const text = result.response.text()
  const clean = text.replace(/json|```/g, '').trim()
  return JSON.parse(clean)
}