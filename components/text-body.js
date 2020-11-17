import React from 'react'

import cn from 'classnames'

import styles from './text-body.module.css'

function TextBody({ bold = false, className, children, ...props }) {
  return (
    <p className={cn([styles.body, bold && styles.bold, className])} {...props}>
      {children}
    </p>
  )
}

export default TextBody
