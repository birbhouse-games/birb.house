// Module imports
import classnames from 'classnames'
import { type GetPlaiceholderReturn } from 'plaiceholder'
import Image from 'next/image'
import { type Property } from 'csstype'





// Local imports
import { type ImageFit } from '@/typedefs/contentful-extended/ImageFit'
import { type ImageFocusArea } from '@/typedefs/contentful-extended/ImageFocusArea'

import styles from './ContentfulImage.module.scss'





// Types
type Props = {
	alt?: string,
	className?: string,
	fill?: boolean,
	fit?: ImageFit,
	focusArea?: ImageFocusArea,
	height?: number,
	isPriority?: boolean,
	objectFit?: Property.ObjectFit,
	objectPosition?: Property.ObjectPosition<string>,
	quality?: number,
	sizes?: string,
	src: string,
	title?: string,
	width?: number,
}





/** Renders an image from Contentful. */
export async function ContentfulImage(props: Props) {
	const {
		alt = '',
		className = '',
		fill = false,
		fit,
		focusArea,
		height,
		isPriority = false,
		objectFit = 'cover',
		objectPosition,
		quality = 75,
		sizes,
		src,
		title = '',
		width,
	} = props

	const baseURL = new URL(`https:${src.replace(/^https:/, '')}`)

	let plaiceholderData: GetPlaiceholderReturn | null = null

	try {
		const plaiceholderDataResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/plaiceholder?src=` + baseURL.toString())

		if (plaiceholderDataResponse.status === 200) {
			plaiceholderData = await plaiceholderDataResponse.json()
		}
	} catch (err) {
		console.log('plaiceholder Err', err)
	}

	const sourceURL = new URL(baseURL)
	sourceURL.searchParams.set('fm', 'webp')
	sourceURL.searchParams.set('q', (quality || 75).toString())

	if (width) {
		sourceURL.searchParams.set('w', width.toString())
	}

	if (fit) {
		sourceURL.searchParams.set('fit', fit)
	}

	if (focusArea) {
		sourceURL.searchParams.set('f', focusArea.toLowerCase().replace(/\s/u, '_'))
	}

	const compiledWrapperStyles = {
		'--image-height': height,
		'--image-width': width,
		'--object-fit': objectFit,
		'--object-position': objectPosition,
	}

	const compiledClassName = classnames(styles['container'], className)

	return (
		<div
			className={compiledClassName}
			style={compiledWrapperStyles}>
			<Image
				alt={alt}
				fill={fill}
				height={!fill ? height : undefined}
				priority={isPriority}
				sizes={sizes}
				src={sourceURL.toString()}
				title={title}
				width={!fill ? width : undefined}
				{...plaiceholderData && {
					placeholder: 'blur',
					blurDataURL: plaiceholderData.base64,
				}} />
		</div>
	)
}
