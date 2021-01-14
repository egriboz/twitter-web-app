import React, { useState } from 'react'
import useSWR from 'swr'

import styles from './index.module.css'

import Layout from '../components/layout/'
import Loading from '../components/loading'
import Tweet from '../components/tweet'
import fetcher from '../lib/fetch'

function HomePage() {
  const { data, error } = useSWR('/api/tweet', fetcher)
  //console.log(data.statuses)
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
      {!data && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}

      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet} />
      })}
    </Layout>
  )
}

export default HomePage
