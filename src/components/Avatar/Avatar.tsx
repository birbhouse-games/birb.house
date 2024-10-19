// Module imports
import { type Asset } from 'contentful'
import classnames from 'classnames'





// Local imports
import { ContentfulImage } from '@/components/ContentfulImage/ContentfulImage'

import styles from './Avatar.module.scss'





// Types
type Props = {
	className?: string,
	data: Asset<'WITHOUT_UNRESOLVABLE_LINKS'>,
	size?: number,
}





export function Avatar(props: Props) {
	const {
		className,
		data,
		size = 64,
	} = props

	const compiledClassName = classnames(styles['container'], className)

	const compiledStyles = {
		'--avatar-size': size,
	}

	return (
		<div
			className={compiledClassName}
			style={compiledStyles}>
			<ContentfulImage
				height={size}
				src={data.fields.file?.url!}
				width={size} />
		</div>
	)
}
