import React, { Fragment } from 'react'
import cn from 'classnames'
import styles from './list.module.css'

import TextBody from '../text/body'

function ListBox({
  flat = false,
  location = 'Trending location',
  tname = 'Mytwitteranniversary',
  slug = '77K Tweet'
}) {
  // console.log(flat + ' is flat ?')
  return (
    <>
      <div className={cn([styles.box])}>
        <TextBody className={styles.slug}>{location}</TextBody>
        <TextBody bold>#{tname}</TextBody>
        <TextBody className={styles.slug}>{slug}</TextBody>
      </div>
      <div className={cn([styles.box])}>
        <TextBody className={styles.slug}>{location}</TextBody>
        <TextBody bold>#{tname}</TextBody>
        <TextBody className={styles.slug}>{slug}</TextBody>
      </div>
      <div className={cn([styles.box])}>
        <TextBody className={styles.slug}>{location}</TextBody>
        <TextBody bold>#{tname}</TextBody>
        <TextBody className={styles.slug}>{slug}</TextBody>
      </div>
    </>
  )
}

export default ListBox
