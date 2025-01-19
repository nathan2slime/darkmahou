import { initTRPC } from '@trpc/server'
import { createChromeHandler } from 'trpc-chrome/adapter'

const t = initTRPC.create({
  isServer: false,
  allowOutsideOfServer: true
})

const appRouter = t.router({
  fetch: t.procedure.query(async () => {
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
      res => res[0].result
    )

    if (tab) {
      return tab.id
    }
  })
})

export type AppRouter = typeof appRouter

createChromeHandler({ router: appRouter })
