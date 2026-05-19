import { GetIssue } from "@/src/http/get-issue"
import { Metadata } from "next"
// import { unstable_cache as dedup} from 'next/cache'

interface IssuePageProps {
  params: Promise<{ id: string }>
}

// async function getSomethingFromDatabase(){}

// const dedupedGetSomethingFromDatabase = dedup(
//   getSomethingFromDatabase,
//   ['get-something-from-database']
// )

// Deduplication with Next

export const generateMetadata = async ({ params }: IssuePageProps): Promise<Metadata> => {

  const { id } = await params
  
  const issue = await GetIssue({ id })

  return {
    title: `Issue ${issue.title} `
  }
}

export default async function IssuePage({ params }: IssuePageProps) {

  const { id } = await params

  const issue = await GetIssue({ id })

  return (
    <pre>{JSON.stringify(issue, null, 2)}</pre>
  )
}