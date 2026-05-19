import Image from "next/image";
import { Section } from "@/src/components/section";
import { Card } from "../../components/card";
import { MessageCircleIcon, ThumbsUpIcon } from "lucide-react";
import { Button } from "../../components/button";
import { Metadata } from "next";
import { ListIssues } from "@/src/http/list-issues";


interface BoardProps {
  searchParams: Promise<{ q?: string }>
}

export const metadata: Metadata = {
  title: 'Board'
};

export default async function Board({ searchParams }: BoardProps) {

  const { q } = await searchParams

  const issues = await ListIssues()

  return (


    <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
      <Section.Root>
        <Section.Header>
          <Section.Title>
            Backlog
          </Section.Title>
          <Section.IssueCount>
            {issues.backlog.length}
          </Section.IssueCount>

        </Section.Header>
        <Section.Content>
          {issues.backlog.map(issue => {
            return (
              <Card.Root key={issue.id}>
                <Card.Header>
                  <Card.Number>ECO-{issue.issueNumber}</Card.Number>
                  <Card.Title> {issue.title} </Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button type="button">
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm ">12</span>
                  </Button>

                  <Button type="button">
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm ">12</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            )
          })}
        </Section.Content>
      </Section.Root>
    </main>
  );
}
