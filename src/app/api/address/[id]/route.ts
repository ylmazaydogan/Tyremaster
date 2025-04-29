import { axiosDelete, axiosPut } from 'factoryx-commerce/utils'
import { handleRequest } from 'factoryx-commerce/utils'
import { NextRequest } from 'next/server'

export async function PUT(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string
    }
  },
) {
  return handleRequest(axiosPut, '/address/' + params.id, req)
}

export function DELETE(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string
    }
  },
) {
  return handleRequest(axiosDelete, '/address/' + params.id, req)
}
