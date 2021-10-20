import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './stats-card.module.css'

const StatsCard = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container1']}>
        <h1 className={projectStyles['headline4']}>{props.number}</h1>
        <span className={projectStyles['body1']}>{props.description}</span>
      </div>
    </div>
  )
}

StatsCard.defaultProps = {
  number: '10',
  image_src: '/playground_assets/05.svg',
  description: 'Description',
  image_alt: 'image',
}

StatsCard.propTypes = {
  number: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default StatsCard
