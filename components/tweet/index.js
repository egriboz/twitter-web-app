import React from 'react'
import styles from './style.module.css'
import Photo from '../photo'

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import IconButton from '../button/icon'
import * as Icon from '../icons'

function Tweet({ ...props }) {
  // ...props : name, slug, text, datetime, children
  console.log(props)

  // created_at
  // retweet_count
  // favorite_count
  // reteeted
  // favorited
  // text
  // user.name
  // user.profile_image_url_https
  // user.screen_name

  return null
  // return (
  //   <article className={styles.tweet}>
  //     {/* avatar */}
  //     <div className={styles.avatar}>
  //       <Photo />
  //     </div>
  //     {/* body */}
  //     <div className={styles.body}>
  //       <header className={styles.header}>
  //         <span className={styles.name}>{name}</span> <span>@{slug}</span> ·{' '}
  //         <span>{formatDistanceToNowStrict(datetime)}</span>
  //       </header>
  //       <div className={styles.content}>{text}</div>
  //       <footer className={styles.footer}>
  //         {/* reply */}
  //         <div className={styles.footerButton}>
  //           <IconButton className={styles.actionButton}>
  //             <Icon.Reply />
  //           </IconButton>
  //           <span>574</span>
  //         </div>
  //         {/* retweet */}
  //         <div className={styles.footerButton}>
  //           <IconButton className={styles.actionButton}>
  //             <Icon.Retweet />
  //           </IconButton>
  //           <span>17</span>
  //         </div>
  //         {/* like */}
  //         <div className={styles.footerButton}>
  //           <IconButton className={styles.actionButton}>
  //             <Icon.Like />
  //           </IconButton>
  //         </div>
  //         {/* share */}
  //         <div className={styles.footerButton}>
  //           <IconButton className={styles.actionButton}>
  //             <Icon.Share />
  //           </IconButton>
  //         </div>
  //       </footer>
  //     </div>
  //   </article>
  // )
}

export default Tweet
