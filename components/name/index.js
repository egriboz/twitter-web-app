import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './style.module.css'
import Photo from '../photo'
import IconButton from '../button/icon'
import * as Icon from '../icons'
import cn from 'classnames'

function Name({ ids, next_cursor }) {
  // console.log(ids)
  // ...props : name, slug, text, datetime, children
  // console.log(user.name)
  //console.log(...props)
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
    <div>
      user.screen_name:---: {ids} next_cursor: {next_cursor}
    </div>
  )
}

export default Name
