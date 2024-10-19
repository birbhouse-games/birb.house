// Module imports
import {
	type PropsWithChildren,
	useMemo,
} from 'react'
import classnames from 'classnames'





// Local imports
import styles from './List.module.scss'





// Types
type Props = PropsWithChildren<{
	className?: string,
	/** @description Whether the component will be rendered with bullets. */
	isBulleted?: boolean,
	/** @description Whether the component will be rendered inline. */
	isInline?: boolean,
	/** @description Whether the component will be rendered with numbers. */
	isNumbered?: boolean,
	/** @description Whether the component is an ordered list. */
	isOrdered?: boolean,
}>





/** Renders a list. */
export function List(props: Props) {
	const {
		children,
		className,
		isBulleted,
		isInline,
		isNumbered,
		isOrdered,
	} = props

	const compiledClassNames = useMemo(() => {
		return classnames({
			[styles['list']]: true,
			[styles['is-bulleted']]: isBulleted,
			[styles['is-inline']]: isInline,
			[styles['is-numbered']]: isNumbered,
		}, className)
	}, [
		className,
		isBulleted,
		isInline,
		isNumbered,
	])

	const compiledProps = useMemo(() => {
		const result = {
			className: compiledClassNames,
		}

		return result
	}, [compiledClassNames])

	if (isOrdered) {
		return (
			<ol {...compiledProps}>
				{children}
			</ol>
		)
	}

	return (
		<ul {...compiledProps}>
			{children}
		</ul>
	)
}
