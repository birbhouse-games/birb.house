// Module imports
import {
	faBluesky,
	faDiscord,
	faSteam,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
	faDice,
	faHouse,
	faPenNib,
	faSmile,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image.js'





// Local imports
import { Link } from '@/components/Link/Link'

import styles from './Banner.module.scss'





export function Banner() {
	return (
		<header
			className={styles['container']}
			role={'banner'}>
			<h1 className={styles['brand']}>
				<Image
					alt={'Birbhouse Games Logo'}
					aria-hidden
					fill
					priority
					sizes={'(max-width: 768px) 230px, 100vw'}
					src={'/brand/color-logo-dark.png'} />
			</h1>

			<nav className={styles['site-nav']}>
				<Link
					className={styles['link']}
					href={'/'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faHouse}
						size={'xs'} />
					<span>{'Home'}</span>
				</Link>
				<Link
					className={styles['link']}
					href={'/games'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faDice}
						size={'xs'} />
					<span>{'Games'}</span>
				</Link>
				<Link
					className={styles['link']}
					href={'/blog'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faPenNib}
						size={'xs'} />
					<span>{'Blog'}</span>
				</Link>
				<Link
					className={styles['link']}
					href={'/about'}>
					<FontAwesomeIcon
						fixedWidth
						icon={faSmile}
						size={'xs'} />
					<span>{'About'}</span>
				</Link>
			</nav>

			<footer className={styles['footer']}>
				{/* <div className={styles['legal']}>
					<nav className={styles['legal-links']}>
						<Link
							className={styles['link']}
							href={'/legal/terms-of-service'}>
							{'Terms of Service'}
						</Link>

						<Link
							className={styles['link']}
							href={'/legal/privacy-policy'}>
							{'Privacy Policy'}
						</Link>

						<Link
							className={styles['link']}
							href={'/legal/cookie-policy'}>
							{'Cookie Policy'}
						</Link>

						<Link
							className={styles['link']}
							href={'/legal/code-of-conduct'}>
							{'Code of Conduct'}
						</Link>
					</nav>

					<small>
						{`© 1999-${(new Date).getFullYear()} Trezy Studios, LLC. All rights reserved.`}
					</small>
				</div> */}

				<nav className={styles['social-links']}>
					<Link
						className={styles['link']}
						href={'/bluesky'}>
						<FontAwesomeIcon
							fixedWidth
							icon={faBluesky} />
					</Link>

					<Link
						className={styles['link']}
						href={'/youtube'}>
						<FontAwesomeIcon
							fixedWidth
							icon={faYoutube} />
					</Link>

					<Link
						className={styles['link']}
						href={'/steam'}>
						<FontAwesomeIcon
							fixedWidth
							icon={faSteam} />
					</Link>

					<Link
						className={styles['link']}
						href={'/discord'}>
						<FontAwesomeIcon
							fixedWidth
							icon={faDiscord} />
					</Link>
				</nav>
			</footer>
		</header>
	)
}
