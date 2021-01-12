import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './style.module.css'
import Photo from '../photo'
import IconButton from '../button/icon'
import * as Icon from '../icons'
import cn from 'classnames'

function Tweet({
  created_at,
  retweet_count,
  favorite_count,
  retweeted,
  favorited,
  text,
  user,
  in_reply_to_status_id_str
}) {
  // ...props : name, slug, text, datetime, children
  // console.log(user.name)

  // created_at
  // retweet_count
  // favorite_count
  // reteeted
  // favorited
  // text
  // user.name
  // user.profile_image_url_https
  // user.screen_name

  return (
    <article className={styles.tweet}>
      {/* avatar */}
      <div className={styles.avatar}>
        <Photo src={user.profile_image_url_https} />
      </div>
      {/* body */}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{user.name}</span>{' '}
          <span>@{user.screen_name}</span> ·{' '}
          <span>{formatDistanceToNowStrict(new Date(created_at))}</span>
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>
          {/* reply */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Reply />
            </IconButton>
            {in_reply_to_status_id_str != null && <span>+</span>}
          </div>
          {/* retweet */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Retweet />
            </IconButton>
            {retweet_count > 0 && <span>{retweet_count}</span>}
          </div>
          {/* like */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              {favorite_count > 0 ? (
                <Icon.LikeFill className={cn(styles.fillColor)} />
              ) : (
                <Icon.Like />
              )}
            </IconButton>
            {favorite_count > 0 && <span>{favorite_count}</span>}
          </div>
          {/* share */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default Tweet
