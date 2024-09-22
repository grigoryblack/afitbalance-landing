import React from 'react';
import Logo from '../../assets/Img/logo.svg'
import {RightOutlined} from "@ant-design/icons";
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <img src={Logo} alt="logo" loading="lazy"/>
            <div className={styles.container}>
                <h1>A.FITBALANCE</h1>
                <h2>Мы вместе больше, чем по отдельности</h2>
                <button><a href="#links"> Записаться на тренировку</a> <RightOutlined /></button>
            </div>
        </header>
    );
};

export default Header;