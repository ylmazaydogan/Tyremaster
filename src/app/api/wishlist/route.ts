import { axiosDelete, axiosGet, axiosPost, axiosPut } from 'factoryx-commerce/utils'
import { handleRequest } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export function GET(req: NextRequest) {
  return handleRequest(axiosGet, '/cart?type=wishlist', req)
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
