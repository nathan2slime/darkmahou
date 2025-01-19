import { RefreshCw } from 'lucide-react'
import { useState } from 'react'

import { Button } from '~components/button'
import { Head } from '~components/head'

import { type Anime, fetchAnime } from '~services/anime.service'

import '~/styles.css'

const IndexPopup = () => {
  const [anime, setAnime] = useState<Anime>()

  return (
    <div className="p-4 bg-tsu-base rose-pine min-w-[350px]">
      <Head />

      <Button className="w-full my-4 flex items-center gap-2 justify-center" onClick={async () => setAnime(await fetchAnime())}>
        <RefreshCw className="w-4 h-4" />
        Load
      </Button>

      {anime && (
        <div className="w-full bg-tsu-overlay p-2 gap-2 rounded-lg items-start justify-start flex">
          <img src={anime.thumb} alt={anime.title} className="w-full rounded-lg max-w-[120px]" />

          <div className="flex flex-col">
            <h1 className="text-base text-tsu-love font-bold text-center line-clamp-3">{anime.title}</h1>
            <div className="h-[1px] bg-tsu-hhigh my-1 w-full" />
            <p className="text-xs text-tsu-text font-bold line-clamp-5 text-center">{anime.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default IndexPopup
