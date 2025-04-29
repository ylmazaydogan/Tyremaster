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
  return handleRequest(axiosPut, '/cart/' + params.id, req)
}

export async function DELETE(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string
    }
  },
) {
  return handleRequest(axiosDelete, '/cart/' + params.id, req)
}
