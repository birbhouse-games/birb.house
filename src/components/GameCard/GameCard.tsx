// Module imports
import {
	type Asset,
	type AssetFile,
	type Entry,
} from 'contentful'
import {
	faItchIo,
	faSteam,
} from '@fortawesome/free-brands-svg-icons'
import { Document } from '@contentful/rich-text-types'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMemo } from 'react'
import { type VideoGame } from 'schema-dts'





// Local imports
import { Content } from '@/components/Content/Content'
import { ContentfulImage } from '@/components/ContentfulImage/ContentfulImage'
import { faEpicGames } from '@/icons/faEpicGames'
import { faGOG } from '@/icons/faGOG'
import { faHumbleBundle } from '@/icons/faHumbleBundle'
import { Heading } from '@/components/Heading/Heading'
import { Hero } from '@/components/Hero/Hero'
import { Link } from '@/components/Link/Link'
import { parseContentfulRichText } from '@/helpers/parseContentfulRichText'
// import { ScreenReaderText } from '@/components/ScreenReaderText/ScreenReaderText'
import { type TypeGameSkeleton } from '@/typedefs/contentful/TypeGame'
import { useJSONLD } from '@/hooks/useJSONLD'

import styles from './GameCard.module.scss'





// Types
type Props = {
	/** Game data. */
	game: Entry<TypeGameSkeleton>,
}





/** Renders a game card. */
export function GameCard(props: Props) {
	const { game } = props

	useJSONLD((() => {
		const result: VideoGame = {
			'@id': `https://birb.house/games/${game.fields.name}#videogame`,
			'@type': 'VideoGame',
			accessMode: ['textual', 'visual'],
			applicationCategory: 'Game',
			applicationSubCategory: 'Puzzle Game',
			copyrightHolder: { '@id': 'https://birb.house#corporation' },
			countryOfOrigin: {
				'@type': 'Country',
				name: 'USA'
			},
			// @ts-ignore
			description: parseContentfulRichText(game.fields.description as Document, true),
			name: game.fields.name as string,
			producer: { '@id': 'https://birb.house#corporation' },
			publisher: { '@id': 'https://birb.house#corporation' },
		}

		if ('copyrightYear' in game.fields) {
			result.copyrightYear = game.fields.copyrightYear as number
			result.copyrightNotice = `Copyright ${game.fields.copyrightYear}-${(new Date).getFullYear()} Birbhouse Games. All rights reserved.`
		} else {
			result.copyrightNotice = `Copyright ${(new Date).getFullYear()} Birbhouse Games. All rights reserved.`
		}

		if ('isFamilyFriendly' in game.fields) {
			result.isFamilyFriendly = game.fields.isFamilyFriendly as boolean
		}

		if (typeof game.fields.numberOfPlayers === 'number') {
			result.numberOfPlayers = {
				'@type': 'QuantitativeValue',
				value: game.fields.numberOfPlayers,
			}
		}

		if ('platforms' in game.fields) {
			result.gamePlatform = game.fields.platforms as string[]
		}

		if ('playMode' in game.fields) {
			result.playMode = game.fields.playMode as 'CoOp' | 'SinglePlayer' | 'MultiPlayer'
		}

		if (typeof game.fields.websiteURL === 'string') {
			result['@id'] = `${game.fields.websiteURL}/#videogame`
			result.sameAs = game.fields.websiteURL
			result.url = game.fields.websiteURL
		}

		return result
	})())

	const background = useMemo(() => {
		const heroImage = game.fields.heroImage as Asset | undefined

		if (heroImage?.fields.file?.url) {
			const description = heroImage.fields.description as string | undefined
			const title = heroImage.fields.title as string | undefined
			const file = heroImage.fields.file as AssetFile

			return (
				<ContentfulImage
					alt={description}
					fill
					objectFit={'cover'}
					sizes={'100vw'}
					src={`https:${file.url}`}
					title={title} />
			)
		}

		return null
	}, [game])

	const logo = useMemo(() => {
		const logo = game.fields.logo as Asset | undefined

		if (logo?.fields.file?.url) {
			const description = logo.fields.description as string | undefined
			const title = logo.fields.title as string | undefined
			const file = logo.fields.file as AssetFile

			return (
				<ContentfulImage
					alt={description}
					className={styles['logo']}
					fill
					objectFit={'contain'}
					objectPosition={'center left'}
					sizes={'120ch'}
					src={`https:${file.url}`}
					title={title} />
			)
		}

		return null
	}, [game])

	const content = useMemo(() => (
		<div className={styles['content']}>
			{/* @ts-ignore */}
			{parseContentfulRichText(game.fields.description)}
		</div>
	), [game])

	const compiledStyles = useMemo(() => ({
		'--background-color': game.fields.backgroundColor,
		'--text-color': game.fields.textColor,
	}), [game])

	return (
		<Hero
			background={background}
			backgroundColor={game.fields.backgroundColor as string}
			className={styles['game-card']}
			contentClassName={styles['content-wrapper']}
			contentPositionX={'left'}
			style={compiledStyles}>
			<Heading level={3}>
				{logo}

				{/* {Boolean(logo) && (
					<ScreenReaderText>
						{game.fields.name}
					</ScreenReaderText>
				)}

				{!logo && game.fields.name} */}
			</Heading>

			<Content>
				{content}
			</Content>

			<div className={styles['links']}>
				{(typeof game.fields.steamURL === 'string') && (
					<Link href={game.fields.steamURL}>
						<FontAwesomeIcon
							fixedWidth
							icon={faSteam}
							title={`${game.fields.name} on Steam`} />
					</Link>
				)}

				{(typeof game.fields.epicGamesURL === 'string') && (
					<Link href={game.fields.epicGamesURL}>
						<FontAwesomeIcon
							fixedWidth
							icon={faEpicGames}
							title={`${game.fields.name} on Epic Games Store`} />
					</Link>
				)}

				{(typeof game.fields.gogURL === 'string') && (
					<Link href={game.fields.gogURL}>
						<FontAwesomeIcon
							fixedWidth
							icon={faGOG}
							title={`${game.fields.gogURL} on GOG`} />
					</Link>
				)}

				{(typeof game.fields.itchURL === 'string') && (
					<Link href={game.fields.itchURL}>
						<FontAwesomeIcon
							fixedWidth
							icon={faItchIo}
							title={`${game.fields.name} on Itch`} />
					</Link>
				)}

				{(typeof game.fields.humbleBundleURL === 'string') && (
					<Link href={game.fields.humbleBundleURL}>
						<FontAwesomeIcon
							fixedWidth
							icon={faHumbleBundle}
							title={`${game.fields.name} on Humble Store`} />
					</Link>
				)}

				{(typeof game.fields.websiteURL === 'string') && (
					<Link href={game.fields.websiteURL}>
						<FontAwesomeIcon
							fixedWidth
							icon={faGlobe}
							title={`${game.fields.name} Website`} />
					</Link>
				)}
			</div>
		</Hero>
	)
}
