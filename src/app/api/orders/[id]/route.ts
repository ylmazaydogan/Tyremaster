import { handleRequest } from 'factoryx-commerce/utils'
import { axiosGet } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string
    }
  },
) {
  return handleRequest(axiosGet, '/order/' + params.id, req)
}
