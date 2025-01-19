export type Anime = {
  title: string
  description: string
  thumb: string
}

export const fetchAnime = async () => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
  const tab = tabs[0]

  const anime = await new Promise<Anime>(resolve =>
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        func: () => {
          const elTitle = document.querySelector('.entry-title')
          const elThumb = document.querySelector<HTMLImageElement>('noscript .ts-post-image')

          const elDescription = document.querySelector('.entry-content')

          return {
            title: elTitle.textContent,
            description: elDescription.textContent,
            thumb: elThumb.src
          }
        }
      },
      res => resolve(res[0].result)
    )
  )

  if (tab) {
    return anime
  }
}
