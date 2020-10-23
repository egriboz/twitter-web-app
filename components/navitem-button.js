import React from 'react'
import cn from 'classnames'
import Button from './button'
import styles from './navitem-button.module.css'

function NavItemButton({ notify, selected, children, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...props}
    >
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
  )
}

export default NavItemButton
