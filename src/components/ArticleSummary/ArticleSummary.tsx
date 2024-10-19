// Module imports
import { Entry } from 'contentful'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type Metadata } from 'next'





// Local imports
import { Button } from '@/components/Button/Button'
import { ContentfulRichImage } from '@/components/ContentfulRichImage/ContentfulRichImage'
import { type Fits } from '@/typedefs/Fits'
import { Heading } from '@/components/Heading/Heading'
import { Hero } from '@/components/Hero/Hero'
import { Link } from '@/components/Link/Link'
import { type Positions } from '@/typedefs/Positions'
import { TypePageBlogPostSkeleton } from '@/typedefs/contentful'

import styles from './ArticleSummary.module.scss'





// Types
type Props = {
	article: Entry<TypePageBlogPostSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS'>,
}





export async function ArticleSummary(props: Props) {
	const { article } = props

	const background = !article.fields.featuredImage ? null : (
		<ContentfulRichImage
			data={article.fields.featuredImage}
			fill
			sizes={'70vw'} />
	)

	const backgroundFit = article.fields.featuredImage?.fields.backgroundFit.toLowerCase() as Lowercase<Fits>
	const backgroundPositionX = article.fields.featuredImage?.fields.backgroundPositionX.toLowerCase() as Lowercase<Positions['X']>
	const backgroundPositionY = article.fields.featuredImage?.fields.backgroundPositionX.toLowerCase() as Lowercase<Positions['Y']>

	return (
		<Link
			className={styles['container']}
			href={`/blog/${article.fields.slug}`}>
			<article>
				<Hero
					background={background}
					backgroundFit={backgroundFit}
					backgroundPositionX={backgroundPositionX}
					backgroundPositionY={backgroundPositionY}
					className={styles['article-container']}
					contentClassName={styles['article']}
					contentPositionX={'left'}>
					<Heading
						className={styles['heading']}
						level={3}>
						<span>
							{article.fields.title}
						</span>
					</Heading>

					<p>
						<span>
							{article.fields.shortDescription}
						</span>
					</p>
				</Hero>
			</article>
		</Link>
	)
}

export const metadata: Metadata = {
	description: 'Read up on our exploits!',
	title: 'Blog',
}
