import React from 'react'
import cn from 'classnames'
import styles from './col-sidebar.module.css'
import Navigation from './navigation'
import TweetButton from './tweet-button'
import ProfileBox from './profile-box'

function Sidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />
      <TweetButton large full={!flat}>
        {flat ? 'a' : 'Tweet'}
      </TweetButton>
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default Sidebar
