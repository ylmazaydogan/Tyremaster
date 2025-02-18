import { axiosPost, handleRequest } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export function POST(req: NextRequest) {
  return handleRequest(axiosPost, '/import', req)
}
