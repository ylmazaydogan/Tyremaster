import { axiosGet } from 'factoryx-commerce/utils'
import { handleRequest } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export function GET(req: NextRequest) {
  return handleRequest(axiosGet, '/cart/clear?type=wishlist', req)
}
