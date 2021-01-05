import React, { useState } from 'react'
import useSWR from 'swr'

import Layout from '../components/layout/'
import Tweet from '../components/tweet'
import fetcher from '../lib/fetch'

function HomePage() {
  const { data, error } = useSWR('/api/tweet', fetcher)

  // React.useEffect(() => {
  //   async function getData() {
  //     const response = await fetch('http://localhost:3000/api/tweet')
  //     const data = await response.json()
  //     console.log(data)
  //     dataSet(data.statuses)
  //     dataLoadingSet(false)
  //   }
  //   getData()
  // }, [])

  return (
    <Layout>
      {!data && <p>Loading...</p>}

      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet} />
      })}
    </Layout>
  )
}

export default HomePage
