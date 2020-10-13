import React from 'react'


import styles from "./button.module.css"

function Button({ children }) {
  return <button type="button" className={styles.error}>{children}</button>
}

export default Button


