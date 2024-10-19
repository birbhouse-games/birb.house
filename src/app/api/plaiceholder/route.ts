// Module imports
import { strict as assert } from 'assert'
import { getPlaiceholder } from 'plaiceholder'





export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const src = searchParams.get('src')

		assert(src)

		const buffer = await fetch(src).then(async (res) =>
			Buffer.from(await res.arrayBuffer())
		);

		const plaiceholderData = await getPlaiceholder(buffer);

    return new Response(JSON.stringify(plaiceholderData))
	} catch (error) {
    return new Response(`Something went wrong: ${error.message}`, {
      status: 500,
    })
	}
}
