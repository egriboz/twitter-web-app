import React from 'react'
import cn from 'classnames'
import styles from './photo.module.css'

function Photo({
  src = 'https://pbs.twimg.com/profile_images/676320116502495232/yH53TYTZ_400x400.jpg',
  alt,
  size = 47
}) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img src={src} width={size} height={size} alt="{alt}" />
    </div>
  )
}

export default Photo
