import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './feature-card.module.css'

const FeatureCard = (props) => {
  return (
    <div className={styles['container']}>
      <h5 className={` ${styles['text']} ${projectStyles['headline5']} `}>
        {props.title}
      </h5>
      <span className={styles['text1']}>{props.text}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
}

FeatureCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default FeatureCard
