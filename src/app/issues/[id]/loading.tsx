import { Skeleton } from '@/src/components/skeleton'
import { Link, MoveLeftIcon } from 'lucide-react'


export default function IssueLoading() {
	return (
		<main>
			<Link
				href='/'
				className='flex items-center gap-2 text-navy-200 hover:text-navy-100'
			>
				<MoveLeftIcon className='size-4' />
				<span className='text-xs'> Back to Board</span>
			</Link>

			<div>
				<Skeleton className='h-7 w-24' />
				<Skeleton className='h-7 w-16' />
			</div>

			<div className='space-y-2'>
				<Skeleton className='h-8 w-2/3' />

				<div>
				<Skeleton className='h-4 w-full' />
				<Skeleton className='h-4 w-full' />
				<Skeleton className='h-4 w-full' />
				<Skeleton className='h-4 w-full' />
				<Skeleton className='h-4 w-3/5' />
					
				</div>
			</div>

		</main>
	)
}