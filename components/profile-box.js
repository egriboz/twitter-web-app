const { isResSent } = require('next/dist/next-server/lib/utils')

import React from 'react'
import cn from 'classnames'

import styles from './profile-box.module.css'

import Photo from './photo'
import Button from './button'
import { ArrowBottom } from './icons'
import TextBody from './text-body'

function ProfileBox({ name = 'Fatih Eğriboz', slug = 'egriboz' }) {
  return (
    <Button className={cn([styles.box])}>
      <Photo />
      <div className={styles.body}>
        <TextBody bold>{name}</TextBody>
        <TextBody className={styles.slug}>@{slug}</TextBody>
      </div>
      <ArrowBottom className={styles.icon} />
    </Button>
  )
}

export default ProfileBox
