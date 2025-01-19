import { createTRPCProxyClient } from '@trpc/client'
import { useEffect, useState } from 'react'
import { chromeLink } from 'trpc-chrome/link'

import { Button } from '~components/button'

import type { AppRouter } from '~/background'

import '~/styles.css'

import { Head } from '~components/head'

const port = chrome.runtime.connect()
const _trpc = createTRPCProxyClient<AppRouter>({
  links: [chromeLink({ port })]
})

function IndexPopup() {
  const [data, setData] = useState('')
  useEffect(() => {}, [])

  return (
    <div className="p-4 bg-tsu-base rose-pine min-w-[350px]">
      <Head />

      <Button
        className="w-full my-4"
        onClick={async () => {
          const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
          const tab = tabs[0]

          chrome.scripting.executeScript(
            {
              target: { tabId: tab.id },
              func: () => {
                const title = document.querySelector('.entry-title')

                return title.textContent
              }
            },
            res => setData(res[0].result)
          )

          if (tab) {
            return tab.id
          }
        }}
      >
        Load
      </Button>

      {data}
    </div>
  )
}

export default IndexPopup
