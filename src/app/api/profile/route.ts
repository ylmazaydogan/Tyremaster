import { axiosGet, axiosPut, handleRequest } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  return handleRequest(axiosGet, '/profile', req)
}

export async function PUT(req: NextRequest) {
  return handleRequest(axiosPut, '/profile', req)
}
