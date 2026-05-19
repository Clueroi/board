import { createAuthClient } from 'better-auth/react'
import { ClientEnv } from '../env'

export const authClient = createAuthClient({
  baseURL: ClientEnv.NEXT_PUBLIC_API_URL,
})