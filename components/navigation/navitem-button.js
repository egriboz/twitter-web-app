import React from 'react'
import cn from 'classnames'
import Button from '../button'
import styles from './navitem-button.module.css'

function NavItemButton({
  href,
  notify,
  selected,
  children,
  className,
  ...props
}) {
  return (
    <Button
      className={cn(
        styles.navButton,
        selected && styles.navButtonSelected,
        className
      )}
      href={href}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  )
}

export default NavItemButton
