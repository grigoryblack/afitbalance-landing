import styles from "./About.module.scss";
import AboutPic from "../../assets/Img/autor.jpg"

const About = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h2>Давайие знакомиться!</h2>
                <div className={styles.container__inner}>
                    <div className={styles.inner_info}>
                        <p>
                            Меня зовут <span>Анжелика</span>, я преподаватель с многолетним опытом работы.
                            Помогаю выстраивать здоровые отношения с телом,
                            создаю на своих тренировках уникальную атмосферу и комфортную
                            среду для самосовершенствования.
                        </p>
                        <div className={styles.case}>
                            <p className={styles.case__inner}><strong>*</strong> 8 лет опыта работы тренером</p>
                            <p className={styles.case__inner}><strong>*</strong> Уникальная методика тренировок</p>
                            <p className={styles.case__inner}><strong>*</strong> Индивидуальный подход</p>
                        </div>
                    </div>
                    <img src={AboutPic} alt="autor"/>
                </div>
            </div>
        </section>
    );
};

export default About;