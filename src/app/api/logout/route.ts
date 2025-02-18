import { axiosGet } from 'factoryx-commerce/utils'
import { handleRequest } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  return handleRequest(axiosGet, '/logout', req)
}
