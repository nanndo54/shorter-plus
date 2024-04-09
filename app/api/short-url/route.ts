import ShortUrlRequest from '@/app/api/types/ShortUrlRequest'

export async function POST(request: Request) {
  const data: ShortUrlRequest = await request.json()

  try {
    // if (data.customSlug) {
    // } else {
    // }

    return new Response(null, { status: 200 })
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}
