import { handleRequest } from 'factoryx-commerce/utils'
import { axiosGet } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      slug: string
    }
  },
) {
  return handleRequest(axiosGet, '/product/' + params.slug, req)
}
