import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Showdown from 'showdown'

const queryClient = new QueryClient()

const documentUrl =
  'https://raw.githubusercontent.com/laszloekovacs/webdev-minipage/master/content.md'

const LinkListLoader = () => {
  const { isLoading, error, data } = useQuery('links', async () => {
    try {
      const data = await (await fetch(documentUrl)).text()

      const converter = new Showdown.Converter()
      const html = converter.makeHtml(data)

      return html
    } catch (error) {
      console.log(error)
    }
  })

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{'An error has occurred: ' + error.message}</p>

  return <main dangerouslySetInnerHTML={{ __html: data }} />
}

const LinkList = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LinkListLoader />
    </QueryClientProvider>
  )
}

export default LinkList
