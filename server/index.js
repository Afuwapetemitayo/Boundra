import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import projectsRoutes from './routes/projects.js'
import analyseRoutes from './routes/analyse.js'
import contactRoutes from './routes/contact.js'
const app = express()

app.use('/api/contact', contactRoutes)
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Boundrix server is running' })
})

app.use('/api/auth', authRoutes)
app.use('/api/projects', projectsRoutes)
app.use('/api/analyse', analyseRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})