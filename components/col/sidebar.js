import React from 'react'
import cn from 'classnames'
import styles from './sidebar.module.css'
import Navigation from '../navigation/navigation'
import TweetButton from '../tweet-button'
import ProfileBox from '../profile-box'

function Sidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />
      <div className={styles.tweetBtn}>
        <TweetButton large full={!flat}>
          {flat ? 'a' : 'Tweet'}
        </TweetButton>
      </div>
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default Sidebar
