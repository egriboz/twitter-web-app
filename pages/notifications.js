import React, { useState } from 'react'
import useSWR from 'swr'

import Layout from '../components/layout/'
import Name from '../components/name'
import fetcher from '../lib/fetch'

function NotificationPage() {
  const { data, error } = useSWR('/api/name', fetcher)

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
      <div>deneme</div>
      {data?.statuses.map((name) => {
        return <Name key={name.id} {...name} />
      })}
      {/* {!data && <p>Loading...</p>}

      {data?.statuses.map((name) => {
        return <Name key={name.id} {...name} />
      })} */}
    </Layout>
  )
}

export default NotificationPage
