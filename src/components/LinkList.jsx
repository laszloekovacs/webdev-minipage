import MarkdownIt from 'markdown-it'
import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const documentUrl =
  'https://raw.githubusercontent.com/laszloekovacs/webdev-minipage/master/README.md'

const LinkListConsumer = () => {
  const { isLoading, error, data } = useQuery('links', () => {
    const bytes = fetch(documentUrl).then((res) => res.json())

    /* transform the loaded md file into json */
    const md = new MarkdownIt()

    const result = md.parse('Hello *world*')

    console.log(result)
  })
}

const LinkList = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LinkListConsumer />
    </QueryClientProvider>
  )
}

export default LinkList
