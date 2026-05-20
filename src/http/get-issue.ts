
import { IssueSchema } from '../api/routes/get-issue'
import { ClientEnv } from '../env'
import { setTimeout } from 'node:timers/promises'

interface GetIssueParams {
  id: string
}

export async function GetIssue({id}: GetIssueParams) {

  await setTimeout(2000)

  const url = new URL(`/api/issues/${id}`, ClientEnv.NEXT_PUBLIC_API_URL)

  const response = await fetch(url)
  const data = await response.json()

  return IssueSchema.parse(data)
}