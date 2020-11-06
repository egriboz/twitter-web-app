const { isResSent } = require('next/dist/next-server/lib/utils')

import React from 'react'
import cn from 'classnames'
import styles from './photo.module.css'

function Photo({
  src = 'https://pbs.twimg.com/profile_images/676320116502495232/yH53TYTZ_400x400.jpg',
  alt
}) {
  return (
    <div className={cn([styles.photo])}>
      <img src={src} alt="{alt}" />
    </div>
  )
}

export default Photo
