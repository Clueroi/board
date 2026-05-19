import { IssuesListResponseSchema } from '@/src/api/routes/list-issues'
import { ClientEnv } from '../env'

interface ListIssuesParams {
  search?: string
}

export async function ListIssues({search}: ListIssuesParams ={}) {

  const url = new URL('/api/issues', ClientEnv.NEXT_PUBLIC_API_URL)


  if(search) {
    url.searchParams.set('search', search)
  }

  const response = await fetch(url)
  const data = await response.json()

  return IssuesListResponseSchema.parse(data)
}