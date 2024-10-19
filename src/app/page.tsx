// Module imports
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





// Local imports
import { Button } from '@/components/Button/Button'
import { Heading } from '@/components/Heading/Heading'
import { Hero } from '@/components/Hero/Hero'

import styles from './page.module.scss'




export default function HomePage() {
	const backgroundVideo = (
		<video
			autoPlay
			className={styles['video']}
			controls={false}
			disablePictureInPicture
			loop
			muted>
			<source
				src={'https://videos.ctfassets.net/ss0m9kc91bgi/6zaW4puJz6DLz7PZl1U13P/0406b3849b0f1dd0fca82297e2293aa6/blue-eared-kingfisher.webm'}
				type={'video/webm'} />
			<source
				src={'https://videos.ctfassets.net/ss0m9kc91bgi/m4WAbNe3s7TdakynvCOym/6df171d651dc2dc4e96885e7b5da9a29/blue-eared-kingfisher.mp4'}
				type={'video/mp4'} />
		</video>
	)

	return (
		<Hero
			background={backgroundVideo}
			backgroundClassName={styles['page-background']}
			backgroundFit={'cover'}
			backgroundPositionY={'bottom'}
			className={styles['hero']}
			contentPositionX={'left'}
			contentPositionY={'center'}
			fullHeight>
			<div className={styles['container']}>
				<Heading
					className={styles['page-heading']}
					level={2}>
					{'Our games are flocking amazing.'}
				</Heading>

				<p>{'If you\'ve ever wondered what it would be like if a bird made a game... well, so do we. That\'s a tough nut, given birds don\'t have fingers.'}</p>
				<p>{'Our games are pretty great, though.'}</p>

				<div>
					<Button
						className={styles['call-to-action']}
						href={'/games'}>
						{'Check \'em out'}
						<FontAwesomeIcon icon={faArrowRight} />
					</Button>
				</div>
			</div>
		</Hero>
	)
}
