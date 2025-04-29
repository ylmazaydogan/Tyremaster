import { axiosDelete, axiosGet, axiosPost, axiosPut } from 'factoryx-commerce/utils'
import { handleRequest } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  return handleRequest(axiosGet, '/products', req)
}

export async function POST(req: NextRequest) {
  return handleRequest(axiosPost, '/products', req)
}

export async function PUT(req: NextRequest) {
  return handleRequest(axiosPut, '/products', req)
}

export async function DELETE() {
  return handleRequest(axiosDelete, '/products')
}
