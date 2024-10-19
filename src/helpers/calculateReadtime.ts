// Module imports
import {
	Entry,
	type EntryFieldTypes,
	type ResolvedField,
} from 'contentful'





// Local imports
import { parseContentfulRichTextAsString } from '@/helpers/parseContentfulRichTextAsString'
import { TypePageBlogPostSkeleton } from '@/typedefs/contentful'





/**
 * Estimates the read time of a string.
 *
 * @param input The string to calculate read time for.
 * @returns The estmated reading time of the string in milliseconds.
 */
export function calculateReadtime(input: Entry<TypePageBlogPostSkeleton>['fields']['content']) {
	const wordCount = parseContentfulRichTextAsString(input)
		.replace(/\s+/gu, ' ')
		.split(' ')
		.length

	return (wordCount / 200) * 60 * 1000
}
