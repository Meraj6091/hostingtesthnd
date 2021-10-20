import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './testimonials-card.module.css'

const TestimonialsCard = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className={styles['image']}
        />
        <div className={styles['container2']}>
          <span className={` ${styles['text']} ${projectStyles['lead1']} `}>
            {props.text}
          </span>
          <span className={projectStyles['subtitle1']}>{props.text1}</span>
          <span className={` ${styles['text2']} ${projectStyles['lead2']} `}>
            {props.text2}
          </span>
        </div>
      </div>
    </div>
  )
}

TestimonialsCard.defaultProps = {
  image_alt1: 'image',
  text2: 'Vice President, GoPro',
  text1: 'Floyd Miles',
  text: 'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
  image_src1: '/playground_assets/quote-mark.svg',
}

TestimonialsCard.propTypes = {
  image_alt1: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
}

export default TestimonialsCard
