'use client'

import Button from '@/components/common/Button/Button';

import СommunityPng from '@/assets/images/сommunity.png';
import Image from 'next/image';

import styles from './Profile.module.scss';
import cn from 'classnames';

export default function Profile() {
  return (
    <main className = {styles.main}>
      <div className = {cn(styles.container, styles.section)}>
        <div className = {styles.sectionLeft}>
          <div className = {styles.community}>
            <h1 className = {styles.communityTitle}>PROFILE</h1> 
            <Image src = {СommunityPng} alt = 'СommunityPng' />
          </div>
          <div className = {styles.info}>
            <div className = {styles.infoBlock}>
              <h3 className = {styles.infoBlockTitle}>YOUR NAME</h3>
              <h2 className = {styles.infoBlockValue}>ALEXEEV ALEXEY</h2>
            </div>
            <div className = {styles.infoBlock}>
              <h3 className = {styles.infoBlockTitle}>YOUR EMAIL</h3>
              <h2 className = {styles.infoBlockValue}>SOBAKAMAIL@mail.ru</h2>
            </div>
            <Button className = {styles.editBtn} onClick = {(e) => {}}> 
              EDIT PROFILE
            </Button>
          </div>
        </div>
        <div className = {styles.sectionRight}>
          <div className = {styles.stiker}>
            <h3 className = {styles.stikerTitle}>
              ABOUT ME
            </h3>
            <p className = {styles.stikerDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed in ante consequat, ornare nisi et, ultrices libero.
              Nunc nibh dolor, maximus quis auctor nec, tempor quis ipsum.
              Proin mollis pellentesque nulla ac varius.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
