import React, { useState } from 'react'
import useSWR from 'swr'

import styles from './index.module.css'

import Layout from '../components/layout/'
import Loading from '../components/loading'
import ProfileTweet from '../components/profile'
import fetcher from '../lib/fetch'

function ProfilePage() {
  const { data, error } = useSWR('/api/tweet2', fetcher)
  console.log(data)
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
      <ul className={styles.list}>
        <li>{data?.statuses[0].user.entities.url.urls[0].expanded_url}</li>
        <li>{data?.statuses[0].user.screen_name}</li>
        <li>{data?.statuses[0].user.name}</li>
        <li>{data?.statuses[0].user.description}</li>
        <li>{data?.statuses[0].user.location}</li>
        <li>{data?.statuses[0].user.profile_background_image_url_https}</li>
        <li>{data?.statuses[0].user.profile_image_url_https}</li>
        <li>{data?.statuses[0].user.followers_count}</li>
        <li>{data?.statuses[0].user.friends_count}</li>
      </ul>
      {data?.statuses.map((tweet) => {
        return <ProfileTweet key={tweet.id} {...tweet} />
      })}
    </Layout>
  )
}

export default ProfilePage
