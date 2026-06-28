import { GoogleGenerativeAI } from '@google/generative-ai'
import { envConfig } from '../config/env.js'
import { GoogleAuth } from "google-auth-library";

const genAI = new GoogleGenerativeAI(envConfig.gemini_api_key);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' })

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


async function listModels() {
  const auth = new GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/generative-language"],
  });

  const client = await auth.getClient();
  const url = "https://generativelanguage.googleapis.com/v1beta/models";

  const res = await client.request({ url });
  console.log(JSON.stringify(res.data, null, 2));
}

listModels();
