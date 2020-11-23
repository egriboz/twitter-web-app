import React, { Fragment } from 'react'
import cn from 'classnames'

import styles from './profile-box.module.css'

import Photo from '../photo'
import Button from '../button'
import { ArrowBottom } from '../icons'
import TextBody from '../text/body'

function ProfileBox({
  flat = false,
  name = 'Fatih Eğriboz',
  slug = 'egriboz'
}) {
  return (
    <Button className={cn([styles.box])}>
      <Photo size={40} />
      {!flat && (
        <Fragment>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
          </div>
          <ArrowBottom className={styles.icon} />
        </Fragment>
      )}
    </Button>
  )
}

export default ProfileBox
