import { axiosDownload, handleRequest } from 'factoryx-commerce/utils'
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
  return handleRequest(axiosDownload, '/file/' + params.id, req)
}
