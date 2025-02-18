import { axiosPost } from 'factoryx-commerce/utils'
import { handleRequest } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export function POST(req: NextRequest) {
  return handleRequest(axiosPost, '/exists', req)
}
