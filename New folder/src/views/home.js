import React from 'react'

import { Helmet } from 'react-helmet'

import TestimonialsCard from '../components/testimonials-card'
import FeatureCard from '../components/feature-card'
import LinkIconButton from '../components/link-icon-button'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Landify1</title>
        <meta property="og:title" content="Landify1" />
      </Helmet>
      <div className={styles['Main']}></div>
      <div className={styles['Testimonials']}>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <img
              alt="image"
              src="/playground_assets/quote-mark.svg"
              className={styles['image']}
            />
            <h1 className={` ${styles['text']} ${projectStyles['headline2']} `}>
              Real Stories from Real Customers
            </h1>
            <span>Get inspired by these stories.</span>
            <div className={styles['container03']}>
              <TestimonialsCard image_src="/playground_assets/logo-4.svg"></TestimonialsCard>
            </div>
          </div>
          <div className={styles['container04']}>
            <div className={styles['container05']}>
              <TestimonialsCard
                src="/playground_assets/logo-1.svg"
                text="I used Landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
                text1="Jane Cooper"
                text2="CEO, Airbnb"
                image_src="/playground_assets/logo-1.svg"
              ></TestimonialsCard>
            </div>
            <div className={styles['container06']}>
              <TestimonialsCard
                text="Landify saved our time in designing my company page."
                text1="Kristin Watson"
                text2="Co-Founder, FedEx"
                image_src="/playground_assets/logo-2.svg"
              ></TestimonialsCard>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Features']}>
        <h2 className={` ${projectStyles['headline2']} ${styles['text2']} `}>
          Why Choose Us?
        </h2>
        <div className={styles['Features1']}>
          <div className={styles['container07']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M512 36.571c-262.286 0-475.429 213.143-475.429 475.429s213.143 475.429 475.429 475.429 475.429-213.143 475.429-475.429-213.143-475.429-475.429-475.429zM512 0c282.857 0 512 229.143 512 512s-229.143 512-512 512-512-229.143-512-512 229.143-512 512-512zM283.429 475.429c5.143 0 9.143 4 9.143 9.143v274.286c0 5.143-4 9.143-9.143 9.143h-18.286c-5.143 0-9.143-4-9.143-9.143v-274.286c0-5.143 4-9.143 9.143-9.143h18.286zM512 512c40.571 0 73.143 32.571 73.143 73.143 0 26.857-14.857 50.286-36.571 62.857v65.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-65.143c-21.714-12.571-36.571-36-36.571-62.857 0-40.571 32.571-73.143 73.143-73.143zM512 73.143c242.286 0 438.857 196.571 438.857 438.857s-196.571 438.857-438.857 438.857-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857zM310.857 347.429v54.857c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286v-54.857c0-70.857 57.143-128 128-128s128 57.143 128 128v54.857c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286v-54.857c0-110.857-90.286-201.143-201.143-201.143s-201.143 90.286-201.143 201.143zM804.571 768v-292.571c0-20-16.571-36.571-36.571-36.571h-512c-20 0-36.571 16.571-36.571 36.571v292.571c0 20 16.571 36.571 36.571 36.571h512c20 0 36.571-16.571 36.571-36.571z"></path>
            </svg>
            <FeatureCard title="SSL Secured"></FeatureCard>
          </div>
          <div className={styles['container08']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
              <path d="M1024 576l-128-256h-192v-128c0-35.2-28.8-64-64-64h-576c-35.2 0-64 28.8-64 64v512l64 64h81.166c-10.898 18.832-17.166 40.678-17.166 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.268-45.168-17.166-64h354.334c-10.898 18.832-17.168 40.678-17.168 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.27-45.168-17.168-64h81.168v-192zM704 576v-192h132.668l96 192h-228.668z"></path>
            </svg>
            <FeatureCard
              title="Island Wide Delivery"
              image_src="/playground_assets/02.svg"
            ></FeatureCard>
          </div>
          <div className={styles['container09']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon4']}>
              <path d="M854 656q18 0 30 12t12 30v148q0 50-42 50-298 0-512-214t-214-512q0-42 50-42h148q18 0 30 12t12 30q0 78 24 150 8 26-10 44l-82 72q92 192 294 290l66-84q12-12 30-12 10 0 14 2 72 24 150 24z"></path>
            </svg>
            <FeatureCard
              title="Customer Service"
              image_src="/playground_assets/03.svg"
            ></FeatureCard>
          </div>
        </div>
      </div>
      <div className={styles['Feature1']}>
        <div className={styles['container10']}>
          <img
            src="https://images.unsplash.com/photo-1633113093730-47449a1a9c6e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjMzMzM4NTk4&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080"
            alt="image"
            className={styles['image1']}
          />
        </div>
        <div className={styles['container11']}>
          <h3 className={projectStyles['headline3']}>Read Our Story</h3>
          <span className={` ${styles['Text4']} ${projectStyles['lead1']} `}>
            <span className={styles['text5']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </span>
          </span>
          <LinkIconButton text="Continue "></LinkIconButton>
        </div>
      </div>
      <div className={styles['CTA']}></div>
    </div>
  )
}

export default Home
