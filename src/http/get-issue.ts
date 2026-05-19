
import { IssueSchema } from '../api/routes/get-issue'
import { ClientEnv } from '../env'

interface GetIssueParams {
  id: string
}

export async function GetIssue({id}: GetIssueParams) {

  const url = new URL(`/api/issues/${id}`, ClientEnv.NEXT_PUBLIC_API_URL)

  const response = await fetch(url)
  const data = await response.json()

  return IssueSchema.parse(data)
}