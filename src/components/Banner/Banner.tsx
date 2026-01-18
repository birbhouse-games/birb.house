'use client'

// Module imports
import {
	faBluesky,
	faDiscord,
	faSteam,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
	faBars,
	faClose,
	faDice,
	faHouse,
	faPenNib,
	faSmile,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image.js'
import { useCallback, useMemo, useState } from 'react'

// Local imports
import { Link } from '@/components/Link/Link'

import styles from './Banner.module.scss'

export function Banner() {
	const [isOpen, setIsOpen] = useState(false)

	const handleBannerControlClick = useCallback(
		() => setIsOpen((previousState) => !previousState),
		[],
	)

	const handleLinkClick = useCallback(() => setIsOpen(false), [])

	const compiledBannerClassNames = useMemo(() => {
		const classes = [styles['banner']]

		if (isOpen) {
			classes.push(styles['open'])
		}

		return classes.join(' ')
	}, [isOpen])

	return (
		<div className={styles['container']}>
			<input
				className={styles['banner-control']}
				id={'banner-control'}
				type={'checkbox'}
			/>

			<header className={styles['mobile-header']}>
				<div className={styles['brand']}>
					<Image
						alt={'Birbhouse Games Logo'}
						aria-hidden
						fill
						priority
						sizes={'(max-width: 768px) 230px, 100vw'}
						src={'/brand/color-logotype-light.png'}
					/>
				</div>

				<div
					className={styles['banner-control-button']}
					onClick={handleBannerControlClick}>
					<FontAwesomeIcon
						className={styles['open-icon']}
						icon={faBars}
					/>

					<FontAwesomeIcon
						icon={faClose}
						className={styles['close-icon']}
					/>
				</div>
			</header>

			<header
				className={compiledBannerClassNames}
				role={'banner'}>
				<h1 className={styles['brand']}>
					<Image
						alt={'Birbhouse Games Logo'}
						aria-hidden
						fill
						priority
						sizes={'(max-width: 768px) 230px, 100vw'}
						src={'/brand/color-logo-dark.png'}
					/>
				</h1>

				<nav className={styles['site-nav']}>
					<Link
						className={styles['link']}
						href={'/'}
						onClick={handleLinkClick}>
						<FontAwesomeIcon
							fixedWidth
							icon={faHouse}
							size={'xs'}
						/>
						<span>{'Home'}</span>
					</Link>
					<Link
						className={styles['link']}
						href={'/games'}
						onClick={handleLinkClick}>
						<FontAwesomeIcon
							fixedWidth
							icon={faDice}
							size={'xs'}
						/>
						<span>{'Games'}</span>
					</Link>
					<Link
						className={styles['link']}
						href={'/blog'}
						onClick={handleLinkClick}>
						<FontAwesomeIcon
							fixedWidth
							icon={faPenNib}
							size={'xs'}
						/>
						<span>{'Blog'}</span>
					</Link>
					<Link
						className={styles['link']}
						href={'/about'}
						onClick={handleLinkClick}>
						<FontAwesomeIcon
							fixedWidth
							icon={faSmile}
							size={'xs'}
						/>
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
								icon={faBluesky}
							/>
						</Link>

						<Link
							className={styles['link']}
							href={'/youtube'}>
							<FontAwesomeIcon
								fixedWidth
								icon={faYoutube}
							/>
						</Link>

						<Link
							className={styles['link']}
							href={'/steam'}>
							<FontAwesomeIcon
								fixedWidth
								icon={faSteam}
							/>
						</Link>

						<Link
							className={styles['link']}
							href={'/discord'}>
							<FontAwesomeIcon
								fixedWidth
								icon={faDiscord}
							/>
						</Link>
					</nav>
				</footer>
			</header>
		</div>
	)
}
