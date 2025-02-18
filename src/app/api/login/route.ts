import { axiosPost } from 'factoryx-commerce/utils'
import { handleRequest } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  return handleRequest(axiosPost, '/login', req)
}
