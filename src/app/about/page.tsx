// Module imports
import Image from 'next/image'
import { type Metadata } from 'next'





// Local imports
import { Content } from '@/components/Content/Content'
import { Link } from '@/components/Link/Link'
import { Heading } from '@/components/Heading/Heading'
import { PageSection } from '@/components/PageSection/PageSection'

import styles from './page.module.scss'





export default function AboutPage() {
	return (
		<>
			<PageSection className={styles['section']}>
				<div className={styles['float-image']}>
					<Image
						alt={''}
						fill
						src={'/image/kingfisher-on-tree-trunk.png'} />
				</div>

				<Heading
					className={styles['page-heading']}
					level={2}>
					{'About Us'}
				</Heading>

				<Content className={styles['content']}>
					<p>{`At Birbhouse Games, we're not just making games—we're reshaping the way they're made. Founded in 2020 by Trezy, a veteran programmer with more than ${(new Date()).getFullYear() - 1999} years of experience, Birbhouse emerged from a game jam crucible with a bold vision: to harness the power of the web to create extraordinary gaming experiences.`}</p>
					<p>{'Our journey began with '}<Link href={'https://classic.debug.game'}><em>{'Not Found'}</em></Link>{', a Tetris-like puzzler built for the '}<Link href={'https://js13kgames.com'}>{'js13k'}</Link>{' game jam. With too many ideas to fit into the jam, the idea eventually grew into '}<Link href={'https://debug.game'}><em>{'Debug'}</em></Link>{', where we\'re. But we\'re not stopping there—our narrative-driven "The Inn at Nightfall" is pushing the boundaries of interactive storytelling.'}</p>
					<p>{'What sets us apart? It\'s our belief that great games come from empowered creators. That\'s why we\'ve built custom tools that break down traditional role barriers, allowing our globally distributed team of artists, writers, and developers to directly shape every aspect of our games. From browser-based engines to advanced narrative systems, we\'re pioneering technologies that not only power our games but could reshape the entire industry.'}</p>
					<p>{'At Birbhouse Games, we\'re more than a studio—we\'re a revolution in the making. Join us as we redefine what\'s possible in indie game development, one web-powered adventure at a time.'}</p>
				</Content>
			</PageSection>
		</>
	)
}

export const metadata: Metadata = {
	description: 'Learn all about Birbhouse Games!',
	title: 'About Us',
}
