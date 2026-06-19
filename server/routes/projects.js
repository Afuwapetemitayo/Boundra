import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Temporary in-memory store
const projects = []

// GET all projects for logged in user
router.get('/', authMiddleware, (req, res) => {
  const userProjects = projects.filter(p => p.userId === req.user.id)
  res.json(userProjects)
})

// CREATE a project
router.post('/', authMiddleware, (req, res) => {
  const { name, clientName } = req.body

  const newProject = {
    id: Date.now().toString(),
    name,
    clientName,
    sowRaw: '',
    sowSummary: null,
    userId: req.user.id,
    createdAt: new Date()
  }

  projects.push(newProject)
  res.status(201).json(newProject)
})

// GET single project
router.get('/:id', authMiddleware, (req, res) => {
  const project = projects.find(
    p => p.id === req.params.id && p.userId === req.user.id
  )
  if (!project) return res.status(404).json({ error: 'Project not found' })
  res.json(project)
})

export default router