import { axiosDelete, axiosGet, axiosPost, axiosPut, handleRequest } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export function GET(req: NextRequest) {
  return handleRequest(axiosGet, '/cart', req)
}

export function POST(req: NextRequest) {
  return handleRequest(axiosPost, '/cart', req)
}

export function PUT(req: NextRequest) {
  return handleRequest(axiosPut, '/cart', req)
}

export function DELETE() {
  return handleRequest(axiosDelete, '/cart')
}
