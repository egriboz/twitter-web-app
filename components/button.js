import React from 'react'

import cn from 'classnames'

import styles from './button.module.css'

function Button({
  full = false,
  large = false,
  children,
  className,
  ...props
}) {
  return (
    <button
      type="button"
      className={cn(
        styles.button,
        full && styles.fullWidth,
        large && styles.largeButton,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
