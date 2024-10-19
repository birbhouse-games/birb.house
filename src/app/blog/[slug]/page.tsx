// Module imports
import { type Metadata } from 'next'
import { strict as assert } from 'assert'





// Local imports
import { Avatar } from '@/components/Avatar/Avatar'
import { Content } from '@/components/Content/Content'
import * as Contentful from '@/helpers/Contentful'
import { ContentfulRichImage } from '@/components/ContentfulRichImage/ContentfulRichImage'
import { Fits } from '@/typedefs/Fits'
import { Heading } from '@/components/Heading/Heading'
import { Hero } from '@/components/Hero/Hero'
import { PageSection } from '@/components/PageSection/PageSection'
import { parseContentfulRichText } from '@/helpers/parseContentfulRichText'
import { Positions } from '@/typedefs/Positions'

import styles from './page.module.scss'





// Types
type Props = {
	params: {
		slug: string,
	}
}





export default async function BlogPage(props: Props) {
	const { slug } = props.params

	const article = await Contentful.getArticle(slug)

	assert(article)

	const backgroundImage = !article.fields.featuredImage ? null : (
		<ContentfulRichImage
			className={styles['background-image']}
			data={article.fields.featuredImage}
			fill
			sizes={'70vw'} />
	)

	const backgroundFit = article.fields.featuredImage?.fields.backgroundFit.toLowerCase() as Lowercase<Fits>
	const backgroundPositionX = article.fields.featuredImage?.fields.backgroundPositionX.toLowerCase() as Lowercase<Positions['X']>
	const backgroundPositionY = article.fields.featuredImage?.fields.backgroundPositionX.toLowerCase() as Lowercase<Positions['Y']>
	const formattedPublishedAt = new Intl
		.DateTimeFormat('en-US', {
			dateStyle: 'medium',
		})
		.format(new Date(article.fields.publishedDate))

	return (
		<div className={styles['container']}>
			<Hero
				background={backgroundImage}
				backgroundClassName={styles['header-background']}
				backgroundFit={backgroundFit}
				backgroundPositionX={backgroundPositionX}
				backgroundPositionY={backgroundPositionY}
				className={styles['header']}
				contentClassName={styles['header-content']}
				contentPositionX={'center'}
				contentPositionY={'bottom'}>
				<Heading
				 	className={styles['heading']}
					level={2}>
					{article.fields.title}
				</Heading>

				<div className={styles['metadata']}>
					{Boolean(article?.fields.author) && (
						<>
							<Avatar
								className={styles['avatar']}
								data={article.fields.author?.fields.avatar!}
								size={50} />

							<div className={styles['details']}>
								<div className={styles['name']}>
									{article?.fields.author?.fields.name}
								</div>

								<div className={styles['published-at']}>
									<time dateTime={article.fields.publishedDate}>
										{formattedPublishedAt}
									</time>
								</div>
							</div>
						</>
					)}

					{!article?.fields.author && (
						<div className={styles['published-at']}>
							<time dateTime={article.fields.publishedDate}>
								{formattedPublishedAt}
							</time>
						</div>
					)}
				</div>
			</Hero>

			<PageSection className={styles['content']}>
				<Content>
					{parseContentfulRichText(article.fields.content)}
				</Content>
			</PageSection>
		</div>
	)
}

export const metadata: Metadata = {
	description: 'Read up on our exploits!',
	title: 'Blog',
}
