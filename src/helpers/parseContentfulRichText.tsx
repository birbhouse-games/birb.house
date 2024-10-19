// Module imports
import {
	BLOCKS,
	type Document,
	INLINES,
	MARKS,
	type Node,
} from '@contentful/rich-text-types'
import {
	type CSSProperties,
	type ReactNode,
} from 'react'
import {
	documentToReactComponents,
	type Options,
} from '@contentful/rich-text-react-renderer'





// Local imports
import { ContentfulImage } from '@/components/ContentfulImage/ContentfulImage'
import { ContentfulRichImage } from '@/components/ContentfulRichImage/ContentfulRichImage'
import { Link } from '@/components/Link/Link'
import { List } from '@/components/List/List'
import { Heading } from '@/components/Heading/Heading'





// Functions
function renderMarkAsText(text: string) { return text }
function renderNodeAsText(node: Node, children: ReactNode) { return children }





// Constants
const OPTIONS: Options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node: Node) => (
			<figure>
				<ContentfulImage
					alt={node.data.target.fields.description}
					fill
					src={`https:${node.data.target.fields.file.url}`}
					title={node.data.target.fields.title} />

				{/* objectFit = 'cover', */}
				{/* objectPosition, */}
				{/* placeholder = 'empty', */}
				{/* sizes, */}
			</figure>
		),
		[BLOCKS.EMBEDDED_ENTRY]: (node: Node) => {
			switch (node.data.target.sys.contentType.sys.id) {
				// case 'componentCodeBlock':
				// 	return (
				// 		<Code
				// 			key={nodeIndex}
				// 			language={node.data.target.fields.language}>
				// 			{node.data.target.fields.code}
				// 		</Code>
				// 	)

				case 'componentRichImage':
					return (
						<div style={RICH_IMAGE_STYLES}>
							<ContentfulRichImage
								data={node.data.target}
								fill
								sizes={'50vw'} />
						</div>
					)

				default:
					console.log(`Unhandled embedded content type: ${node.data.target.sys.contentType.sys.id}`, node)
					return null
			}
		},
		[BLOCKS.HEADING_1]: (node: Node, children: ReactNode) => (
			<Heading level={3}>
				{children}
			</Heading>
		),
		[BLOCKS.HEADING_2]: (node: Node, children: ReactNode) => (
			<Heading level={4}>
				{children}
			</Heading>
		),
		[BLOCKS.HEADING_3]: (node: Node, children: ReactNode) => (
			<Heading level={5}>
				{children}
			</Heading>
		),
		[BLOCKS.HEADING_4]: (node: Node, children: ReactNode) => (
			<Heading level={6}>
				{children}
			</Heading>
		),
		[BLOCKS.HEADING_5]: (node: Node, children: ReactNode) => (
			<strong>{children}</strong>
		),
		[BLOCKS.HEADING_6]: (node: Node, children: ReactNode) => (
			<strong>{children}</strong>
		),
		[BLOCKS.OL_LIST]: (node: Node, children: ReactNode) => (
			<List
				isNumbered
				isOrdered>
				{children}
			</List>
		),
		[BLOCKS.UL_LIST]: (node: Node, children: ReactNode) => (
			<List isBulleted>
				{children}
			</List>
		),
		[INLINES.HYPERLINK]: (node: Node, children: ReactNode) => (
			<Link href={node.data.uri}>
				{children}
			</Link>
		),
	},
}
const TEXT_OPTIONS: Options = {
	renderMark: {
		[MARKS.BOLD]: renderMarkAsText,
		[MARKS.CODE]: renderMarkAsText,
		[MARKS.ITALIC]: renderMarkAsText,
		[MARKS.STRIKETHROUGH]: renderMarkAsText,
		[MARKS.SUBSCRIPT]: renderMarkAsText,
		[MARKS.SUPERSCRIPT]: renderMarkAsText,
		[MARKS.UNDERLINE]: renderMarkAsText,
	},
	renderNode: {
		[BLOCKS.DOCUMENT]: renderNodeAsText,
		[BLOCKS.EMBEDDED_ASSET]: renderNodeAsText,
		[BLOCKS.EMBEDDED_ENTRY]: renderNodeAsText,
		[BLOCKS.EMBEDDED_RESOURCE]: renderNodeAsText,
		[BLOCKS.HEADING_1]: renderNodeAsText,
		[BLOCKS.HEADING_2]: renderNodeAsText,
		[BLOCKS.HEADING_3]: renderNodeAsText,
		[BLOCKS.HEADING_4]: renderNodeAsText,
		[BLOCKS.HEADING_5]: renderNodeAsText,
		[BLOCKS.HEADING_6]: renderNodeAsText,
		[BLOCKS.HR]: renderNodeAsText,
		[BLOCKS.LIST_ITEM]: renderNodeAsText,
		[BLOCKS.OL_LIST]: renderNodeAsText,
		[BLOCKS.PARAGRAPH]: renderNodeAsText,
		[BLOCKS.QUOTE]: renderNodeAsText,
		[BLOCKS.TABLE]: renderNodeAsText,
		[BLOCKS.TABLE_CELL]: renderNodeAsText,
		[BLOCKS.TABLE_HEADER_CELL]: renderNodeAsText,
		[BLOCKS.TABLE_ROW]: renderNodeAsText,
		[BLOCKS.UL_LIST]: renderNodeAsText,
		[INLINES.ASSET_HYPERLINK]: renderNodeAsText,
		[INLINES.EMBEDDED_ENTRY]: renderNodeAsText,
		[INLINES.EMBEDDED_RESOURCE]: renderNodeAsText,
		[INLINES.ENTRY_HYPERLINK]: renderNodeAsText,
		[INLINES.HYPERLINK]: renderNodeAsText,
		[INLINES.RESOURCE_HYPERLINK]: renderNodeAsText,
	},
}
const RICH_IMAGE_STYLES = {
	objectFit: 'cover',
	position: 'relative',
} as CSSProperties





/**
 * Parses a node fragment from Contentful.
 *
 * @param document The document to be parsed.
 * @returns An array of JSX components.
 */
export function parseContentfulRichText(document: Document, asText: boolean = false): ReactNode | string {
	if (asText) {
		let result = documentToReactComponents(document, TEXT_OPTIONS) as string[]

		while (result.some(item => Array.isArray(item))) {
			result = result.flat()
		}

		return result.join('\n')
	}

	return documentToReactComponents(document, OPTIONS)
}
