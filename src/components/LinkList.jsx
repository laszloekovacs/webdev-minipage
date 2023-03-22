import MarkdownIt from 'markdown-it'
import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const LinkListConsumer = () => {
  const documenturl = 'http://localhost:3001/README.md'

  const { isLoading, error, data } = useQuery('links', () => {
    const bytes = fetch('http://localhost:3001/links').then((res) => res.json())

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
