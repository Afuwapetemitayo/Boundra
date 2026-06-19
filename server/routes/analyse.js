import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { parseSOW, analyseMessage } from '../utils/claudeClient.js'

const router = express.Router()

// In-memory stores (imported from projects eventually)
const projects = []
const messages = []

// UPLOAD and parse SOW text
router.post('/sow/:projectId', authMiddleware, async (req, res) => {
  try {
    const { sowText } = req.body
    const summary = await parseSOW(sowText)

    // Update project with SOW
    const project = projects.find(
      p => p.id === req.params.projectId && p.userId === req.user.id
    )
    if (!project) return res.status(404).json({ error: 'Project not found' })

    project.sowRaw = sowText
    project.sowSummary = summary

    res.json({ summary })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'SOW parsing failed' })
  }
})

// ANALYSE a client message
router.post('/message/:projectId', authMiddleware, async (req, res) => {
  try {
    const { clientMessage } = req.body

    const project = projects.find(
      p => p.id === req.params.projectId && p.userId === req.user.id
    )
    if (!project) return res.status(404).json({ error: 'Project not found' })
    if (!project.sowSummary) return res.status(400).json({ error: 'No SOW uploaded for this project' })

    const result = await analyseMessage(project.sowSummary, clientMessage)

    const newMessage = {
      id: Date.now().toString(),
      clientMessage,
      ...result,
      projectId: project.id,
      createdAt: new Date()
    }

    messages.push(newMessage)
    res.json(newMessage)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Analysis failed' })
  }
})

// GET message history for a project
router.get('/history/:projectId', authMiddleware, (req, res) => {
  const projectMessages = messages.filter(
    m => m.projectId === req.params.projectId
  )
  res.json(projectMessages)
})

export default router