// Module imports
import { Entry } from 'contentful'
import { type Metadata } from 'next'

// Local imports
import { Button } from '@/components/Button/Button'
import { ContentfulRichImage } from '@/components/ContentfulRichImage/ContentfulRichImage'
import { Heading } from '@/components/Heading/Heading'
import { Link } from '@/components/Link/Link'
import { TypePageBlogPostSkeleton } from '@/typedefs/contentful'

import styles from './ArticleSummary.module.scss'

// Types
type Props = {
	article: Entry<TypePageBlogPostSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS'>
}

export async function ArticleSummary(props: Props) {
	const { article } = props

	const background = !article.fields.featuredImage ? null : (
		<ContentfulRichImage
			data={article.fields.featuredImage}
			fill
			sizes={'70vw'}
		/>
	)

	return (
		<Link
			className={styles['container']}
			href={`/blog/${article.fields.slug}`}>
			<article>
				<div className={styles['header-image']}>{background}</div>

				<div className={styles['content']}>
					<Heading
						className={styles['heading']}
						level={3}>
						<span>{article.fields.title}</span>
					</Heading>

					<p className={styles['summary']}>
						<span>{article.fields.shortDescription}</span>
					</p>

					<Button
						className={styles['read-more-button']}
						fullWidth>
						{'Read More'}
					</Button>
				</div>
			</article>
		</Link>
	)
}

export const metadata: Metadata = {
	description: 'Read up on our exploits!',
	title: 'Blog',
}
