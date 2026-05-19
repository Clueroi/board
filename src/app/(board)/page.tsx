import Image from "next/image";
import { Section } from "@/src/components/section";
import { Card } from "../../components/card";
import { MessageCircleIcon, ThumbsUpIcon } from "lucide-react";
import { Button } from "../../components/button";

export default function Home() {
  return (
    
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <Section.Root className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Section.Header>

            <Section.Title className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              To get started, edit the page.tsx file.
            </Section.Title>
            <Section.IssueCount>
              16
            </Section.IssueCount>

          </Section.Header>
          <Section.Content>

            <Card.Root>
              <Card.Header>
                <Card.Number>ECO-001</Card.Number>
                <Card.Title> Implementar cartão de crédito </Card.Title>
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
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </Section.Content>
        </Section.Root>
      </main>
  );
}
