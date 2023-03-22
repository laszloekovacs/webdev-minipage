import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Showdown from 'showdown'

const queryClient = new QueryClient()

const documentUrl =
  'https://raw.githubusercontent.com/laszloekovacs/webdev-minipage/master/README.md'

const LinkListConsumer = () => {
  const { isLoading, error, data } = useQuery('links', async () => {
    try {
      const data = await (await fetch(documentUrl)).text()
      console.log(data)

      const converter = new Showdown.Converter()
      const html = converter.makeHtml(data)

      return html
    } catch (error) {
      console.log(error)
    }
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return <div dangerouslySetInnerHTML={{ __html: data }} />
}

const LinkList = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LinkListConsumer />
    </QueryClientProvider>
  )
}

export default LinkList
