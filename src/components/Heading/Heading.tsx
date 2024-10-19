// Module import
import {
	type PropsWithChildren,
	useMemo,
} from 'react'
import classnames from 'classnames'





// Local imports
import styles from './Heading.module.scss'





// Types
type Props = PropsWithChildren<{
	className?: string,
	level?: 1 | 2 | 3 | 4 | 5 | 6,
}>





/**
 * Renders a heading (h1-h6).
 *
 * @component
 */
export function Heading(props: Props) {
	const {
		children,
		className = '',
		level = 1,
	} = props

	const compiledClassName = useMemo(() => classnames(
		styles['heading'],
		styles[`level-${level}`],
		className,
	), [
		className,
		level,
	])

	if (level === 1) {
		return (
			<h1 className={compiledClassName}>
				{children}
			</h1>
		)
	}

	if (level === 2) {
		return (
			<h2 className={compiledClassName}>
				{children}
			</h2>
		)
	}

	if (level === 3) {
		return (
			<h3 className={compiledClassName}>
				{children}
			</h3>
		)
	}

	if (level === 4) {
		return (
			<h4 className={compiledClassName}>
				{children}
			</h4>
		)
	}

	if (level === 5) {
		return (
			<h5 className={compiledClassName}>
				{children}
			</h5>
		)
	}

	return (
		<h6 className={compiledClassName}>
			{children}
		</h6>
	)
}
