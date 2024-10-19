// Module imports
import { type Entry } from 'contentful'
import { type Document } from '@contentful/rich-text-types'





// Local imports
import { parseContentfulRichText } from '@/helpers/parseContentfulRichText'
import { TypePageBlogPostSkeleton } from '@/typedefs/contentful'





/**
 * Estimates the read time of a string.
 *
 * @param input The string to calculate read time for.
 * @returns The estmated reading time of the string in milliseconds.
 */
export function calculateReadtime(input: Entry<TypePageBlogPostSkeleton>['fields']['content']) {
	const wordCount = (parseContentfulRichText(input as Document, true)! as string)
		.replace(/\s+/gu, ' ')
		.split(' ')
		.length

	return (wordCount / 200) * 60 * 1000
}
