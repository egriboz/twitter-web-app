import React from 'react'
import cn from 'classnames'
import Button from './button'
import styles from './tweet-button.module.css'

function TweetBtn({ className, children, large = false, ...props }) {
  return (
    <Button
      className={cn(styles.button, large && styles.largeButton, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export default TweetBtn
