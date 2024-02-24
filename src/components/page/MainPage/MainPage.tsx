'use client'

import Slider from '@/components/Slider/Slider';
import styles from './MainPage.module.scss';
import SideBar from './SideBar/SideBar';
import Showcase from './Showcase/Showcase';

const MainPage = () => {
    return <>
        <section className = {styles.slider}> 
            <Slider/>
        </section>
        <section className = {styles.content}>
            <SideBar />
            <Showcase />
        </section>
    </>
};

export default MainPage;
