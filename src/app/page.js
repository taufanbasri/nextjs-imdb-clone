import Result from "@/Components/Result"

const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending'
  const genreQuery = genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
  const url = `https://api.themoviedb.org/3/${genreQuery}?api_key=${API_KEY}`
  const res = await fetch(url, { next: { revalidate: 10000 } })
  const data = await res.json()
  const results = data.results

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return (
    <h1>
      <Result results={results} />
    </h1>
  )
}
