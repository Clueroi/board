import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface SectionRootProps extends ComponentProps<'div'> {
}

function SectionRoot({ className, ...props }: SectionRootProps) {
  return (
    <div className={twMerge(
      "flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black",
      className
    )} {...props} />
  )
}

interface SectionHeaderProps extends ComponentProps<'div'> {
}

function SectionHeader({ className, ...props }: SectionHeaderProps) {
  return (
    <div className={
      twMerge(
        "flex flex-col items-center gap-6 text-center sm:items-start sm:text-left",
        className
      )
    } {...props} />
  )
}

interface SectionTitleProps extends ComponentProps<'span'> {
}

function SectionTitle({ className, ...props }: SectionTitleProps) {
  return (
    <span className={
      twMerge(
        "max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50",
        className
      )
    } {...props} />
  )
}

interface SectionIssueCountProps extends ComponentProps<'span'> {
}

function SectionIssueCount({ className, ...props }: SectionIssueCountProps) {
  return (
    <span className={
      twMerge(
        "max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400",
        className
      )
    } {...props} />
  )
}

interface SectionContentProps extends ComponentProps<'div'> {
}

function SectionContent({ className, ...props }: SectionContentProps) {
  return (
    <div className={
      twMerge(
        "flex flex-col gap-4 text-base font-medium sm:flex-row",
        className
      )
    } {...props} />

  )
}

export const Section = {
  Root: SectionRoot,
  Header: SectionHeader,
  Title: SectionTitle,
  IssueCount: SectionIssueCount,
  Content: SectionContent
}