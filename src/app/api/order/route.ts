import { axiosGet, axiosPost } from 'factoryx-commerce/utils'
import { handleRequest } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export function GET(req: NextRequest) {
  return handleRequest(axiosGet, '/order', req)
}

export function POST(req: NextRequest) {
  return handleRequest(axiosPost, '/create', req)
}
