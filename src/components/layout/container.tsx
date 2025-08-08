import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export function Container({
	children,
	className,
}: PropsWithChildren<{ className?: string }>) {
	return (
		<div className={clsx('container mx-auto px-3', className)}>{children}</div>
	)
}
