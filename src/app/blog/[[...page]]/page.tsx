// Module imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { type Metadata } from 'next'





// Local imports
import { ArticleSummary } from '@/components/ArticleSummary/ArticleSummary'
import * as Contentful from '@/helpers/Contentful'
import { ContentfulRichImage } from '@/components/ContentfulRichImage/ContentfulRichImage'
import { Heading } from '@/components/Heading/Heading'
import { Hero } from '@/components/Hero/Hero'
import { PageSection } from '@/components/PageSection/PageSection'
import { Link } from '@/components/Link/Link'
import { List } from '@/components/List/List'
import { Button } from '@/components/Button/Button'

import styles from './page.module.scss'





// Types
type Props = {
	params: {
		page: string,
	}
}





export default async function BlogPage(props: Props) {
	const page = Number(props.params.page ?? 1)

	const articles = await Contentful.getArticles(page)

	return (
		<>
			<PageSection>
				<Heading
					className={styles['page-heading']}
					level={2}>
					{'Blog'}
				</Heading>
			</PageSection>

			<PageSection className={styles['page-content']}>
				<List className={styles['articles']}>
					{articles.map(article => (
						<li className={styles['article-wrapper']} key={article.sys.id}>
							<ArticleSummary article={article} />
						</li>
					))}
				</List>
			</PageSection>
		</>
	)
}

export const metadata: Metadata = {
	description: 'Read up on our exploits!',
	title: 'Blog',
}
