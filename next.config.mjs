// Module imports
import withPlaiceHolder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		locales: ['en-US'],
		defaultLocale: 'en-US',
	},

	images: {
		remotePatterns: [
			{
				hostname: 'images.ctfassets.net',
				protocol: 'https',
			},
			{
				hostname: 'cdn.discordapp.com',
				protocol: 'https',
			},
		],
	},

	async redirects() {
		return [
			// {
			// 	source: '/kickstarter',
			// 	destination: 'https://kickstarter.com/projects/',
			// 	permanent: false,
			// },
			{
				source: '/bsky',
				destination: 'https://bsky.app/profile/birb.house',
				permanent: false,
			},
			{
				source: '/discord',
				destination: 'https://discord.gg/QXaS8zk6mH',
				permanent: false,
			},
			// {
			// 	source: '/epic-games',
			// 	destination: 'https://store.epicgames.com/',
			// 	permanent: false,
			// },
			{
				source: '/github',
				destination: 'https://github.com/trezy-studios',
				permanent: false,
			},
			{
				source: '/itch',
				destination: 'https://trezy.itch.io/',
				permanent: false,
			},
			// {
			// 	source: '/steam',
			// 	destination: 'https://steampowered.com/',
			// 	permanent: false,
			// },
			// {
			// 	source: '/twitter',
			// 	destination: 'https://twitter.com/TrezyStudios',
			// 	permanent: false,
			// },
			{
				source: '/youtube',
				destination: 'https://youtube.com/@TrezyStudios',
				permanent: false,
			},
		]
	},
}

export default withPlaiceHolder(nextConfig)
