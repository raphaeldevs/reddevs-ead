import { NextApiRequest as Request, NextApiResponse as Response } from 'next'

import { supabase } from '../../../services/supabase'

async function handler(request: Request, response: Response) {
  try {
    if (request.method === 'POST') {
      const { title, description, url } = request.body

      const lesson = { title, description, url }

      await supabase.from('lessons').insert(lesson)

      return response.status(201).end()
    }

    if (request.method === 'GET') {
      const { data: lessons } = await supabase.from('lessons').select()

      return response.json(lessons)
    }
  } catch (error) {
    return response.status(500).json({ error: error.message })
  }
}

export default handler
